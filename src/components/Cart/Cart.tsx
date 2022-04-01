import { useSelector, useDispatch } from "react-redux";
import { Grid, Box, Button } from "@mui/material";
import CourseEle from "../Course/CourseEle";
import { Course, Place, Data } from '../../Classes/DataClasses';
import Banner from "../Banner/Banner"
import Header from '../Header/Header';
import Footer from "..//Footer/Footer";

function Cart(): JSX.Element {
    
    const dispatch = useDispatch();

    const recomendedCourses: Course[] = useSelector((state: Data) => {return state.wishlist});
    const cart: Course[] = useSelector((state: Data) => {return state.cart});
    const price: number = useSelector((state: Data) => {return state.price});
    const discountedPrice: number = useSelector((state: Data) => {return state.discountedPrice});

    let cartIterate = cart.map((course: Course) => (
        <CourseEle deleteFunction={(id: number) => deleteHandler(id)} courseId={course.id} isTagsIncluded={false} isStarIncluded={false} isRealPriceIncluded={false} isAddtoCartIncluded={false} isBinIncluded={true} isArrowIncluded={false} isMoveToWishlistIncluded={true} />
    ));

    let allIterate = recomendedCourses.slice(0, Math.min(2, recomendedCourses.length)).map((course: Course) => (
        <CourseEle deleteFunction={()=>{}}  courseId={course.id} isTagsIncluded={true} isStarIncluded={false} isRealPriceIncluded={true} isAddtoCartIncluded={true} isBinIncluded={false} isArrowIncluded={true} isMoveToWishlistIncluded={false} />
    ));

    let deleteHandler = (id: number) => {
        dispatch({ type: 'RemoveFromCart', payload: id});
    } 


    return (
        <div>
            <Header />
            <Banner />
            <Box sx={{ flexGrow: 1 }}>
                <h3 style={{ margin: "0 0 0 3rem" }}>{cartIterate.length} Courses in Cart</h3>
                <Grid container spacing={2} style={{ margin: "0 0 2rem 2rem" }}>
                    <Grid item >
                        {cartIterate}
                        <div>
                            <h3 style={{ color: "#4E4E4E", marginBottom: "1rem" }}>Recommended Courses</h3>
                            {allIterate}
                        </div>
                    </Grid>
                    <Grid item xs>
                        <Box style={{ background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", border: "1px solid #E0E0E0", width: "18rem", height: "9rem", padding: "1rem" }}>
                            <Grid>Total Amount</Grid>
                            <Grid style={{ font: "normal normal 600 30px/37px Montserrat" }}>₹ {discountedPrice}/-</Grid>
                            {price - discountedPrice > 0 && <Grid style={{ color: "#629A33" }}>You have saved ₹ {price - discountedPrice}</Grid>}
                            <Grid>
                                <Button sx={{ p: 1 }} variant="contained" size="large" style={{ backgroundColor: "#FF6738", width: "85%", margin: "1rem" }}>
                                    Checkout
                                </Button>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
            <Footer />
        </div>
    );
}

export default Cart;