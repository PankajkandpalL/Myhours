import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import BannerCarousel from "../components/BannerCarousel/BannerCarousel";
import Headline from "../components/Headline/Headline";
import Layout from "../components/Layout/Layout";
import logo from "../public/logo.png";
export default function Home() {
  const bannersrc =
    "https://d32baadbbpueqt.cloudfront.net/Homepage/c807ee2f-ac79-46a4-ad99-eee353fec1f8.jpg";
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

  return (
    <Layout logo={logo}>
      <Box overflow={"hidden"} zIndex={100} position={"relative"}>
        <BannerCarousel item={topbanner} width={"100%"} />
        {/* next things */}

        <Box
          paddingY={3}
          height={"600px"}
          sx={{
            backgroundImage: `url('https://media.sugarcosmetics.com/upload/homePageBackGroundTexture.jpg')`,
            marginY: "100px",
          }}
        >
          <Headline color={"white"}> BESTSELLERS </Headline>
        </Box>
        <Box paddingY={3} height={"1000px"}>
          <Headline color={"black"}> HOT DEALS</Headline>
          <br />
        </Box>
        {/*  */}
        {/*  */}
        {/*  */}
        <Box paddingY={3} height={"600px"}>
          <Headline color={"black"}>SHUKAR HAI, SUGAR HAI</Headline>
        </Box>
        <Box paddingY={3} height={"600px"}>
          <Headline color={"black"}> TOP PICKS OF THE WEEK</Headline>
        </Box>
        <Box paddingY={3} height={"600px"}>
          <Headline color={"black"}> GIFTING</Headline>
        </Box>
        <Box paddingY={3} height={"320px"}>
          <Headline color={"black"}> REFER YOUR FRIEND</Headline>
          <Box
            borderRadius={"25px"}
            overflow={"hidden"}
            width={"96%"}
            margin={"auto"}
          >
            <Box>
              <Image
                loader={() => {
                  return bannersrc;
                }}
                width={100}
                height={100}
                src={bannersrc}
                alt={"banner"}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Layout>
  );
}
