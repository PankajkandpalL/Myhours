import AccountNavigation from "../../components/account/accountNavigation";
import Grid from '@mui/material/Grid';
import Card from "../../components/account/Card";
import { useRouter } from "next/router";
import EmptyAccount from "../../components/account/emptyAccount";
import React from 'react';
import axios from 'axios';
import Layout from "../../components/Layout/Layout";

const wishlistData = [{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"}]

const WishList = ()=>{
    const router = useRouter();
    const [wishlistData,setWishlistData] = React.useState({});
    const [user,setUser] = React.useState({});

    React.useEffect(()=>{

        let d = JSON.parse(localStorage.getItem("token"))

        axios({
            method:'GET',
            url:"http://localhost:3000/api/wishlist/get",
            headers:{
                token : d.primaryToken
            }
        }).then((res)=>{
            setWishlistData(res.data.wishlist);
            setUser(res.data);
        }).catch((err)=>console.log(err));
    },[])

    const postData = (el) => {

        let d = JSON.parse(localStorage.getItem("token"))
    
        var data = JSON.stringify({
          "productName": el.productName,
          "newPrice": el.newPrice,
          "poster": el.poster
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
            alert('Added to Cart')
        })
        .catch(function (error) {
          console.log(error);
        });
        
    
      } 
    

    return (
        <Layout>
            <div style={{padding:'2%',backgroundColor:'#f2f2f2',marginTop:'60px'}}>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    <Grid item xs={3}>
                        <AccountNavigation nav={router.pathname} user={user} />
                    </Grid>
                    <Grid item xs={9}>
                        {wishlistData.length === 0 && <EmptyAccount image={'https://in.sugarcosmetics.com/desc-images/WishlistEmpty.png'} msg={`Your wishlist is empty`} text={'Looks like you haven\'t made your choice yet'} button={'FILL IT UP'} onClick={()=>router.push('/')}/>}
                        {wishlistData.length > 0 && <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                            {wishlistData.map((item, index) => (
                                <Grid item xs={2} sm={4} md={4} key={index}>
                                    <Card onClick={()=>postData(item)} img={item.poster} title={item.productName} price={item.newPrice}/>
                                </Grid>
                            ))}
                        </Grid>}
                    </Grid>
                </Grid>
            </div>
        </Layout>
    )
}

export default WishList;