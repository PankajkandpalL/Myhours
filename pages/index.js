import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import BannerCarousel from "../components/BannerCarousel/BannerCarousel";
import Carouselcard1 from "../components/Carouselcards/Carouselcard1";
import CarouselImage from "../components/Carouselcards/CarouselImage";
import Headline from "../components/Headline/Headline";
import Layout from "../components/Layout/Layout";
import PGtypeCarousel from "../components/PGtypeCarousel/PGtypeCarousel";
import TripleFrameCarousel from "../components/TripleFrameCarousel/TripleFrameCarousel";
import logo from "../public/logo.png";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function Home() {
  let topbanner = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/1fa29c9d-b7b6-4aa9-ac54-a2195c10fc63.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/32e53a7b-879e-4c34-a5bc-b95c85ee4a9e.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/87591a7c-d8f8-499c-9562-c89000ef7e4a.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/2d934fad-8c2a-4f7d-85fc-ea1ed8f23673.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0a0d2b46-e424-4f4c-baf3-da2d2fc14f88.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/91374506-cc05-46f3-aff6-86a00e501c38.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/259790f5-3c09-43f3-8dde-49c3de49f0c4.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/85bc9b9b-d8b3-4fa1-a1b0-a77ca9428664.jpg",
  ];

  // HOT DEALS
  let HOTDEALS = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/6f66062a-1a39-4252-852b-646acb35d9af.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/7b0cbcd1-1433-484d-8ae1-6f54f52e73fa.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/b8278548-ed11-44b4-9818-25c5146c604d.jpg",
  ];
  // TOP PICKS OF THE WEEK
  let TOPPICKSOFTHEWEEK = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/727c91d1-8040-4cab-a5d7-db81dd6f0e4b.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/84f0d36c-381f-4c62-8702-b0059b13094a.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/0903f25c-ae3f-4de6-980b-1e3a4bbe2b6e.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/c5dc6c75-a49e-4028-b3a3-3bbbc63e49d6.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/ae700fcf-b911-452c-a916-f9994a15d20c.gif",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fd3114aa-06bb-4aff-bb21-7381559ee48f.jpg",
  ];
  // THISORTHAT
  let THISORTHAT = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/d1b038a4-418a-4309-92b1-9aff3b4393ea.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/984514b9-81c3-4e2a-922e-7b18f42ef77f.jpg",
  ];

  // SUGAR BEAUTY BLOG
  let SUGARBEAUTYBLOG = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/d8b00b3d-11f9-4255-9ac1-2cab5695e55f.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/703cfa73-627d-4363-ba07-c5817ec70b73.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/e35cc2c7-ec9a-40ba-80f0-939a4f250edc.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/fb8f0b03-2d7c-47a1-96f5-a2dec654df9d.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/44e498d2-0acd-4c77-a0cf-4ff4ce57e4c7.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/b5d96e6f-8a8c-4535-97b4-635fa48be906.jpg",
  ];

  // explore
  let explore = [
    "https://d32baadbbpueqt.cloudfront.net/Homepage/52feec2f-892b-4fad-b344-ff9fcb7e8bb1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/950b18e9-a454-48ce-8787-fe4c7517eaec.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/728e405c-d932-43df-8b82-f6a51421fdfa.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/c51feeb7-6f52-4a40-b422-7f0c413ae31a.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/5b6115c3-8e25-4f9c-b2ab-a3d03259b0c1.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/bb32957b-89ff-47ee-903e-4141bef2d622.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/cba32bfe-cbf9-47f9-b27c-823272a94828.jpg",
    "https://d32baadbbpueqt.cloudfront.net/Homepage/52feec2f-892b-4fad-b344-ff9fcb7e8bb1.jpg",
  ];

  return (
    <Layout logo={logo}>
      <Box overflow={"hidden"} zIndex={100} position={"relative"}>
        <BannerCarousel item={topbanner} width={"100%"} />
        <Box
          // paddingY={3}
          height={"600px"}
          marginY={{ md: "50px" }}
          sx={{
            backgroundImage: `url('https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg')`,
          }}
        >
          <Headline color={"white"}> BESTSELLERS </Headline>

          <PGtypeCarousel
            // border={"1px solid red"}
            margin={"auto"}
            width={"85%"}
            height={"500px"}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={"20px"}
          />
        </Box>
        <Box>
          <Headline color={"black"}> HOT DEALS</Headline>
          <Box
            width={{
              xs: "95%",
              sm: "95%",
              md: "95%",
              lg: "1200px",
              xl: " 1500px",
            }}
            margin={"auto"}
            gap={"20px"}
            // border={"1px solid red"}
          >
            <TripleFrameCarousel list={HOTDEALS} />
          </Box>
        </Box>

     <Box>
          <Headline color={"black"}>Just In</Headline>
          <PGtypeCarousel
            // border={"1px solid red"}
            margin={"auto"}
            width={"85%"}
            height={"500px"}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={"20px"}
          />
        </Box> 
         <Box paddingY={3} height={"600px"}>
          <Headline color={"black"}>SHUKAR HAI, SUGAR HAI</Headline>
        </Box> 
        <Box
          width={{
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "1200px",
            xl: " 1500px",
          }}
          margin={"auto"}
          gap={"20px"}
        >
          <Headline color={"black"}> TOP PICKS OF THE WEEK</Headline>
          <TripleFrameCarousel list={TOPPICKSOFTHEWEEK} />
        </Box>
      <Box paddingY={3} height={"600px"}>
          <Headline color={"black"}> GIFTING</Headline>
          <PGtypeCarousel
            // border={"1px solid red"}
            margin={"auto"}
            width={"85%"}
            height={"500px"}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={"20px"}
          />
        </Box>
        <Box paddingY={3} height={"450px"}>
          <Headline color={"black"}> REFER YOUR FRIEND</Headline>
          <Box
            borderRadius={"25px"}
            overflow={"hidden"}
            width={"96%"}
            margin={"auto"}
            marginY={2}
          >
            <Link href="account/referral">
              <img
                src={
                  "https://d32baadbbpueqt.cloudfront.net/Homepage/c807ee2f-ac79-46a4-ad99-eee353fec1f8.jpg"
                }
                style={{
                  width: "100%",
                  cursor: "pointer",
                }}
              />
            </Link>
          </Box>
        </Box> 
       
        <Box
          // paddingY={3}
          height={"700px"}
          sx={{
            backgroundImage: `url('https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png')`,
            marginY: "100px",
            paddingY: "20px",
          }}
        >
          <Headline color={"white"}> SUPER SAVERS </Headline>

          <PGtypeCarousel
            // border={"1px solid red"}
            margin={"auto"}
            width={"95%"}
            height={"500px"}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={"20px"}
          />
    
        </Box>

        <Box paddingY={3} height={"450px"}>
          <Headline color={"black"}> NEWLY LAUNCHED </Headline>
          <Box
            borderRadius={"25px"}
            overflow={"hidden"}
            width={"96%"}
            margin={"auto"}
            marginY={2}
          >
            <BannerCarousel item={topbanner} width={"100%"} />
          </Box>
        </Box>

        <Box paddingY={3} height={"450px"}>
          <Headline color={"black"}> SUGAR STREAMING </Headline>
          <Box
            borderRadius={"25px"}
            overflow={"hidden"}
            width={"96%"}
            margin={"auto"}
            marginY={2}
          ></Box>
        </Box>

        <Box
          width={{
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "1200px",
            xl: " 1500px",
          }}
          margin={"auto"}
          gap={"20px"}
        >
          <Headline color={"black"}> THIS OR THAT </Headline>

          <Box
            display={"flex"}
            w={{ xs: "90%", sm: "80%" }}
            gap={"20px"}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            {THISORTHAT.map((e, i) => {
              return <CarouselImage key={i} src={e} />;
            })}
          </Box>
        </Box>

         <Box paddingY={3} height={"450px"}>
          <Headline color={"black"}> SKINCARE BASICS</Headline>
          <PGtypeCarousel
            // border={"1px solid red"}
            margin={"auto"}
            width={"85%"}
            height={"500px"}
            display={"flex"}
            justifyContent={"space-evenly"}
            alignItems={"center"}
            gap={"20px"}
          />
        </Box> 

        <Box
          width={{
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "1200px",
            xl: " 1500px",
          }}
          margin={"auto"}
          gap={"20px"}
        >
          <Headline color={"black"}> SUGAR BEAUTY BLOG</Headline>
          <TripleFrameCarousel list={SUGARBEAUTYBLOG} />
        </Box>

        <Box paddingY={3} height={"450px"}>
          <Headline color={"black"}> QUICK TIPS</Headline>
          <Box
            borderRadius={"25px"}
            overflow={"hidden"}
            width={"96%"}
            margin={"auto"}
            marginY={2}
          >
            <BannerCarousel item={topbanner} width={"100%"} />
          </Box>
        </Box>

        <Box
          width={{
            xs: "95%",
            sm: "95%",
            md: "95%",
            lg: "1200px",
            xl: " 1500px",
          }}
          margin={"auto"}
          gap={"20px"}
        >
          <Headline color={"black"}> EXPLORE</Headline>
          <TripleFrameCarousel list={explore} />
        </Box>
       
      </Box>
    </Layout>
  );
}
