import Banner from "../Banner/Banner"
import Header from '../Header/Header';
import Footer from "..//Footer/Footer";
function NotFound():JSX.Element {
    return (
        <div>
            <Header/>
            <Banner/>
            <h1 style={{height:"400px", width: "400px", margin:"auto", textAlign:"center"}}>
                404 Not Found
            </h1>
            <Footer/>
        </div>  
    );
}

export default NotFound;