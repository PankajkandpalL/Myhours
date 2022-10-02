import { Box, Button, Input, TextField } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";
import { RiDeleteBinLine } from "react-icons/ri";
import { BiPlus, BiMinus } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import EmptycaCart from "../../components/cart/EmptyCart";
import axios from 'axios'
// import styles from '../../styles/Home.module.css'

// Add this wherever you render your code...

const CartPage = (  ) => {
  
  const [ cartSummary, setCartSummary ] = useState([])
  const [apply, setApply] = useState([]);
  // console.log("apply",apply[0].price)
  // console.log(cartSummary)
  const [ bouns, setBouns ] = useState(()=>{

    let bounss = [
      {
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-matte-as-hell-crayon-mini-lipstick-12-baby-houseman-28220228632659_584be809-56c3-4baf-b90b-8db9e95b2afe.jpg?v=1659698252",
        text: "Matte As Hell Crayon Mini Lipstick-12 Baby Houseman",
        strike: "₹500",
        price: 199,
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-wonder-woman-creamy-matte-lipstick-03-crime-fighter-berry-pink-28132892737619_a13f2b4c-ce5f-4754-a790-ef61d79ba3ed.jpg?v=1660122776",
        text: "Matte As Hell Crayon Mini Lipstick-03 Baby Houseman",
        strike: "₹500",
        price: 299,
      },
      {
        img: "https://cdn.shopify.com/s/files/1/0906/2558/products/SMNLL-Mini---Shade-02.jpg?v=1656000101",
        text: "Smudge Me Not Liquid Mini Lipstick-02 Brink of Pink",
        strike: "₹500",
        price: 249,
      },
    ];
    
    return bounss
    
  }) 
  let coupon = [
    {
      poster: "https://media.sugarcosmetics.com/upload/Gifting.jpg",
      offer: "CHEPK",
      offerDetail:
        "Get a Smudge Me Not Mini Set + Pouch FREE on a spend of Rs.1099 T&C",
        productName: "Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman(High)",
      price: 799,
      quantity:1,

    },
    {
      poster: "https://media.sugarcosmetics.com/upload/Gifting.jpg",
      offer: "ASAPK",
      offerDetail:
        "Get a Smudge Me Not Mini Set + Pouch FREE on a spend of Rs.1099 T&C",
      productName: "Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman(Medium)",
      price: 699,
      quantity:1,
    },
    {
      poster: "https://media.sugarcosmetics.com/upload/Gifting.jpg",
      offer: "KGFSHA",
      offerDetail:
        "Get a Smudge Me Not Mini Set + Pouch FREE on a spend of Rs.1099 T&C",
        productName: "Matte As Hell Crayon Mini Lipstick - 12 Baby Houseman(Low)",
      price: 599,
      quantity:1,

    },
  ];
  
  let getData = async () => {
    
    let d = JSON.parse(localStorage.getItem("token"))

    try{
      let data = await axios.get("http://localhost:3000/api/cart", {
        headers : {
          token : d.primaryToken
        }
      })

      setCartSummary(data.data.cart.cartData)
      
    }
    catch(E){
      console.log("error",E)
    }
  }

  useEffect(()=>{
    getData()
  },[])

  let handleDel = async (id) => {

    let d = JSON.parse(localStorage.getItem("token"))

    try{

      await axios.delete("http://localhost:3000/api/cart/delete", {
        headers : {
          token : d.primaryToken
        },
        data : {
          id
        }
      })

      getData()
      
    }
    catch(E){
     alert('Cannot perform DELETE operation, Please wait.')
    }

  }

  let handleQuan = async (id, quan, type) => {

    let d = JSON.parse(localStorage.getItem("token"))

    var data = JSON.stringify({
      "id": id,
      "quan": type === "inc" ? quan + 1 : quan - 1 ,
      "type": type
    });
    
    var config = {
      method: 'patch',
      url: 'http://localhost:3000/api/cart/patch',
      headers: { 
        'token': d.primaryToken,
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      getData()
    })
    .catch(function (error) {
      console.log(error);
    });

  }

   const postData = (el,i) => {

    let d = JSON.parse(localStorage.getItem("token"))

    var data = JSON.stringify({
      "productName": el.text,
      "newPrice": el.price,
      "poster": el.img
    });
    
    var config = {
      method: 'post',
      url: 'http://localhost:3000/api/cart/post',
      headers: { 
        'token': d.primaryToken , 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      let data = [...bouns]
      data.slice(i,1)
      setBouns(data)
      getData()
    })
    .catch(function (error) {
      console.log(error);
    });
    

  } 


  const fix2dig = (n) => Number(n).toFixed(2);

  const Total = fix2dig(
    cartSummary?.reduce((a, b) => {
      return Number(a + Number(b.price)*Number(b.quantity));
    }, 0)
  );
  // console.log(Total)

  const AddtoLocal=(e)=>{
    // console.log(e)
    localStorage.setItem("applyCoupon", JSON.stringify(e))
    let CouponData=localStorage.getItem("applyCoupon");
    CouponData = JSON.parse(CouponData)
    // console.log(CouponData)
    setCartSummary([...cartSummary,CouponData])
    setApply([CouponData])
  }
  useEffect(()=>{
    let CouponData=localStorage.getItem("applyCoupon");
    if(CouponData){
      CouponData = JSON.parse(CouponData)
    // console.log(CouponData)
    setCartSummary([...cartSummary,CouponData])
    setApply([CouponData])
    }
    
  },[])

  let handleTotal=(total)=>{
    localStorage.setItem("total",total)
  }


  



  return (
    <Box>
      <Box backgroundColor="#f2f2f2" padding="1rem">
        {/* Empty Cart---> */}

        {/* <EmptycaCart/> */}

        <Box
          backgroundColor="white"
          border="0px solid"
          borderRadius={"10px"}
          display={{ xs: "block", md: "flex", lg: "flex" }}
          justifyContent="space-between"
          padding={"2rem"}
          gap="20px"
        >
          {/* Box 1----> */}
          <Box>
            {/* BONUS OFFERS----> */}
            <Box width={"100%"}>
              <Accordion sx={{ backgroundColor: "#f2f2f2" }}>
                <AccordionSummary
                  expandIcon={<IoIosArrowDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>BONUS OFFERS</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Box>
                    {/* BONUS Maping-----> */}
                    {bouns.map((e,i) => {
                      return (
                        <Box display={"flex"} width="100%"  gap="60px" key={e.price}>
                          <Box display={"flex"} gap="10px">
                            {/* Product img----> */}
                            <Box>
                              {" "}
                              <img src={e.img} width="42" height="58" />
                            </Box>

                            {/* Product details------> */}
                            <Box >
                              <span style={{ fontSize: "13px" }}>{e.text}</span>
                              <br />
                              <Typography fontSize={"14px"}>
                                <strike>{e.strike}</strike> ₹{e.price}
                              </Typography>
                            </Box>
                          </Box>
                          {/* Showping button----> */}
                          <Box boxSizing={"border-box"}
                          width="127px"
                          height="36px"
                          align-items="center"
                          text-transform="uppercase"
                          >
                            <Button 
                              onClick={()=>postData(e,i)}
                              variant="contained"
                              sx={{
                                backgroundColor: "black",
                                color: "white",
                              }}
                            >
                              Add to Cart
                            </Button>
                          </Box>
                        </Box>
                      );
                    })}
                    {/* BONUS Maping End-----> */}
                  </Box>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box>
              {/* CART SUMMARY------->*/}
              <h2>CART SUMMARY</h2>
              <Box border={"1px solid"} borderRadius="10px" p="1rem">
                {/* Map cart data Start----> */}
                {cartSummary?.map((e,i) => {
                  return (
                    <Box key={i}>
                      <Box display={"flex"} justifyContent={"space-between"}>
                        {/*cart details-----> */}
                        <Box display={"flex"} gap="10px">
                          {/* img----> */}
                          <Box>
                            {" "}
                            <img src={e.poster} width="42" height="58" />
                          </Box>
                          {/* details------> */}
                          <Box>
                            <Box>
                              <span style={{ fontSize: "13px" }}>{e.productName}</span>
                              <br />
                            </Box>
                            <Box
                              display={"flex"}
                              justifyContent="space-between"
                              mt="15px"
                            >
                              <b>₹{e.price}</b>

                              {/* Responsive BUTTON----> */}
                              <Box
                                display={{ xs: "flex", lg: "none" }}
                                gap="50px"
                              >
                                <Box mt="7px">
                                <RiDeleteBinLine style={{  "cursor" : "pointer" }} onClick={()=>handleDel(e._id)} color="gray" />
                                </Box>

                                {/* Product increment & decrement button---> */}
                                <Box
                                  display={"flex"}
                                  border="1px solid"
                                  borderRadius={"10px"}
                                  gap="10px"
                                  p="0.3rem 0.5rem"
                                >
                                <Box>
                                <BiMinus onClick={()=>handleQuan(e._id, e.quantity, "dec")} />
                              </Box>
                              <span style={{ marginTop : "-2px" }}>{e.quantity}</span>
                              <Box>
                                <BiPlus onClick={()=>handleQuan(e._id, e.quantity, "inc")} />
                              </Box>
                                </Box>
                              </Box>

                            </Box>
                          </Box>
                        </Box>

                        {/* cart button----> */}
                        <Box display={{ xs: "none", lg: "flex" }} gap="20px">
                          {/* Delete button---> */}
                          <Box mt="22px" mr="18px">
                            <RiDeleteBinLine style={{  "cursor" : "pointer" }} onClick={()=>handleDel(e._id)} color="gray" />
                          </Box>

                          {/*Product increment & decrement button---> */}

                          <Box>
                            <Box
                              display={"flex"}
                              border="1px solid gray"
                              borderRadius={"10px"}
                              gap="10px"
                              mt={"15px"}
                              p="0.3rem 0.5rem"
                            >
                              <Box>
                                <BiMinus onClick={()=>handleQuan(e._id, e.quantity, "dec")} />
                              </Box>
                              <span style={{ marginTop : "-2px" }}>{e.quantity}</span>
                              <Box>
                                <BiPlus onClick={()=>handleQuan(e._id, e.quantity, "inc")} />
                              </Box>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                      <hr />
                    </Box>
                  );
                })}
                {/* Map cart data End ----> */}
              </Box>
            </Box>
          </Box>

          {/*Apply Coupon Offre Box 2----> */}
          <Box>
            <Box>
              {/* CUPONE APPLYED DIV----->*/}
              {apply.length > 0 ? (
                apply.map((e) => {
                  return (
                    <Box key={e.price}>
                      <h3>APPLIED COUPON</h3>
                      <Box border="1px solid #fc2779" p="1rem" borderRadius={"10px"}>

                        <Box display="flex" justifyContent={"space-between"}>
                          <b></b>
                          <Box
                            border="1px dotted #fc2779"
                            color="#fc2779"
                            borderRadius={"5px"}
                            boxSizing="border-box"
                            p="0.1rem"
                          >
                            {e.offer}
                          </Box>
                        </Box>
                        <Box display={"flex"} gap="10px" mt="10px">
                          {/* img----> */}
                          <Box>
                            {" "}
                            <img src={e.poster} width="42" height="58" />
                          </Box>
                          {/* details------> */}
                          <Box>
                            <span>{e.productName}</span>
                            <br />
                            <Box display={"flex"} gap="40px">
                              <span>
                                {" "}
                                <span style={{ color: "gray" }}>
                                  You Save
                                </span>{" "}
                                <b>{e.price}</b>
                              </span>
                              <Typography display={"flex"}>
                                <TbDiscount2 size="20px" color="#fc2779" />
                                <b style={{ color: "#fc2779" }}>
                                  Offer Applied
                                </b>
                              </Typography>
                            </Box>
                          </Box>
                          {/* Showping button----> */}
                          <Box>
                            <Button
                              sx={{ color: "gray", fontSize: "20px" }}
                            >
                              <RiDeleteBinLine />
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  );
                })
              ) : (
                <Box>
                  <h3>APPLY COUPON</h3>
                  <Box border="1px solid" p="1rem" borderRadius={"10px"}>
                    <Box display="flex" justifyContent={"space-between"}>
                      {/*Enter Gift code------> */}

                      <TextField
                        id="outlined-search"
                        sx={{ width: "80%" }}
                        size="small"
                        label="Enter Gift code or discount code"
                        type="search"
                      />
                      <Box>
                        <Button
                          variant="contained"
                          color="secondary"
                        >
                          APPLY
                        </Button>
                      </Box>
                    </Box>
                    <hr />
                    <Box>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<IoIosArrowDown />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography display={"flex"} gap="5px">
                            <span>
                              <TbDiscount2 size="20px" color="#fc2779" />
                            </span>
                            View All Offers/ Promos for you!
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Box>
                            {/* Map Coupon Offer data Start----> */}
                            {coupon.map((e) => {
                              return (
                                <Box key={e.price}>
                                  <Box
                                    display="flex"
                                    justifyContent={"space-between"}
                                  >
                                    <b>MINI MAGIC</b>
                                    <Box
                                      border="1px solid #fc2779"
                                      color="#fc2779"
                                    >
                                      {e.offer}
                                    </Box>
                                  </Box>
                                  <p>{e.offerDetail}</p>
                                  <Box display={"flex"} gap="10px">
                                    {/* img----> */}
                                    <Box>
                                      {" "}
                                      <img src={e.poster} width="42" height="58" />
                                    </Box>
                                    {/* details------> */}
                                    <Box>
                                      <span>{e.productName}</span>
                                      <br />
                                      <span>
                                        <b>{e.price}</b>
                                      </span>
                                    </Box>
                                    {/* Showping button----> */}
                                    <Box>
                                      <Button
                                        variant=""
                                        sx={{ color: "#fc2779" }}
                                        onClick={()=>{AddtoLocal(e)}}
                                      >
                                        APPLY
                                      </Button>
                                    </Box>
                                  </Box>
                                  <hr />
                                </Box>
                              );
                            })}
                            {/* Map data End----> */}
                          </Box>
                        </AccordionDetails>
                      </Accordion>
                    </Box>
                  </Box>
                </Box>
              )}

              <h3>PRICE DETAILS</h3>
              <Box
                border="1px solid"
                p="1rem"
                borderRadius={"10px"}
                lineHeight="1px"
              >
                <Box display="flex" justifyContent={"space-between"}>
                  <p>Subtotal</p>
                  <p>₹{Total}</p>
                </Box>
                <Box display="flex" justifyContent={"space-between"}>
                  <p>Tax</p>
                  <p>₹190.00</p>
                </Box>
                {apply.length>0 ? <Box display="flex" justifyContent={"space-between"}>
                  <p> Discount</p>
                  <p style={{ color: "green" }}>-{apply[0].price}</p>
                </Box>
                : ""}
                <Box display="flex" justifyContent={"space-between"}>
                  <p>Shipping</p>
                  <p style={{ color: "green" }}>Free</p>
                </Box>
                <hr />
                <Box display="flex" justifyContent={"space-between"}>
                  <h2>Total</h2>
                  <h2>₹{Total}</h2>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box 
      backgroundColor="white" 
      textAlign={"right"}>
        <Button variant="contained"
        onClick={()=>{handleTotal(Total)}}
        sx={{backgroundColor:"black",padding:"1rem",color:"white",fontSize:"17px"}} >
        <b >₹{Total} PLACE ORDER</b>
        </Button>
      </Box>
      </Box>

      {/* Fix Total amount Box-----> */}
    </Box>
  );
};
export default CartPage;


