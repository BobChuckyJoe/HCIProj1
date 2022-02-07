import { Avatar, Box, Button, List, ListItem, ListItemText,
BottomNavigationAction, TextField, Typography, ListItemAvatar, Divider } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import {Link} from "react-router-dom";

import React from "react"

import lightningImg from "../Images/lightning.jpg"
import tornadoImg from "../Images/Tornado.jpg"

export default function Homepage() {
    return (
        <Box sx={{width:"100%", height:"100%", backgroundColor:"#add8e6"}}>
            <Box sx={{width:"100%", justifyContent:"center", alignItems:"center"}}>
                <Typography align="center" variant="h1" sx={{color:"#9400D3"}}>
                    Xtreme Weather
                </Typography>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center", pb:"1rem"}}>
                <TextField sx={{width:"60%"}} label="Search location"/>
            </Box>
            <Box sx={{display:"flex", justifyContent:"center", pb:"3rem"}}>
                <Button component={Link} to="/search" variant="contained">Search!</Button>
            </Box>
            <Typography variant="h3" sx={{color:"#FFA500"}}>News</Typography>
            <Divider/>
            <List sx={{ width:"100"}}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Thunderstorm" src={lightningImg}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Austin, Texas"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{display:"inline"}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary">
                                    February 4th, 2022
                                </Typography>
                                {" - The largest thunderstorm in 20 years is predicted to happen. For the best photos, try taking them from a plane. Otherwise, downtown Austin is a good place to watch the spectacle"}
                            </React.Fragment>
                        }/>
                </ListItem>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                        <Avatar alt="Tornado" src={tornadoImg}/>
                    </ListItemAvatar>
                    <ListItemText
                        primary="Dallas, Texas"
                        secondary={
                            <React.Fragment>
                                <Typography sx={{display:"inline"}}
                                            component="span"
                                            variant="body2"
                                            color="text.primary">
                                    February 7th, 2022
                                </Typography>
                                {" - With peak winds of up to 80 mph, this is a moderately sized tornado. It will not be dangerous, and any decently tall building would be able to get a very nice view."}
                            </React.Fragment>
                        }/>
                </ListItem>
            </List>
            <BottomNavBar/>
        </Box>
            
    )
}