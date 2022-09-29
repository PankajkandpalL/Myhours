import { Box } from "@mui/system"
import CartPage from "../../components/cart/CartPage"
import Location from "../../components/cart/Location"
import Missing from "../../components/cart/Missing"


const index = () => {
  return (
    <Box backgroundColor="#f2f2f2">
        <Location/>
        <CartPage/>
        <br />
        <Missing/>
    </Box>
  )
}

export default index
