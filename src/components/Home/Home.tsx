import { Grid, Box, InputLabel, MenuItem, FormControl, SelectChangeEvent } from "@mui/material";
import { useSelector } from "react-redux";
import { Pagination, Select, IconButton, InputAdornment, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import CourseEle from "../Course/CourseEle";
import { Course, Place, Data, HomeState } from '../../Classes/DataClasses';
import Banner from "../Banner/Banner"
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import React, { useState } from 'react';

function Home(): JSX.Element {

    const courses: Course[] = useSelector((state: Data) => { return state.courses });
    const cart: Course[] = useSelector((state: Data) => { return state.cart });
    const discountedPrice: number = useSelector((state: Data) => { return state.discountedPrice });

    const [filters, updateFilters] = useState<HomeState>({
        page: 1,
        text: "",
        sort: "",
        courses: [...courses],
        modal: false
    });

    let allIterate: JSX.Element[];
    if (filters.sort === "") {
        allIterate = filters.courses
            .filter((course: Course) => (
                course.title.indexOf(filters.text) !== -1
            ))
            .slice((filters.page - 1) * 5, Math.min(filters.page * 5, courses.length))
            .map((course: Course) => (
                <CourseEle deleteFunction={() => { }} courseId={course.id} isTagsIncluded={true} isStarIncluded={true} isRealPriceIncluded={true} isAddtoCartIncluded={true} isBinIncluded={false} isArrowIncluded={true} isMoveToWishlistIncluded={false} />
            ));
    }
    else if (filters.sort === "Ascending") {
        allIterate = filters.courses
            .filter((course: Course) => (
                course.title.indexOf(filters.text) !== -1
            ))
            .sort((a: Course, b: Course) => (
                a.discontedPrice - b.discontedPrice
            ))
            .slice((filters.page - 1) * 5, Math.min(filters.page * 5, courses.length))
            .map((course: Course) => (
                <CourseEle deleteFunction={() => { }} courseId={course.id} isTagsIncluded={true} isStarIncluded={true} isRealPriceIncluded={true} isAddtoCartIncluded={true} isBinIncluded={false} isArrowIncluded={true} isMoveToWishlistIncluded={false} />
            ));
    }
    else {
        allIterate = filters.courses
            .filter((course: Course) => (
                course.title.indexOf(filters.text) !== -1
            ))
            .sort((a: Course, b: Course) => (
                b.discontedPrice - a.discontedPrice
            ))
            .slice((filters.page - 1) * 5, Math.min(filters.page * 5, courses.length))
            .map((course: Course) => (
                <CourseEle deleteFunction={() => { }} courseId={course.id} isTagsIncluded={true} isStarIncluded={true} isRealPriceIncluded={true} isAddtoCartIncluded={true} isBinIncluded={false} isArrowIncluded={true} isMoveToWishlistIncluded={false} />
            ));
    }

    let pageChangeHandler = (event: React.ChangeEvent<unknown>, page: number) => {
        let newFilters = { ...filters };
        newFilters.page = page;
        updateFilters(newFilters);
    }

    let sortHandler = (event: any) => {
        let newFilters = { ...filters };
        console.log(event.target.value);
        newFilters.sort = event.target.value;
        updateFilters(newFilters);
    }

    let searchHandler = (event: any) => {
        let newFilters = { ...filters };
        console.log(event.target.value);
        newFilters.text = event.target.value;
        updateFilters(newFilters);
    }

    let cartIterate = cart.map((course: Course) => (
        <Box sx={{ flexGrow: 1, margin: "1rem 0 1rem 0", borderBottom: "1px solid #E0E0E0" }}>
            <Grid container spacing={2}>
                <Grid item xs={4} style={{ margin: "auto" }}>
                    <Box sx={{ p: 4, backgroundColor: "#F2F2F2" }}>
                    </Box>
                </Grid>
                <Grid item xs>
                    {course.title}
                    <p style={{ textAlign: "right", font: "normal normal bold 20px/24px Montserrat" }}>₹{course.discontedPrice}</p>
                </Grid>
            </Grid>
        </Box>
    ));

    return (
        <div>
            <Header />
            <Banner />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2} style={{ margin: "0 0 2rem 2rem" }}>
                    <Grid item style={{ paddingLeft: "0", width: "906px" }}>
                        <Grid container style={{ justifyContent: "space-between" }}>
                            <Grid item style={{ margin: "auto 0", textAlign: "center" }}>
                                <h3 >All Courses</h3>
                            </Grid>
                            <Grid item>
                                <FormControl style={{ minWidth: 120 }}>
                                    <InputLabel>Sort</InputLabel>
                                    <Select
                                        label="Sort"
                                        size="small"
                                        autoWidth={true}
                                        onChange={(event) => sortHandler(event)}
                                    >
                                        <MenuItem value={"Descending"}>Max to Min</MenuItem>
                                        <MenuItem value={"Ascending"}>Min to Max</MenuItem>
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        {allIterate.length == 0 ?
                            <h2 style={{textAlign:"center"}}>No Courses are present</h2>
                            :
                            allIterate
                        }
                        <Pagination
                            count={courses.length % 5 === 0 ? courses.length / 5 : Math.floor(courses.length / 5) + 1}
                            color="primary"
                            defaultPage={1}
                            onChange={(event, page) => pageChangeHandler(event, page)}
                        />
                    </Grid>
                    <Grid item >
                        <TextField
                            onChange={(event) => searchHandler(event)}
                            size="small"
                            label="Search"
                            fullWidth={true}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="start">
                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <Box style={{ background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", border: "1px solid #E0E0E0", width: "15rem", height: "30rem", padding: "1rem" }}>
                            <Grid style={{ font: "normal normal 600 18px/22px Montserrat", margin: "auto", textAlign: "center", borderBottom: "1px solid #E0E0E0" }}>Your Cart Details</Grid>
                            {cart.length == 0 ?
                                <Grid style={{ height: "25rem", textAlign: "center", margin: "auto", color: "#AAAAAA" }}>
                                    Your cart is empty right now. Please add courses in the cart from the list
                                </Grid> :
                                <Grid style={{ height: "25rem", margin: "auto", overflow: "auto" }}>
                                    {cartIterate}
                                </Grid>
                            }
                            <Grid style={{ borderTop: "1px solid #E0E0E0" }}>Total Amount</Grid>
                            <Grid style={{ font: "normal normal 600 30px/37px Montserrat" }}>₹ {discountedPrice}/-</Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}

export default Home;