import { Grid, Button, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import Logo from "../../assets/Logo-2.png";
import Cart from "../../assets/Cart.svg";
import Profile from "../../assets/Profile.svg";
import { useNavigate } from "react-router-dom";
import "./Header.css";

function Header(): JSX.Element {
    const navigate = useNavigate();
    return (
        <Box sx={{ flexGrow: 1 }} className="header">
            <Grid container style={{ justifyContent: "space-between" }}>
                <Grid item >
                    <Button onClick={() => navigate("/")}>
                        <img src={Logo} alt="Logo" />
                    </Button>
                </Grid>
                <Grid item>
                    <Grid container>
                        <Grid item style={{ marginTop: "0.5rem" }}>
                            <Button onClick={() => navigate("/")}>
                                <p style={{ color: "#080808", font: "normal normal 16px/19px Montserrat"}}>
                                    COURSES
                                </p>
                            </Button>
                        </Grid>
                        <Grid item style={{ marginTop: "0.5rem" }}>
                            <Button onClick={() => navigate("/wishlist")}>
                                <p style={{ color: "#080808", font: "normal normal 16px/19px Montserrat"}}>
                                    My WISHLIST
                                </p>
                            </Button>
                        </Grid>
                        <Grid item >
                            <IconButton onClick={() => navigate("/cart")}>
                                <img src={Cart} alt="Cart" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => navigate("/profile")}>
                                <img src={Profile} alt="Profile" style={{ border: "1px solid #000000", borderRadius: "1rem" }} />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Header