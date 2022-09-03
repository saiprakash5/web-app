import React from "react";
import { useContext } from "react";
import { Button } from "@mui/material";
import { SnackContext, UserContext } from "./usercontext";


export const Logout = () => {
  const { userprofile, setUserProfile } = useContext(UserContext); 
  const { setSnack } = useContext(SnackContext);
  return (
    <div>
      
      
     
      <Button
        variant="contained"
        onClick={() => {
          setUserProfile(null);
          localStorage.removeItem("userid")
          setSnack({ message: "Successfully logout", open: true,type:"success"});
        }}
      >
       
        Logout
      </Button>
    </div>
  );
};
// history("/getdata");
// }
// console.log("res.data")
// });
// }
// }