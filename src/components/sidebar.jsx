import React,{useState} from 'react';
import '../App.css'
import {Drawer,Box,CssBaseline,IconButton,  AppBar, Toolbar, useTheme} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CampaignIcon from '@mui/icons-material/Campaign';
import ChatIcon from '@mui/icons-material/Chat';
import AssignmentIcon from '@mui/icons-material/Assignment';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import HandshakeIcon from '@mui/icons-material/Handshake';
import PhoneIcon from '@mui/icons-material/Phone';
import BarChartIcon from '@mui/icons-material/BarChart';
import WorkIcon from '@mui/icons-material/Work';
import PersonOffIcon from '@mui/icons-material/PersonOff';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



const drawerWidth = 240;

export const Sidebar=()=>{
    const [open, setOpen] = useState(false);
const theme=useTheme()
    const handleDrawerOpen = () => {
      setOpen(true);
    };
  
    const handleDrawerClose = () => {
      setOpen(false);
    };
  return (
    <div>
       
    <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%'
        }}>
      <CssBaseline />
      <AppBar>
            <Toolbar>
                <IconButton
                aria-label="open drawer"
                onClick={handleDrawerOpen}
                edge="start">
                <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
      <Drawer
      
        sx={{
          
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
            backgroundColor:"#234872",
            
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <IconButton onClick={handleDrawerClose}>
        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
       <div className='link'>
            <a href='/'><NotificationsIcon />&nbsp;&nbsp;Notification</a>
            <a href='/'><CampaignIcon />&nbsp;&nbsp;Announcements</a>
            <a href='/'><ChatIcon />&nbsp;&nbsp;Chat</a>
            <a href='/'><AssignmentIcon />&nbsp;&nbsp;Tasks</a>
            <a href='/'><AttachFileIcon />&nbsp;&nbsp;Files</a>
            <a href='/'><CalendarMonthIcon />&nbsp;&nbsp;Calender</a>
            <a href='/'><PersonOffIcon />&nbsp;&nbsp;Leaves</a>
            <a href='/'><WorkIcon />&nbsp;&nbsp;Career</a>
            <a href='/'><HandshakeIcon />&nbsp;&nbsp;Help</a>
            <a href='/'><PhoneIcon />&nbsp;&nbsp;Contact</a>
            <a href='/'><BarChartIcon />&nbsp;&nbsp;Organization chart</a>
       </div>  
      </Drawer>
     
    </Box>
    </div>
  );
}