import { Html, Head, Main, NextScript } from 'next/document'
// import favicon from "../public/"
export default function Document() {

  let title = [
  "Buy Beauty Products at SUGAR Cosmetics Online Store", //home
  "SUGAR Makeup: Buy Makeup Products Online in India | SUGAR Cosmetics", //
  // "Makeup Brushes: Buy SUGAR Makeup Brushes Online in India | SUGAR Cosmetics",
  "SUGAR Cosmetics - Account",
  "SUGAR Cosmetics - Wishlist",
  "SUGAR Cosmetics - Cart"
  ]
  let pageroute = [
    "/","/product","/product","/account","wishlist","cart"
  ]


const [first, setfirst] = useState(0)





  return (
    <Html>
      <Head>
      
      <link rel="shortcut icon" href={'https://in.sugarcosmetics.com/sugar-logo.jpg'} />
      </Head>
<title>
Buy Beauty Products at SUGAR Cosmetics Online Store
</title>
      <body style={{
        margin : 0
      }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}