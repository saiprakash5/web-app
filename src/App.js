import React,{useState} from 'react';

import './App.css';
import { BrowserRouter as Router, Routes, Link, Route, Navigate } from 'react-router-dom';

import {Login} from "./components/login" 
import {Logout} from "./components/logout"
import {Getdata} from "./components/getdata"
import { UserContext,SnackContext } from "./components/usercontext";
import {Snackbar, Slide, Alert } from '@mui/material'


function App()  {
  

const [userprofile, setUserProfile] = useState(null);
const [snack, setSnack] = useState({
  message: "",
  color: "",
  open: false,
});

    return (
      <div className="page-container">
      <div className="content-wrap">
      <Snackbar
        open={snack.open}
        autoHideDuration={2000}
        onClose={() => {
          setSnack((prevdata) => {
            return {
              ...prevdata,
              open: false,
            };
          });
        }}
        TransitionComponent={Slide}
      >
        <Alert
          variant="filled"
        
          onClose={() => {
            setSnack((prevdata) => {
              return {
                ...prevdata,
                open: false,
              };
            });
          }}
          severity={snack.type}
        >
          {snack.message}
        </Alert>
      </Snackbar>
      <UserContext.Provider value={{userprofile,setUserProfile}}>
      <SnackContext.Provider value={{ snack, setSnack }}>
      <div className="App">
       <Router>
        <Link to="/"><h2>Home</h2></Link>
        {userprofile ? (<Link to="/logout"><h1>logout</h1></Link>
      )  : ( <Link to="/login"><h4>login</h4></Link>)
      }
        {/* <Link to="/getdata"><h4>Getdata</h4></Link> */}
        
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={userprofile? <Logout /> : <Navigate to="/" />} />
          <Route path="/getdata" element={<Getdata />} />

          
   
        </Routes>
      </Router>
      </div>
      </SnackContext.Provider>
      </UserContext.Provider>
      </div></div>

    );
  
}

export default App;