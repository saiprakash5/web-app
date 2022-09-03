import React, { useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableCell,
  Paper,
  TableRow,
  TableBody,
} from "@mui/material";



// import "bootstrap/dist/css/bootstrap.min.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

const axios = require("axios");



export const Getdata = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const row = []


 

  let history = useNavigate();

  useEffect(() => {
    getdata();
  }, []);



  const getdata = () => {
    const formdata = new FormData();

    axios.get("/get").then(function (res) {
      setUsers(res.data.data);
      console.log(res.data)
    });
  };


  return (
    
  
    <div>
    {loading ? (
      <h3>Fetching data....</h3>
    ) : (
    <div>
      <Paper sx={{ width: '100%' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
      {/* <p>{JSON.stringify(user[0].bloodgroup)}</p> */}
      <Table stickyHeader aria-label="sticky table">
<TableHead >
  <TableRow style={{backgroundColor:"green" }}>
    <TableCell>ID</TableCell>
    <TableCell>USERID</TableCell>
    <TableCell>NAME</TableCell>
    <TableCell>DOB</TableCell>
    <TableCell>LOCATION</TableCell>
    <TableCell>ROLE</TableCell>
    <TableCell>BLOODGROUP</TableCell>
    <TableCell>DATEOFJOIN</TableCell>
    <TableCell>CREATEADD</TableCell>
  </TableRow>
</TableHead>
<TableBody>
{users.map((user)=> {
  return (
    <TableRow  hover role="checkbox" tabIndex={-1} key={row.code}>
    <TableCell>{user.id}</TableCell>
    <TableCell>{user.userid}</TableCell>
    <TableCell>{user.name}</TableCell>
    <TableCell>{user.dob}</TableCell>
    <TableCell>{user.location}</TableCell>
    <TableCell>{user.role}</TableCell>
    <TableCell>{user.bloodgroup}</TableCell>
    <TableCell>{user.dateofjoin}</TableCell>
    <TableCell>{user.createdAt}</TableCell>
  </TableRow>
  )
  })}
</TableBody>


      </Table>
      </TableContainer>
      </Paper>
      </div>
)}
      
      </div>
      
  );
  };