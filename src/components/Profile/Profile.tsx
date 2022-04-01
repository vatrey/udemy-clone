import { Grid, TextField, Checkbox, Button, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import Photo from "../../assets/Mask Group 2.png"
import Banner from "../Banner/Banner";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Profile.css"
import { useState } from "react";

function Profile(): JSX.Element {

    const [state, updateState] = useState({ add: false, modal: false });

    let addHandler = (event: React.ChangeEvent<HTMLInputElement>, value: string) => {
        if (value === "Professional") {
            let newState = { ...state };
            newState.add = true;
            updateState(newState);
        }
        else {
            let newState = { ...state };
            newState.add = false;
            updateState(newState);
        }
    }

    let openModalHandler = () => {
        let newState = { ...state };
        newState.modal = true;
        updateState(newState);
    }

    let closeModalHandler = () => {
        let newState = { ...state };
        newState.modal = false;
        updateState(newState);
    }

    return (
        <div>
            <Modal
                open={state.modal}
                onClose={closeModalHandler}
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'absolute' as 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: 400, height: 100, bgcolor: '#FFFF', border: '2px solid #000', boxShadow: 24, }}>
                    <Box style={{ height: 25, backgroundColor: "#EFF2FF" }}></Box>
                    <Box>
                        <Typography id="modal-modal-title" variant="h6" component="h2" style={{ display: "flex", alignItems: "center", color: "#FFFFF", justifyContent:"center" }}>
                            <CheckCircleIcon ></CheckCircleIcon>
                            The Profile Has Been Saved
                        </Typography>
                    </Box>
                </Box>
            </Modal>
            <Header />
            <Banner />
            <Box sx={{ flexGrow: 1 }} className="profile">
                <Grid container>
                    <Grid item >
                        <img src={Photo} alt="ProfliePhoto" style={{ width: "93%" }} />
                    </Grid>
                    <Grid item style={{ padding: "1rem", marginBottom: "2rem", background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029" }}>

                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={3}>
                                <Grid item>
                                    <TextField label="Display Name" variant="filled" size="small" style={{ width: "17rem" }} />
                                </Grid>
                                <Grid item>
                                    <TextField label="First Name" variant="filled" size="small" style={{ width: "17rem" }} />
                                </Grid>
                                <Grid item>
                                    <TextField label="Last Name" variant="filled" size="small" style={{ width: "17rem" }} />
                                </Grid>
                            </Grid>
                        </Box>
                        <TextField label="About Yourself" multiline variant="filled" rows={4} margin="normal" style={{ width: "50%" }} />
                        <Box style={{ margin: "1rem 0 1rem 0" }}>
                            <FormLabel id="demo-radio-buttons-group-label">Are you a student or Professional?</FormLabel>
                            <Box>
                                <FormControlLabel value="Designer" control={<Checkbox sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Designer" />
                            </Box>
                            <Box>
                                <FormControlLabel value="Developer" control={<Checkbox sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Developer" />
                            </Box>
                            <Box>
                                <FormControlLabel value="Project Manager" control={<Checkbox sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Project Manager" />
                            </Box>
                            <Box>
                                <FormControlLabel value="Sales" control={<Checkbox sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Sales" />
                            </Box>
                        </Box>
                        <Box style={{ margin: "1rem 0 1rem 0" }}>
                            <FormLabel id="demo-radio-buttons-group-label">Are you a student or Professional?</FormLabel>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                defaultValue="Student"
                                name="radio-buttons-group"
                                row
                                onChange={addHandler}
                            >
                                <FormControlLabel value="Student" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Student" />
                                <FormControlLabel value="Professional" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Professional" />
                            </RadioGroup>
                        </Box>
                        {state.add &&
                            <Box style={{ border: "1px solid #E0E0E0", padding: "1rem" }}>
                                <Box style={{ margin: "0 0 1rem 0" }}>
                                    <FormLabel id="demo-radio-buttons-group-label">How much of experience you have?</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="0-5"
                                        name="radio-buttons-group"
                                        row
                                    >
                                        <FormControlLabel value="0-5" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="0-5" />
                                        <FormControlLabel value="5-10" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="5-10" />
                                        <FormControlLabel value="10 & Above" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="10 & Above" />
                                    </RadioGroup>
                                </Box>
                                <Box style={{ margin: "1rem 0 1rem 0" }}>
                                    <FormLabel id="demo-radio-buttons-group-label">What is your expertise?</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="Java"
                                        name="radio-buttons-group"
                                        row
                                    >
                                        <FormControlLabel value="Java" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Java" />
                                        <FormControlLabel value="React" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="React" />
                                        <FormControlLabel value="Backend" control={<Radio sx={{ '&.Mui-checked': { color: "#FF6738" } }} />} label="Backend" />
                                    </RadioGroup>
                                </Box>
                                <Box style={{ margin: "1rem 0 1rem 0" }}>
                                    <TextField label="Mention your role" variant="filled" size="small" style={{ width: "16rem" }} />
                                </Box>
                            </Box>}
                        <Box style={{ float: "right", margin: "1rem" }}>
                            <Button onClick={openModalHandler} style={{ backgroundColor: "#FF6738", color: "#ffffff", borderRadius: "4px" }}>Save</Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div >
    );
}

export default Profile;