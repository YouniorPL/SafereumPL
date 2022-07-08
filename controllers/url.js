
const shortId = require('shortid');
const Link = require('../models/Link');
exports.getUrl = async function (req, res, next) {
    const { params, query } = req;
    const { code } = params;
    const { url } = query;
    try {
        if (!shortId.isValid(code)) throw new Error(`code is not valid`)

        const link = await Link.findOne({ code: code });
        if (!link) throw new Error(`Could not find link`)
        link.clicks++;
        link.save();
        if (!req.cookies.affiliate)
            res.cookie("affiliate", `${link.code}`, { maxAge: 2 * 60 * 60 * 1000 * 1000 * 1000, httpOnly: true });
        res.redirect(url || req.siteUrl)

    }
    catch (err) {
        return res.status(200).json({ "success": false, "message": err.message })

    }

}
exports.makeUrl = async function (req, res, next) {
    const { body } = req;
    const { address } = body;
    try {
        if (!address) throw new Error("Invalid address")
        let link = await Link.findOne({ walletAddress: address })
        if (link) return res.status(200).json({ "success": true, link: `${req.siteUrl}/api/link/${link.code}`, "aff_earn": link.ref_bouns, "buy_bouns": link.buy_bouns });

        let code = shortId.generate();
        Link.create({
            code,
            walletAddress: address
        })
        return res.status(200).json({ "success": true, link: `${req.siteUrl}/api/link/${code}`, "message": "you code was created successfully ", "aff_earn": link.ref_bouns, "buy_bouns": link.buy_bouns })
    } catch (err) {
        return res.status(200).json({ "success": false, "message": err.message })
    }


}
exports.getPercent = async function (req, res, next) {
    const { body } = req
    const { address, spent } = body;
    console.log(body)
    try {
        let AdressText = `0x66435F4De53DdCBF71b3Efb185BD65B0A95EC9FC 

        0xd5b64ca8d9b3bcd1d5e221a28801f2e9633aa35d 
        
        0x4D586DcfA56819F468E78e2ec3476e25Fc4Ed66e 
        
        0xe7cd35Fd6c4462a938240F896d9B7CE884561A98 
        
        0xD94fdC513d27086cB6761F01389787b2f52C5318 
        
        0xCFf501d840CFC644AE2B5071195005581E5A83f8
        
        0xFCE42Ee03ffcd58C2Ee15f7310Ebf56c99B599e8
        
        0xE56C645FAc35f377E0Cf35104008ECFA49AD2862
        
        0x5ea01482DE5d488cE7C0144614d2A7aaf71a3ef6
        
        0xFd612B4a25A5Af991ECC9CfE48F6f5Bd0762Ab11 
        
        0x3e10b799D4cC6e06AD54eFe0dd3ca5Cdc98975ad 
        
        0x619102C56BCc368623bfc8D85De7A2454aA29b36 
        
        0x8Bf8eCe02836dC8e6Af4fA4B402d281F81F3101e
        
        0xeEDCEA7e2a2Febf8aE55005e459B9502Dd5E89Cc
        
        0x1D674562d35D30b566800cF367789d6608019E1B
        
        0x87f1d3b0b2700d05741545a78ea9e5d5edee759b
        
        0x24DC6B7eD230028E3B85a39296D3f92720D93A30
        
        0xEff0660E5401793b31085ba0682A8dDe268ddA98
        
        0x92FB3416F35870c815775a43c6758c6f53f372CE `
        let ArrayAdresses = AdressText.split('\n');
        function searchStringInArray(value) {
            let index = -1;
            ArrayAdresses.find(
                function (str, i) {
                    if (str.trim() == value) {
                        index = i;
                        console.log(str)
                    }
                })

            return index;

        }
        if (!address) throw new Error("Invalid address");
        if (!spent) throw new Error("no spent money has been provided");
        let isPremiumBuyer = searchStringInArray(address)
        let firstPercentage = Number(spent) * 0.15
        let secondPercentage = isPremiumBuyer ? Number(spent) * 0.07 : (Number(spent) * 0.05);

        const affiliateCode = req.cookies.affiliate;

        if (affiliateCode) {
            const link = await Link.findOne({ code: affiliateCode });
            // if (!link) throw new Error(" no link found");
            if (link) {
                let isPremiumRef = searchStringInArray(link.walletAddress);
                firstPercentage = isPremiumRef ? Number(spent) * 0.17 : Number(spent) * 0.15;
                link.ref_bouns = link.ref_bouns + firstPercentage;

                link.save();
            }

            if (address) {
                secondLink = await Link.findOne({ walletAddress: address });
                if (secondLink) {
                    secondLink.buy_bouns = secondLink.buy_bouns + secondPercentage;
                    secondLink.save();
                } else {
                    await Link.create({
                        walletAddress: address,
                        buy_bouns: secondPercentage,
                        code: shortId.generate()
                    })
                }
            }



            let first = {
                reward: firstPercentage,
                address: link ? link.walletAddress : "unknown",
            }
            let second = {
                reward: secondPercentage,
                address
            }
            console.log("first link", link)
            console.log("second link", secondLink)

            return res.status(200).json({ "success": true, "message": `first got ${first.reward}, second got ${second.reward}`, first, second })
        }
        return res.status(200).json({ "success": true, "message": "pay successfully but no affiliateCode in your browser " })

    } catch (err) {
        return res.status(200).json({ "success": false, "message": err.message })

    }
};

function validateEmail(email) {
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/
    return regex.test(email);
}