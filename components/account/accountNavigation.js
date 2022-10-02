import { Image, Box, Typography } from "@mui/material";
import AssignmentIcon from "@mui/icons-material/Assignment";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import RedeemIcon from "@mui/icons-material/Redeem";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useRouter } from "next/router";

export default function AccountNavigation({ nav, user }) {
  const router = useRouter();

  return (
    <Box
      sx={{
        borderRadius: "10px",
        color: "white",
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          height: "30vh",
          backgroundImage:
            'url("https://media.sugarcosmetics.com/upload/VTOBackgroungTexture.png")',
        }}
      >
        <Box
          sx={{
            paddingTop: "5%",
            textAlign: "center",
            color: "white",
            display: "flex",
            gap: "5px",
            flexDirection: "column",
          }}
        >
          <Box>
            <img
              src="https://media.sugarcosmetics.com/upload/accountMask.png"
              width="30%"
              height="20%"
              alt="account"
            />
          </Box>
          <Box>
            <Typography component={"h4"} sx={{ fontWeight: "bold" }}>
              {user && user.username}
            </Typography>
          </Box>
          <Box>+91 {user && user.mobile}</Box>
          <Box>{user && user.email}</Box>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center", p: 2, bgcolor: "white" }}>
        <Box
          onClick={() => router.push("/account/orders")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "white",
            color: "black",
            borderBottom: "1px solid #e6e6e7",
            height: "60px",
            color: nav === "/account/orders" ? "#fc2779" : "#282828",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                borderRadius: 8,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                p: 1,
              }}
            >
              <AssignmentIcon />
            </Box>
            <Typography>Orders</Typography>
          </Box>
          <Box>
            <ArrowForwardIosIcon />
          </Box>
        </Box>
        <Box
          onClick={() => router.push("/account/addresses")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "white",
            color: "black",
            borderBottom: "1px solid #e6e6e7",
            height: "60px",
            color: nav === "/account/addresses" ? "#fc2779" : "#282828",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                borderRadius: 8,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                p: 1,
              }}
            >
              <FmdGoodIcon />
            </Box>
            <Typography>Addresses</Typography>
          </Box>
          <Box>
            <ArrowForwardIosIcon />
          </Box>
        </Box>
        <Box
          onClick={() => router.push("/account/wishlist")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            bgcolor: "white",
            color: "black",
            borderBottom: "1px solid #e6e6e7",
            height: "60px",
            color: nav === "/account/wishlist" ? "#fc2779" : "#282828",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                borderRadius: 8,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                p: 1,
              }}
            >
              <FavoriteBorderIcon />
            </Box>
            <Typography>Wishlist</Typography>
          </Box>
          <Box>
            <ArrowForwardIosIcon />
          </Box>
        </Box>
        <Box
          onClick={() => router.push("/account/referral")}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomRightRadius: "10px",
            borderBottomLeftRadius: "10px",
            bgcolor: "white",
            color: "black",
            height: "60px",
            color: nav === "/account/referral" ? "#fc2779" : "#282828",
            cursor: "pointer",
          }}
        >
          <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
            <Box
              sx={{
                borderRadius: 8,
                boxShadow:
                  "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
                p: 1,
              }}
            >
              <RedeemIcon />
            </Box>
            <Typography>Refer & Earn</Typography>
          </Box>
          <Box>
            <ArrowForwardIosIcon />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
