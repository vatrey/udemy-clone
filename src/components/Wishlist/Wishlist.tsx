import { useSelector , useDispatch} from "react-redux";
import { Grid, Box, Button } from "@mui/material";
import CourseEle from "../Course/CourseEle";
import { Course, Data, Place } from '../../Classes/DataClasses';
import Banner from "../Banner/Banner";
import Header from '../Header/Header';
import Footer from "..//Footer/Footer";

function Wishlist() {

    const dispatch = useDispatch();

    const whishlistCourses: Course[] = useSelector((state: Data) => {return state.wishlist});
    const cart: Course[] = useSelector((state: Data) => {return state.cart});
    const discountedPrice: number = useSelector((state: Data) => {return state.discountedPrice});

    let wishlistIterate = whishlistCourses.map((course: Course) => (
        <CourseEle deleteFunction={(id: number) => deleteHandler(id)} courseId={course.id} isTagsIncluded={true} isStarIncluded={false} isRealPriceIncluded={true} isAddtoCartIncluded={true} isBinIncluded={true} isArrowIncluded={true} isMoveToWishlistIncluded={false} />
    ));

    let deleteHandler = (id: number) => {
        dispatch({ type: 'RemoveFromWishlist', payload: id});
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
                <h3 style={{ margin: "0 0 0 2rem" }}>My Wishlist</h3>
                <Grid container spacing={2} style={{ margin: "0 0 2rem 2rem" }}>
                    <Grid item style={{ paddingLeft: "0" }}>
                        {wishlistIterate}
                    </Grid>
                    <Grid item >
                        <Box style={{ background: "#FFFFFF 0% 0% no-repeat padding-box", boxShadow: "0px 3px 6px #00000029", border: "1px solid #E0E0E0", width: "15rem", height: "25rem", padding: "1rem" }}>
                            <Grid style={{ font: "normal normal 600 18px/22px Montserrat", margin: "auto", textAlign: "center", borderBottom: "1px solid #E0E0E0" }}>Your Cart Details</Grid>
                            {cart.length == 0 ?
                                <Grid style={{ height: "20rem", textAlign: "center", margin: "auto", color: "#AAAAAA" }}>
                                    Your cart is empty right now. Please add courses in the cart from the list
                                </Grid> :
                                <Grid style={{ height: "20rem", margin: "auto", overflow: "auto" }}>
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

export default Wishlist;