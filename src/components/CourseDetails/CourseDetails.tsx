import { useSelector, useDispatch } from "react-redux";
import { Button } from '@mui/material';
import "./CourseDetails.css"
import QueryBuilderIcon from '@mui/icons-material/QueryBuilder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid } from "@mui/material";
import Banner from "../Banner/Banner"
import Header from '../Header/Header';
import Footer from "../Footer/Footer";
import { useNavigate } from "react-router-dom";
import { Data, Course } from "../../Classes/DataClasses";

function CourseDetails(): JSX.Element {

    const navigate = useNavigate();
    const dispatch = useDispatch();

    let courses: Course[] = useSelector((state: Data) => { return state.courses });
    const queryParams = new URLSearchParams(window.location.search);
    let course: Course = courses.find((course: Course) => (course.id === Number(queryParams.get('id'))))!;
    console.log(course);
    if (course === undefined) {
        navigate("/*");
    }
    let tagsIterate: JSX.Element[] = course.tags.map((tag: String) => (
        <Grid item sx={{ p: 0.5 }}>
            <Button className="tag" disabled variant="contained" size="small" style={{ background: "#EDEDED", borderRadius: "4px", color: "#080808" }}>
                {tag}
            </Button>
        </Grid>
    ));
    return (
        <div>
            <Header />
            <Banner />
            <div>
                <Grid container spacing={1} style={{ marginLeft: "2rem" }}>
                    <Grid item onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
                        All Course
                    </Grid>
                    <Grid item>
                        <ArrowForwardIosIcon />
                    </Grid>
                    <Grid item>
                        <b>Responsive Design</b>
                    </Grid>
                </Grid>
                <Grid className="details container">
                    <Grid className="main">
                        <p className="title">{course.title}</p>
                        <p className="description">{course.title}</p>
                        <p className="author">{course.author}</p>
                        <Grid container spacing={2}>
                            {tagsIterate}
                        </Grid>
                    </Grid>
                    <div>
                        <Grid className="video">
                            <iframe width="100%" height="100%" src="https://www.youtube.com/embed/7v0_uipNGao"
                                title="YouTube video player"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            ></iframe>
                        </Grid>
                        <Grid className="price-tag">
                            <div className="price-t">Rs {course.discontedPrice}/-</div>
                            <div className="price-tt"><del>Rs {course.price}/-</del></div>
                            <div className="sales-details">
                                <QueryBuilderIcon />
                                8 hours left for this price
                            </div>
                            <div className="price-button-cont">
                                <Button style={{ backgroundColor: "#FF6738", color: "#ffffff", borderRadius: "4px" }} onClick={() => { dispatch({ type: 'AddToCart', payload: course.id }) }} >Add to cart</Button>
                                <Button style={{ border: "1px solid #FF6738", color: "#FF6738", borderRadius: "4px" }} onClick={() => dispatch({ type: 'AddToWishlist', payload: course.id })} >Add to Wishlist</Button>
                            </div>
                        </Grid>
                    </div >
                </Grid >
                <div className="main">
                    <div className="container">
                        <div className="left-container">
                            <h3>Course Details</h3>
                            <div className="details-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, ducimus, vero mollitia dolores laudantium
                                alias
                            </div>
                            <div className="details-para">
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa similique sapiente debitis quia, quis
                                aliquam
                            </div>
                            <div className="details-para">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt quo porro, unde officia doloremque
                                nihil
                                dolores.
                            </div>
                            <div className="details-para">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod quidem dignissimos consequatur ipsam
                                nesciunt,
                                delectus. Officiis.
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <Footer />
        </div >
    );
}

export default CourseDetails;