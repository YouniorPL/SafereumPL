import './Welcome.scss';
import top_btn from './images/top_btn.svg'
//eslint-disable-next-line
import CategoryName from '../CategoryName/CategoryName';
import BtnCta from '../BtnCta/BtnCta'


export default function AndromedaTokenInformation() {
  return (
    <div className="andromedatokeninformation">
      <div className="container">
        <h2>SAFEREUM NETWORK</h2>

        <h3>GENERAL INFORMATION.</h3>

        <p>Safereum Network is a decentralized blockchain project,
          with the aim to speed up the global adaptaion of cryptocurrencies
          by enabling services and tools for companies, start-ups, and individuals.
          Our Mission is to deliver a fully functional payment system which will not only allow you to pay with Crypto wherever you are,
          but also be able to earn cryptocurrency by doing regular jobs.</p>

        <h3>INTRODUCTION TO UTILITIES.</h3>

        <p>Our ecosystem consists of 3 Main products: <strong>Safechain, Safepay and SafeWRK.</strong>
        <br />
        But, we also plan to deliver more minor services to stabilize the whole network even more; for example: 
        SafeWallet, SafeSwap, SafeXchange, Blockfund, and many more.
           <br />
          <br />
        The Safereum team is building every product with special care, 
        we always make sure that the services we deliver are top quality and fully secured, 
        so you don't need to be worried about your funds.
        </p>

        <h3>THE 3 MAIN PRODUCTS</h3>

        <p>Below you can find more detailed information about our 3 major products being: Safechain, Safepay, SafeWRK.
          In case of any questions, do no hesitate to contact us directly via email office@safereum.eu or you can join our 
          community by clicking below button.
          <BtnCta
            body='Join our community!'
            link='https://t.me/SafereumGlobal'
            className='thank-you__btn'
          />
        </p>

        <br />
        <h1>Safechain:</h1>
        <p>Safechain is native PoS Masternode blockchain, <br /> allowing us to develop additional features like
        instant and private transfers, <br /> assuring full decentralization and protection of privacy. <br /><br />
        <strong>What can you expect?</strong>
        </p>
        <br />
        <ul>
          <li>High-Speed Transactions</li>
          <li>Safety</li>
          <li>Scalability</li>
          <li>Reliability</li>
          <li>Low Network Fees.</li>
        </ul>
        

        <h1>Safepay:</h1>
        <p>Safepay is decentralized payment gateway allowing its users to pay for daily needs using Safereum Coin 
          or supported cryptocurrencies. <br />
          
        </p>

        <p>Phase 3:</p>
        <ul>
          <li>Second Pre-sale via unidex/dxsale.</li>
          <li>Preview of <strong>Andromeda Exchange.</strong></li>
          <li>Secondary Airdrop of <strong>Andromeda Token.</strong></li>
          <li>Establishment of first partnerships.</li>
        </ul>

        <p>Phase 4: ICO</p>
        <ul>
          <li>Preparation for Launchpad ICO.</li>
          <li>First beta of <strong>Andromeda Exchange</strong> with demo feature.</li>
          <li>More partnerships.</li>
          <li>Opening pre-listing form.</li>
          <li>Finish of the Launchpad ICO.</li>
          <li>Start of weekly burn (0.02% of supply every week).</li>
        </ul>

        <p>Phase 5:</p>
        <ul>
          <li>Publishing final version of <br /> <strong>Andromeda Exchange.</strong> </li>
          <li>Listing of the first <strong>deflationary tokens.</strong></li>
          <li>Start of mobile app development.</li>
          <li>Beta tests of mobile app.</li>
          <li>Even more partnerships.</li>
          <li>Developing <strong>Andromeda Debit Card.</strong></li>
        </ul>

        <p>Phase 6:</p>
        <ul>
          <li>Developing Andromeda Blockchain Network with proof-of-stake technology.</li>
          <li>Running charity campaign.</li>
        </ul>

        <h3>TOKEN DISTRIBUTION.</h3>
        <p>All the Andromeda Tokens are pre-mined;
        hence Andromeda Token is not mineable.
        The main distribution of Andromeda
        Token will happen during Launchpad ICO,
        before that, the equivalent of 2% total
        supply will be distributed for pre-sales.
        There is another 0.1% of total supply
        planned for airdrops/events to
        be distributed. <br />
          <br />
        Max supply of Andromeda Token is
        1,000,000,000,000,000  from which
        50% of the supply was burned at the start.
        That means total supply is
        500,000,000,000,000 and part of it
        will be burned manually.
        </p>
        <h3>ANDROMEDA TOKEN DETAILS:</h3>
        <ul>
          <li>Name <strong>Andromeda Token.</strong></li>
          <li>Symbol <strong>ADRT.</strong></li>
          <li>Contract <strong>0x3638edf484469fe27082<br className="br_to_delete" />f5b8389d5811e09a6772</strong></li>
          <li>Tax 2%.</li>
          <li>2% fee automatically distribute to holders.</li>
          <li>3% fee automatically locked in liquidity forever while selling.</li>
          <li>50% of the supply burned at the start.</li>
          <li>0.02% - 0.1% of the Supply will be
          burned every week starting from ICO ending.</li>
        </ul>
        <h3>ANDROMEDA TEAM</h3>
        <p>CEO- Karol Zacharski	<br />
            Head of Graphic designers <br />
            - Mathieu Guicheteau<br />
            Advisory Board - Lucian Tanase<br />
        </p>
        <ul>
          <li><strong>Twitter:</strong> https://twitter.com/andromeda_ex</li>
          <li><strong>Discord:</strong> https://discord.gg/rXNSJmnT</li>
          <li><strong>Telegram Presale:</strong> https://t.me/Andromeda_Presale</li>
          <li><strong>Telegram group:</strong> https://t.me/AndromedaExchange</li>
          <li><strong>Facebook:</strong>https://www.facebook.com/<br className="br_to_delete" />AndromedaExchange</li>
        </ul>
        <div>
          <a href="/">
            <img src={top_btn} alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}