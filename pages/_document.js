import { Html, Head, Main, NextScript } from 'next/document'
import { useState } from 'react'
// import favicon from "../public/"
export default function Document() {

//   let title = [
//   "Buy Beauty Products at SUGAR Cosmetics Online Store", //home
//   "SUGAR Makeup: Buy Makeup Products Online in India | SUGAR Cosmetics", //
//   // "Makeup Brushes: Buy SUGAR Makeup Brushes Online in India | SUGAR Cosmetics",
//   "SUGAR Cosmetics - Account",
//   "SUGAR Cosmetics - Wishlist",
//   "SUGAR Cosmetics - Cart"
//   ]
//   let pageroute = [
//     "/","/product","/product","/account","wishlist","cart"
//   ]


// const [first, setfirst] = useState(0)





  return (
    <Html>
      <Head>
      <link
  rel="stylesheet"
  type="text/css"
  charset="UTF-8"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
/>
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
/>
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