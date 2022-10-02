import { Box } from "@mui/system"
import CartPage from "../../components/cart/CartPage"
import Navigation from "../../components/cart/Navigaition"
import Missing from "../../components/cart/Missing"


const index = () => {
  return (
    <Box backgroundColor="#f2f2f2">
        <Navigation/>
        <CartPage/>
        <Missing/>
    </Box>
  )
}

export default index
