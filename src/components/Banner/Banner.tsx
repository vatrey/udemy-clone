import { Grid, Box } from "@mui/material";
import Mask from "../../assets/Mask-Group-1.png";
import "./Banner.css"
function Banner(): JSX.Element {
    
    let text: String = "Discover Latest Courses on React";
    let path: String = window.location.pathname;
    switch(path) {
        case "/cart":
            text = "Shopping Cart";
            break;
        case "/profile":
            text = "My Profile";
            break;
    }

    return (
        <Box sx={{ flexGrow: 1 }} className="backdrop">
            <Grid container style={{ justifyContent: "space-between" }}>
                <Grid item style={{margin: "auto 0 auto 2rem", textAlign: "center", font: "normal normal 600 20px/24px Montserrat", color: "#FFFFFF"}}>
                    {text}
                </Grid>
                <Grid item >
                    <img style={{float:"right", width:"70%"}} src={Mask} alt=""/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Banner;