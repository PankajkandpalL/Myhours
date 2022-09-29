// import { Box, Button, Input, TextField } from "@mui/material"
// import Cart from "../../components/cart/EmptyCart"
// import Accordion from '@mui/material/Accordion';
// import AccordionSummary from '@mui/material/AccordionSummary';
// import AccordionDetails from '@mui/material/AccordionDetails';
// import Typography from '@mui/material/Typography';
// import {IoIosArrowDown} from "react-icons/io"
// import {RiDeleteBinLine} from "react-icons/ri"
// import {BiPlus,BiMinus} from "react-icons/bi"
// import {TbDiscount2} from "react-icons/tb"

// // import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// const cart = () => {
//   return (
//     <Box>
//     <Box backgroundColor="#f2f2f2" padding="2rem" >

//       {/* Empty Cart---> */}

//       {/* <Cart/> */}

//     <Box backgroundColor="white" border="0px solid" borderRadius={"10px"} display={"flex"} gap="20px">
//     {/* Box 1----> */}
//     <Box padding={"1rem"} >
//         <Box>
//         <Accordion sx={{backgroundColor:"#f2f2f2"}} >
//         <AccordionSummary
//           expandIcon={<IoIosArrowDown/>}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography>BONUS OFFERS</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Box>
//             <Box display={"flex"} gap="10px" >
//               {/* img----> */}
//               <Box> <img src={"https://media.sugarcosmetics.com/upload/Gifting.jpg"} width="42" height="58"/></Box>
//               {/* details------> */}
//               <Box>
//                 <span>Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</span><br />
//                 <span><strike>₹599</strike> ₹199</span>
//               </Box>
//                 {/* Showping button----> */}
//               <Box>
//               <Button  variant="contained" sx={{backgroundColor:"black", color:"white"}}>Add to Cart</Button>
//               </Box>
//             </Box>
//           </Box>
//         </AccordionDetails>
//       </Accordion>
//         </Box>
//         <Box >
//           <h2>CART SUMMARY</h2>
//           <Box border={"1px solid"} borderRadius="10px" p="1rem">
//           {/* Map cart data----> */}

//           <Box >
//           <Box display={"flex"} justifyContent={"space-between"}>
//             {/*cart details-----> */}
//             <Box display={"flex"} gap="10px" >
//                 {/* img----> */}
//                 <Box> <img src={"https://media.sugarcosmetics.com/upload/Gifting.jpg"} width="42" height="58"/></Box>
//                 {/* details------> */}
//                 <Box>
//                 <span>Matte Attack Transferproof Lipstick</span><br />
//                 <span>01 Boldplay (Cardinal Pink)</span><br />
//                 <span>₹199</span>
//                 </Box>
//             </Box>

//               {/* cart button----> */}
//             <Box display={"flex"} gap="10px">

//               {/* Delete button---> */}
//               <Box>
//               <RiDeleteBinLine/>
//               </Box>
              
//               {/* increment & decrement button---> */}
//               <Box>
//                 <Box display={"flex"} border="1px solid" borderRadius={"10px"} >
//                   <Box >
//                     <Button><BiMinus/></Button>
//                     </Box>
//                     <span>1</span>
//                     <Box>
//                     <Button><BiPlus/></Button>
//                   </Box>
//                 </Box>
//               </Box>

//             </Box>
//           </Box>
//           <hr />
//           </Box>

//           </Box>
//         </Box>
//     </Box>

//     {/* Box 2----> */}
//     <Box>
//       <Box >
//         <h3>APPLY COUPON</h3>
//         <Box border="1px solid" p="1rem" borderRadius={"10px"} >

//         <Box display="flex" justifyContent={"space-between"} >
//         <TextField id="outlined-search" sx={{width:"80%"}} label="Enter Gift code or discount code" type="search" />
//           <Box><Button variant="contained" color="secondary">APPLY</Button></Box>
//         </Box>
//         <hr />
//         <Box>
//         <Accordion >
//         <AccordionSummary
//           expandIcon={<IoIosArrowDown/>}
//           aria-controls="panel1a-content"
//           id="panel1a-header"
//         >
//           <Typography display={"flex"} gap="5px">
//             <span><TbDiscount2 size="20px" color="#fc2779"/></span>
//              View All Offers/ Promos for you!</Typography>
//         </AccordionSummary>
//         <AccordionDetails>
//           <Box>

//             {/* Map data----> */}
//             <Box>
//               <Box display="flex" justifyContent={"space-between"}>
//                 <b>MINI MAGIC</b>
//                 <Box border="1px solid">GSMMM</Box>
//               </Box>
//               <p>Get a Smudge Me Not Mini Set + Pouch FREE on a spend of Rs.1099 T{"&"}C</p>
//               <Box display={"flex"} gap="10px" >
//                 {/* img----> */}
//                 <Box> <img src={"https://media.sugarcosmetics.com/upload/Gifting.jpg"} width="42" height="58"/></Box>
//                 {/* details------> */}
//                 <Box>
//                   <span>Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman</span><br />
//                   <span><b> ₹199</b></span>
//                 </Box>
//                 {/* Showping button----> */}
//                 <Box>
//                 <Button  variant="contained" sx={{backgroundColor:"black", color:"white"}}>Add to Cart</Button>
//                 </Box>
//               </Box>
//               <hr />
//             </Box>

//           </Box>
//         </AccordionDetails>
//       </Accordion>

//         </Box>
//         </Box>
//         <h3>PRICE DETAILS</h3>
//         <Box border="1px solid" p="1rem" borderRadius={"10px"}  lineHeight="1px">
//           <Box display="flex" justifyContent={"space-between"}><p>Subtotal</p><p>$1247.00</p></Box>
//           <Box display="flex" justifyContent={"space-between"}><p>Tax</p><p>$190.22</p></Box>
//           <Box display="flex" justifyContent={"space-between"}><p>Shipping</p><p>Free</p></Box>
//           <hr />
//           <Box display="flex" justifyContent={"space-between"}><h2>Total</h2><h2>$1247</h2></Box>
//         </Box>
//       </Box>
//     </Box>

//     </Box>
//   </Box>
//   <Box 
//   // border="solid" 
//   position={"fixed"} 
//   backgroundColor="white" 
//   top='83%'  
//   height={"100px"}
//   textAlign={"right"}
//   width="100%">
//     <Button
//     variant="contained"
//     sx={{backgroundColor:"black",padding:"1rem",color:"white",position:"relative",right:"50px",top:"30px",fontSize:"17px"}} >
//     <b >₹1247.00 PLACE ORDER</b></Button>
//   </Box>
//   </Box>
//   )
// }
// export default cart
