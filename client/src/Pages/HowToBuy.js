import HeaderHTB from "../Components/HowToBuy/HeaderHTB/HeaderHTB";
import HTB from '../Components/HowToBuy/HowToBuy/HowTB';
import PP from '../Components/HowToBuy/HowToBuy/Paypal';
import DD from '../Components/HowToBuy/HowToBuy/DirectDepo';
import CP from '../Components/HowToBuy/HowToBuy/Coinpayments'
export default function ThankYouPage() {
  return (
    <>
      <HeaderHTB />
      <HTB />
      <PP />
      <DD />
      <CP />
    </>
  )
}