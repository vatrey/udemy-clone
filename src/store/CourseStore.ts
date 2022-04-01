import { createStore } from "redux";
import { Place, Data, Course } from "../Classes/DataClasses";

const initialState: Data = {
    courses:
        [
            {
                id: 0,
                title: "Responsive Design Course XYZ How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 10200,
                discontedPrice: 6760,
                place: Place.Cart
            },
            {
                id: 1,
                title: "Responsive Design Course ABC How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React"],
                price: 102,
                discontedPrice: 6765,
                place: Place.Cart
            },
            {
                id: 3,
                title: "Responsive Design Course OPQ How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 102,
                discontedPrice: 676,
                place: Place.Cart
            },
            {
                id: 2,
                title: "Responsive Design Course LMN How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 102,
                discontedPrice: 67,
                place: Place.All
            },
            {
                id: 4,
                title: "Responsive Design Course JKL How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 102,
                discontedPrice: 676,
                place: Place.Wishlist
            },
            {
                id: 5,
                title: "Responsive Design Course OP How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 102,
                discontedPrice: 676,
                place: Place.Wishlist
            }
        ],
    cart:
        [
            {
                id: 0,
                title: "Responsive Design Course XYZ How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 10200,
                discontedPrice: 676,
                place: Place.Cart
            },
            {
                id: 1,
                title: "Responsive Design Course ABC How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React"],
                price: 102,
                discontedPrice: 676,
                place: Place.Cart
            },
            {
                id: 3,
                title: "Responsive Design Course OPQ How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 102,
                discontedPrice: 676,
                place: Place.Cart
            }
        ],
    wishlist:
        [
            {
                id: 4,
                title: "Responsive Design Course JKL How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 102,
                discontedPrice: 676,
                place: Place.Wishlist
            },
            {
                id: 5,
                title: "Responsive Design Course OP How to design responsive templates",
                author: "Joseph Marie",
                tags: ["React", "React", "React", "React"],
                price: 102,
                discontedPrice: 676,
                place: Place.Wishlist
            }
        ],
    price: 10404,
    discountedPrice: 2028
}

const reducer = (state = initialState, action: any): Data => {
    let newState: Data = { ...state };
    if (action.type === "RemoveFromWishlist") {
        let newWishList: Course[] = newState.wishlist.filter((course: Course) => (course.id !== action.payload));
        newState = { ...newState, wishlist: [...newWishList] }
    }
    if (action.type === "RemoveFromCart") {
        let removeCourse: Course = newState.cart.find((course: Course) => (course.id === action.payload))!;
        let newPrice: number = newState.price - removeCourse.price;
        let newDiscountedPrice: number = newState.discountedPrice - removeCourse.discontedPrice;
        let newCart: Course[] = newState.cart.filter((course: Course) => (course.id !== action.payload));
        newState = { ...newState, cart: [...newCart], price: newPrice, discountedPrice: newDiscountedPrice };
    }
    if (action.type === "AddToWishlist") {
        let check: Course[] = newState.wishlist.filter((course: Course) => (course.id === action.payload));
        if (check.length == 0) {
            let moveToWishlist: Course = newState.courses.find((course: Course) => (course.id === action.payload))!;
            moveToWishlist.place = Place.Wishlist;
            let newWishList: Course[] = [...newState.wishlist];
            newWishList.push(moveToWishlist);
            newState = { ...newState, wishlist: [...newWishList] };
        }
    }
    if(action.type === "AddToCart") {
        let check: Course[] = newState.cart.filter((course: Course) => (course.id === action.payload));
        if (check.length == 0) {
            let moveToCart: Course = newState.courses.find((course: Course) => (course.id === action.payload))!;
            let newPrice: number = newState.price + moveToCart.price;
            let newDiscountedPrice: number = newState.discountedPrice + moveToCart.discontedPrice;
            moveToCart.place = Place.Cart;
            let newCart: Course[] = [...newState.cart];
            newCart.push(moveToCart);
            newState = { ...newState, cart: [...newCart], price: newPrice, discountedPrice: newDiscountedPrice};
        }
    }
    return newState;
}

export default createStore(reducer);
