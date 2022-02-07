import { Paper, BottomNavigation, BottomNavigationAction, Box } from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import CompareIcon from "@mui/icons-material/Compare";
import {Link} from "react-router-dom";

export default function BottomNavBar() {
    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, display:"flex", justify: "space-around" }} elevation={3}>    
            <BottomNavigation showLabels sx={{display: "flex", justifyContent:"space-around", width:"100%"}}>
                <BottomNavigationAction label="Home" component={Link} to="/" icon={<HomeIcon />} />
                <BottomNavigationAction label="Explore" component={Link} to="/explore" icon={<SearchIcon/>} />
                <BottomNavigationAction label="Compare" component={Link} to="/compare" icon={<CompareIcon />} />    
            </BottomNavigation>
        </Paper>
    )
}