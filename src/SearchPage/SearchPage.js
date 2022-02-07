import {
    Box,
    Typography,
    AppBar,
    Toolbar,
    Paper,
    List,
    Grid,
    Alert,
    AlertTitle
} from "@mui/material";
import BottomNavBar from "../BottomNavBar/BottomNavBar";
import sunnyImg from "../Images/sunny.jpg";
import CloudIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import BoltIcon from '@mui/icons-material/Bolt';
import { useEffect, useState } from "react";

export default function SearchPage() {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        const timeId = setTimeout(() => {
            setShowAlert(true);
        }, 5000)

        return () => {
            clearTimeout(timeId)
        }
    }, []);

    const to_render_alert = showAlert ? 
            <Alert sx={{visibility:false}} severity="info">
                <AlertTitle>Severe Thunderstorm Warning</AlertTitle>
                    Feb 7, 2022 8:48PM — <strong>possibility of severe thunderstorm with lots of lightning</strong>
            </Alert>
            :
            <Box/>

    return (
        <Box display="flex-row" justifyContent="center">
            <Box>
                <AppBar position="sticky">
                    <Toolbar>
                        Austin, Texas
                    </Toolbar>
                </AppBar>
            </Box>
            <Paper sx={{mt:"1rem", display:"flex", justifyContent:"center"}} variant="outlined">
                <img alt="Sunny" src={sunnyImg}/>     
            </Paper>
            <Typography sx={{fontWeight:"bold", textAlign:"center"}} variant="h4">{"27\xB0F"}</Typography>
            <Typography sx={{textAlign:"center"}} variant="h5">Sunny</Typography>
            <Typography sx={{textAlign:"center"}} variant="h6">High: 35 Low: 25 </Typography>
            <List>
                <Paper elevation={3}>
                    <Grid container sx={{pl:"1rem"}} rowSpacing={1} columnSpacing={3}>
                        <Grid item xs={3}>
                            Monday
                        </Grid>
                        <Grid item xs={3}>
                            <CloudIcon/>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign:"center"}}>
                            {"15 - 32\xB0F"}
                        </Grid>
                        <Grid item xs={3}>
                            Tuesday
                        </Grid>
                        <Grid item xs={3}>
                            <CloudIcon/>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign:"center"}}>
                            {"18 - 36\xB0F"}
                        </Grid>
                        <Grid item xs={3}>
                            Wednesday
                        </Grid>
                        <Grid item xs={3}>
                            <WbSunnyIcon/>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign:"center"}}>
                            {"20 - 35\xB0F"}
                        </Grid>
                        <Grid item xs={3}>
                            Thursday
                        </Grid>
                        <Grid item xs={3}>
                            <WbSunnyIcon/>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign:"center"}}>
                            {"25 - 40\xB0F"}
                        </Grid>
                        <Grid item xs={3}>
                            Friday
                        </Grid>
                        <Grid item xs={3}>
                            <BoltIcon/>
                        </Grid>
                        <Grid item xs={6} sx={{textAlign:"center"}}>
                            {"30 - 50\xB0F"}
                        </Grid>
                    </Grid>
                </Paper>
            </List>
            {to_render_alert}
            <BottomNavBar/>
        </Box>
    )    
}