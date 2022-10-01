import { Box, Button, Input, TextField } from "@mui/material"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import {IoIosArrowDown} from "react-icons/io"
import {RiDeleteBinLine} from "react-icons/ri"
import {BiPlus,BiMinus} from "react-icons/bi"
import {TbDiscount2} from "react-icons/tb"
import React from 'react'
import EmptycaCart from "../../components/cart/EmptyCart";
import Script from 'next/script'
// import styles from '../../styles/Home.module.css'

// Add this wherever you render your code...

const CartPage = () => {



  return (
    <Box>
      <Script src="https://code.jquery.com/jquery-3.2.1.min.js">
      </Script>
      
    <Box backgroundColor="#f2f2f2" padding="1rem"  >

      {/* Empty Cart---> */}

      {/* <EmptycaCart/> */}

    <Box 
    backgroundColor="white" 
    border="0px solid" 
    borderRadius={"10px"} 
    display={{ xs: "block",md:"flex",lg:"flex"}} 
    justifyContent="space-between" 
    padding={"2rem"} 
    gap="20px">
    {/* Box 1----> */}
    <Box  >

        {/* BONUS OFFERS----> */}
        <Box>
      <Accordion sx={{backgroundColor:"#f2f2f2"}} >
        <AccordionSummary
          expandIcon={<IoIosArrowDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>BONUS OFFERS</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Box display={"flex"} gap="120px" >
              <Box display={"flex"} gap="10px" >

                {/* Product img----> */}
              <Box> <img src={"https://media.sugarcosmetics.com/upload/Gifting.jpg"} width="42" height="58"/></Box>
              
              {/* Product details------> */}
              <Box>
                <span style={{fontSize:"13px"}}>Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</span><br />
                <Typography mt="10px"><strike>₹599</strike> ₹199</Typography>
              </Box>
              </Box>
                {/* Showping button----> */}
              <Box>
              <Button  variant="contained" sx={{backgroundColor:"black", color:"white",textIndent:"0px"}}>Add to Cart</Button>
              </Box>
            </Box>
          </Box>
        </AccordionDetails>
      </Accordion>
        </Box>
        <Box >
          <h2>CART SUMMARY</h2>
            <Box border={"1px solid"} borderRadius="10px" p="1rem">
                {/* Map cart data Start----> */}

                <Box >
                    <Box display={"flex"} justifyContent={"space-between"}>
                        {/*cart details-----> */}
                        <Box display={"flex"} gap="10px" >
                            {/* img----> */}
                            <Box> <img src={"https://media.sugarcosmetics.com/upload/Gifting.jpg"} width="42" height="58"/></Box>
                            {/* details------> */}
                            <Box >
                                <Box>
                                <span style={{fontSize:"13px"}}>Matte Attack Transferproof Lipstick</span><br />
                                </Box>
                                <Box display={"flex"} justifyContent="space-between" mt="8px">
                                    <b>₹199</b>
            
                                        {/* Responsive BUTTON----> */}
                                        <Box display={{ xs: "flex",lg:"none" }} gap="50px"> 
                                        <Box mt="7px">
                                        <RiDeleteBinLine/>
                                        </Box>
                                        
                                        {/* increment & decrement button---> */}
                                        <Box display={"flex"} border="1px solid" borderRadius={"10px"} gap="10px" p="0.3rem 0.5rem" >
                                            <Box >
                                            <BiMinus/>
                                            </Box>
                                            <span>1</span>
                                            <Box>
                                            <BiPlus/>
                                            </Box>
                                        </Box>
                                        </Box>
                                        
                                </Box>
                            </Box>
                        </Box>

                        {/* cart button----> */}
                        <Box display={{ xs: "none",lg:"flex" }} gap="20px">

                        {/* Delete button---> */}
                        <Box mt="7px">
                        <RiDeleteBinLine/>
                        </Box>
                        
                        {/* increment & decrement button---> */}
                        <Box>
                            <Box display={"flex"} border="1px solid" borderRadius={"10px"} gap="10px" p="0.3rem 0.5rem" >
                                <Box >
                                <BiMinus/>
                                </Box>
                                <span>1</span>
                                <Box>
                                <BiPlus/>
                                </Box>
                            </Box>
                        </Box>

                    </Box>
                </Box>
                <hr />

                {/* Map cart data End ----> */}

            </Box>

          </Box>
        </Box>
    </Box>

    {/* Box 2----> */}
    <Box>
      <Box >
        <h3>APPLY COUPON</h3>
        <Box border="1px solid" p="1rem" borderRadius={"10px"} >

        <Box display="flex" justifyContent={"space-between"} >
        <TextField id="outlined-search" sx={{width:"80%"}}
          size="small" label="Enter Gift code or discount code" type="search" />
          <Box><Button variant="contained" color="secondary" >APPLY</Button></Box>
        </Box>
        <hr />
        <Box>
        <Accordion >
        <AccordionSummary
          expandIcon={<IoIosArrowDown/>}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography display={"flex"} gap="5px">
            <span><TbDiscount2 size="20px" color="#fc2779"/></span>
             View All Offers/ Promos for you!</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>

            {/* Map Offer data Start----> */}
            <Box>
              <Box display="flex" justifyContent={"space-between"}>
                <b>MINI MAGIC</b>
                <Box border="1px solid #fc2779" color="#fc2779" >GSMMM</Box>
              </Box>
              <p>Get a Smudge Me Not Mini Set + Pouch FREE on a spend of Rs.1099 T{"&"}C</p>
              <Box display={"flex"} gap="10px" >
                {/* img----> */}
                <Box> <img src={"https://media.sugarcosmetics.com/upload/Gifting.jpg"} width="42" height="58"/></Box>
                {/* details------> */}
                <Box>
                  <span>Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</span><br />
                  <span><b> ₹199</b></span>
                </Box>
                {/* Showping button----> */}
                <Box>
                <Button  variant="" sx={{color:"#fc2779"}}>APPLY</Button>
                </Box>
              </Box>
              <hr />
            </Box>
            {/* Map data End----> */}

          </Box>
        </AccordionDetails>
      </Accordion>

        </Box>
        </Box>
        <h3>PRICE DETAILS</h3>
        <Box border="1px solid" p="1rem" borderRadius={"10px"}  lineHeight="1px">
          <Box display="flex" justifyContent={"space-between"}><p>Subtotal</p><p>$1247.00</p></Box>
          <Box display="flex" justifyContent={"space-between"}><p>Tax</p><p>$190.22</p></Box>
          <Box display="flex" justifyContent={"space-between"}><p>Shipping</p><p>Free</p></Box>
          <hr />
          <Box display="flex" justifyContent={"space-between"}><h2>Total</h2><h2>$1247</h2></Box>
        </Box>
      </Box>
    </Box>

    </Box>
  </Box>

    {/* Fix Total amount Box-----> */}

  {/* <Box 
  // border="solid"
  // className={styles.box}
  position={"fixed"} 
  backgroundColor="white" 
  top='83%'  
  height={"100px"}
  textAlign={"right"}
  width="100%">
    <Button
    variant="contained"
    sx={{backgroundColor:"black",padding:"1rem",color:"white",position:"relative",right:"50px",top:"30px",fontSize:"17px"}} >
    <b >₹1247.00 PLACE ORDER</b></Button>
  </Box>
  <footer>
    I am a footer
  </footer> */}

  </Box>
  )
}
export default CartPage;
