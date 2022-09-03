import React from "react";
import { TextField, Grid, Box, Container, Button } from "@mui/material";
import { useState, useContext } from "react";
import { SnackContext, UserContext } from "./usercontext";
import { useNavigate } from "react-router-dom";
const axios = require("axios");


export const Login = () => {
  let history = useNavigate();
  const [user, setUsers] = useState({
    userid: "",
    password: "",
  });
  const { setSnack } = useContext(SnackContext);
  const { userProfile, setUserProfile } = useContext(UserContext);

  const validateUser = (e) => {
    e.preventDefault();

    if (user.userid === "") {
      alert("please enter userid");
    } else if (user.password === "") {
      alert("Please enter password");
    } else {
      const formdata = new FormData();
      formdata.append("userid", user.userid);
      formdata.append("password", user.password);
      console.log(formdata);
      axios.post("/login", formdata).then(function (res) {
        if (res.data.status === true) {
          console.log(res.data.status);
          console.log("userid");
          setSnack({ message: "Successfully Login", open: true, type: "info" });
          history("/getdata");
        } else {
          setSnack({ message: "Login Fail Check ID and Password", open: true, type: "error" });
        }
        localStorage.setItem("userid", user.userid);

        console.log(localStorage.getItem(user.userid));

        setUserProfile({ user_userid: user.userid });
        console.log("res.data");
      });
    }
  };
  const onChangeValue = (e) => {
    setUsers({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div>
      {/* {name ? <h1>my Name is {name}</h1> : <h6>no name to show...</h6>}
      {city && <h1>my Name is {city}</h1>} */}
      <Container maxWidth="sm">
        <Box
          m={12}
          sx={{
            width: 300,
            height: 250,
            backgroundColor: "#e1bee7",
          }}
        >
          <Grid
            container
            direction="column"
            justifyContent="space-evenly"
            alignItems="center"
            spacing={2}
            p={3}
          >
            <Grid item>
              <TextField
                name="userid"
                label="User ID*"
                variant="standard"
                placeholder="Enter ur userid"
                onChange={onChangeValue}
              />
            </Grid>
            <Grid item>
              <TextField
                name="password"
                label="password*"
                variant="standard"
                type="password"
                placeholder="Enter ur password"
                onChange={onChangeValue}
              />
            </Grid>
            <Grid item>
              <Button variant="contained" size="small" onClick={validateUser}>
                submit
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  );
};
