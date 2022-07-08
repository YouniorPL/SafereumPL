exports.siteUrl = function (req, res, next) {
    const siteUrl = req.protocol + '://' + req.get('host');
    req.siteUrl = siteUrl;
    console.log(` affilite is ${req.cookies.affiliate}`)
    next()
}