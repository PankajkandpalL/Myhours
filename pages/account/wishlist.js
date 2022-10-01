import AccountNavigation from "../../components/account/accountNavigation";
import Grid from '@mui/material/Grid';
import Card from "../../components/account/Card";
import { useRouter } from "next/router";

const wishlistData = [{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"},{img:'https://cdn.shopify.com/s/files/1/0906/2558/products/moisturiser.jpg?v=1626968292',item:'Aquaholic Priming Moisturizer',price:"499"}]

const WishList = ()=>{
    const router = useRouter();
    return (
        <div style={{padding:'2%',backgroundColor:'#f2f2f2'}}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                <Grid item xs={3}>
                    <AccountNavigation nav={router.pathname} />
                </Grid>
                <Grid item xs={9}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {wishlistData.map((item, index) => (
                            <Grid item xs={2} sm={4} md={4} key={index + item.item + item.img}>
                                <Card img={item.img} title={item.item} price={item.price}/>
                            </Grid>
                        ))}
                    </Grid>
                </Grid>
            </Grid>

            
        </div>
    )
}

export default WishList;