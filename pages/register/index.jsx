import { Button, Checkbox, InputAdornment, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { app } from "../../utils/firebase";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";
import { useRouter } from "next/router";
import axios from "axios";
import { useSession, signIn, signOut } from "next-auth/react";

import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';

const Alert = React.forwardRef(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const src = "https://media.sugarcosmetics.com/upload/authSIe2.jpg";
const hiSrc = "https://media.sugarcosmetics.com/upload/Hi!.png";

export default function Login() {
  const { data: session } = useSession();

  const [Number, setNumber] = useState("");
  const [otp, setOtp] = useState("");
  const [toggle, setToggle] = useState(false);
  const [message, setMessage] = useState(false);
  const [alert, setAlert] = useState({state:false,message:"",type:""});
  const [userObj, setUserObj] = useState({
    first: "",
    last: "",
    email: "",
  });

  const handleUser = (e) => {
    let { name, value } = e.target;

    setUserObj({
      ...userObj,
      [name]: value,
    });
  };

  useEffect(() => {
    if (session) {
      createUser("google");
    }
  }, [session]);

  const createUser = async (x) => {
    let obj = {};

    if (x === "normal") {
      obj = {
        username: `${userObj.first} ${userObj.last}`,
        email: userObj.email,
        id: localStorage.getItem("userId"),
      };
    } else if ("google") {
      obj = {
        username: session.user.name,
        email: session.user.email,
        id: localStorage.getItem("userId"),
      };
    }

    try {
      let data = await axios.post(
        "https://sugar-cosmetics-clone-mu.vercel.app/api/registration/user",
        obj
      );
      localStorage.setItem("message", data.data.message);
      localStorage.setItem("token", JSON.stringify(data.data.token));
      localStorage.removeItem("userId");
      router.replace("/");
    } catch (e) {
      console.log(e);
    }
  };

  const router = useRouter();

  let onSignInSubmit = () => {
    const phoneNumber = "+91" + Number;
    console.log(phoneNumber);

    const auth = getAuth();
    if(!window.recaptchaVerifier){
      window.recaptchaVerifier = new RecaptchaVerifier(
        "sign-in-button",
        {
          size: "invisible",
          callback: (response) => {
            onSignInSubmit();
          },
          defaultCountry: "IN",
        },
        auth
      );
    }    
    const appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        // console.log(confirmationResult,'confirmationResult')
        setToggle(true);

      })
      .catch((error) => {
        appVerifier.clear();
        console.log("Sms Not sent",error);
      });
  };
  

  let addUser = async () => {
    let obj = { mobile: Number };
    try {
      let data = await axios.post(
        "https://sugar-cosmetics-clone-mu.vercel.app/api/registration/mobile",
        obj
      );

      if (data.data.message == "Created Successfully!") {
        localStorage.setItem("message", data.data.message);
        localStorage.setItem("userId", data.data.user);``
        setMessage(true);
        setNumber("")
      } else {
        localStorage.setItem("message", data.data.message);
        localStorage.setItem("token", JSON.stringify(data.data.token));
        router.replace("/");
      }
    } catch (e) {
      console.log("error", e);
    }
  };

  useEffect(() => {
    let m = localStorage.getItem("message");
    console.log(m);
    if (m === "Created Successfully!") {
      setMessage(true);
    }
  }, [message]);

  let onSubmitOTP = () => {
    const code = otp;
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        const user = result.user;
        console.log(JSON.stringify(user));
        // alert("Verified");
        setAlert({state:true,message:"Verified Successfully",type:"success"})
        setTimeout(()=>setAlert({...alert,state:false}),2000)
        
      })
      .catch((error) => {
        // alert("bad verification code");
        setAlert({state:true,message:"Bad Verification Code",type:"error"})
        setTimeout(()=>setAlert({...alert,state:false}),2000)
      });
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "641px",
          height: "786px",
        }}
      >
        <Image
          loader={() => src}
          src={src}
          alt="icon"
          width={641}
          height={786}
        />
      </Box>
      <Box
        sx={{
          height: "716px",
          width: "1000px",
          backgroundImage: `url(${"https://media.sugarcosmetics.com/upload/loginPageBackGroundTexture.png"})`,
        }}
      >
        {!message ? (
          <>
            <Box
              sx={{
                marginTop: "100px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                loader={() => hiSrc}
                src={hiSrc}
                alt="hiIcon"
                width={172.9}
                height={114}
              />
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "18px",
              }}
            >
              <p style={{ fontSize: "18px", fontFamily: "sans-serif" }}>
                Login/Sign Up Using Phone
              </p>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {!toggle ? (
                <TextField
                  label="Enter Mobile Number"
                  id="outlined-start-adornment"
                  sx={{ m: 1, width: "382px" }}
                  value={Number}
                  onChange={(e) => setNumber(e.target.value)}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+91 </InputAdornment>
                    ),
                  }}
                />
              ) : (
                <TextField
                  id="outlined-basic"
                  label="Enter OTP"
                  sx={{ m: 1, width: "382px" }}
                  variant="outlined"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                />
              )}
            </Box>
            <Box
              sx={{
                marginTop: "12px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <p
                style={{
                  color: "#757575",
                  width: "740px",
                  height: "66px",
                  fontFamily: "sans-serif",
                  fontSize: "13px",
                  textAlign: "center",
                }}
              >
                Registering for this site allows you to access your order status
                and history. Just fill in the above fields, and we'll get a new
                account set up for you in no time. We will only ask you for
                information necessary to make the purchase process faster and
                easier.
              </p>
            </Box>
            <Box
              sx={{
                marginTop: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div id="sign-in-button"></div>
              {!toggle ? (
                <Button
                  variant="contained"
                  disabled={Number.length === 10 ? false : true}
                  sx={{
                    fontSize: "13px",
                    color: "white",
                  }}
                  onClick={() => {
                    onSignInSubmit();
                  }}
                >
                  Send ME OTP
                </Button>
              ) : (
                <Button
                  variant="contained"
                  disabled={otp.length === 6 ? false : true}
                  sx={{
                    fontSize: "13px",
                    color: "white",
                  }}
                  onClick={() => {
                    onSubmitOTP();
                    addUser();
                  }}
                >
                  VALIDATE THIS
                </Button>
              )}
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "gray",
                border: "1px dashed gray",
                marginBottom: "10px",
                borderBottom: "none",
                width: "95%",
              }}
            ></Box>
            <Box
              sx={{
                marginTop: "-10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Checkbox defaultChecked size="small" />
              <span
                style={{
                  fontFamily: "sans-serif",
                  fontSize: "12px",
                  color: "gray",
                }}
              >
                {" "}
                Get important updates on Whatsapp{" "}
                <span style={{ color: "red" }}>
                  {" "}
                  Terms and Conditions{" "}
                </span>{" "}
              </span>
            </Box>
            <Box
              sx={{
                marginTop: "40px",
                display: "flex",
                justifyContent: "right",
                width: "96%",
                alignItems: "right",
                fontFamily: "sans-serif",
                fontSize: "13px",
              }}
            >
              Need Help? <span style={{ color: "red" }}> Contact Us</span>
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: "10px",
                marginBottom: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                color: "gray",
                border: "1px dashed gray",
                borderBottom: "none",
                width: "95%",
              }}
            ></Box>
            <Box
              sx={{
                marginTop: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontFamily: "sans-serif",
                fontSize: "12px",
              }}
            >
              By Signing up or logging in, you agree to our &nbsp;{" "}
              <span style={{ color: "red" }}>Terms and Conditions</span>
            </Box>
          </>
        ) : (
          <Box>
            <Box
              sx={{
                width: "391px",
                height: "19px",
                fontSize: "16px",
                margin: "auto",
                marginTop: "120px",
                fontWeight: "bold",
                fontFamily: "sans-serif",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Please fill this form below
            </Box>
            <Box sx={{ marginTop: "10px" }}>
              <Box
                sx={{
                  marginTop: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  onChange={(e) => handleUser(e)}
                  name="first"
                  sx={{ m: 1, width: "362px" }}
                  required
                  id="outlined-basic"
                  label="First Name"
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  marginTop: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  onChange={(e) => handleUser(e)}
                  name="last"
                  sx={{ m: 1, width: "362px" }}
                  required
                  id="outlined-basic"
                  label="Last Name"
                  variant="outlined"
                />
              </Box>
              <Box
                sx={{
                  marginTop: "0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <TextField
                  onChange={(e) => handleUser(e)}
                  name="email"
                  sx={{ m: 1, width: "362px" }}
                  required
                  id="outlined-basic"
                  label="Enter Email Id"
                  variant="outlined"
                />
              </Box>
            </Box>
            <Box
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button
                onClick={() => createUser("normal")}
                variant="contained"
                disabled={false}
                sx={{
                  fontSize: "14px",
                  color: "white",
                  height: "50px",
                  width: "126px",
                  borderRadius: "9px",
                  backgroundColor: "black",
                }}
              >
                SIGN ME UP
              </Button>
            </Box>
            <Box
              sx={{
                width: "362px",
                margin: "auto",
                marginTop: "25px",
                marginBottom: "25px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
              }}
            >
              <Box
                sx={{
                  border: "1px dashed gray",
                  width: "45%",
                  borderBottom: "none",
                }}
              ></Box>
              <Box
                sx={{
                  color: "gray",
                  fontFamily: "sans-serif",
                  fontSize: "13px",
                }}
              >
                OR
              </Box>
              <Box
                sx={{
                  border: "1px dashed gray",
                  width: "45%",
                  borderBottom: "none",
                }}
              ></Box>
            </Box>
            <Box
              onClick={() => signIn()}
              sx={{
                marginTop: "10px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Button variant="contained">Continue With Gmail</Button>
            </Box>
          </Box>
        )}
        {alert.state ? <Alert sx={{ width: '97vw', position:"absolute",top:4,left:0, textAlign:"center" }} severity={alert.type} >{alert.message}</Alert>: ""}
      </Box>
    </Box>
  );
}
