import { useSelector, useDispatch } from "react-redux";
import { IconButton, Box, Grid, Button } from '@mui/material';
import { Course, Place, CourseEleProps, Data } from '../../Classes/DataClasses';
import Rating from '@mui/material/Rating';
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import "./CourseEle.css";
import { useNavigate } from "react-router-dom";

function CourseEle(props: CourseEleProps): JSX.Element {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    let courses: Course[] = useSelector((state: Data) => { return state.courses });
    let course: Course = courses.find((course: Course) => (course.id === props.courseId))!;

    let iterate = course.tags.map((ele: String) => (
        <Grid item sx={{ p: 0.5 }}>
            <Button disabled variant="contained" size="small" style={{ background: "#E25B32", borderRadius: "4px", color: "#FFFFFF" }}>
                {ele}
            </Button>
        </Grid>
    ));

    return (
        <Box sx={{ flexGrow: 1, marginBottom: "1rem" }} className="course">
            <Grid container style={{ justifyContent: "space-between" }}>
                <Grid item >
                    <Grid container spacing={2}>
                        <Grid item xs={2}>
                            <Box sx={{ background: "#F2F2F2 0% 0% no-repeat padding-box", height: "100%", width: "100%" }}></Box>
                        </Grid>
                        <Grid item xs>
                            <Box sx={{ p: 1, textAlign: "left", margin: "auto" }}>{course.title}</Box>
                            {props.isTagsIncluded ?
                                <Box sx={{ flexGrow: 1 }}>
                                    <Grid container spacing={2}>
                                        {iterate}
                                    </Grid>
                                </Box> :
                                <Box sx={{ p: 1, textAlign: "left", margin: "auto" }}>{course.author}</Box>
                            }
                        </Grid>
                        {props.isTagsIncluded && <Grid item xs={2} sx={{ p: 1, textAlign: "center", margin: "auto", color: "#080808" }}>
                            {course.author}
                        </Grid>}
                    </Grid>
                </Grid >
                <Grid item style={{ margin: "auto 0 auto 0" }}>
                    <Grid container spacing={2} style={{ justifyContent: "flex-end" }}>
                        {props.isStarIncluded &&
                            <Grid item style={{ textAlign: "center", margin: "auto" }}>
                                <Rating defaultValue={course.place.valueOf() == Place.Wishlist ? 1 : 0} max={1} />
                            </Grid>
                        }
                        {props.isMoveToWishlistIncluded &&
                            <Grid item style={{ textAlign: "center", margin: "auto" }}>
                                <Button size="small" onClick={() => { dispatch({ type: 'AddToWishlist', payload: props.courseId }) }} >
                                    Move to Wishlist
                                </Button>
                            </Grid>}
                        <Grid item style={{ textAlign: "center", margin: "auto" }}>
                            ₹{course.discontedPrice}
                        </Grid>
                        {props.isRealPriceIncluded &&
                            <Grid item style={{ textAlign: "center", margin: "auto" }}>
                                <del>₹{course.price}</del>
                            </Grid>}
                        {props.isAddtoCartIncluded &&
                            <Grid item style={{ textAlign: "center", margin: "auto" }}>
                                <Button size="small" variant="contained" style={{ color: "#FFFFFF", background: "#FF6738", borderRadius: "4px", width: "max-content" }} onClick={() => dispatch({ type: 'AddToCart', payload: props.courseId })} >
                                    ADD TO CART
                                </Button>
                            </Grid>}
                        {props.isBinIncluded &&
                            <Grid item style={{ textAlign: "center", margin: "auto" }}>
                                <IconButton size="small" onClick={() => props.deleteFunction(props.courseId)}><DeleteIcon /></IconButton>
                            </Grid>}
                        {props.isArrowIncluded &&
                            <Grid item style={{ textAlign: "center", margin: "auto" }}>
                                <IconButton size="small" onClick={() => navigate("/course?id=" + props.courseId)}><ArrowForwardIosIcon /></IconButton>
                            </Grid>}
                    </Grid>
                </Grid>
            </Grid >
        </Box >
    );
}

export default CourseEle;