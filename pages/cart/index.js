import { Box } from "@mui/system"
import CartPage from "../../components/cart/CartPage"
import Navigation from "../../components/cart/Navigaition"
import Missing from "../../components/cart/Missing"
import Layout from "../../components/Layout/Layout"


const index = () => {
  return (
    <Layout>
    <Box backgroundColor="#f2f2f2">
        <Navigation/>
        <CartPage/>
        {/* <Missing/> */}
    </Box>
    </Layout>
  )
}

export default index
