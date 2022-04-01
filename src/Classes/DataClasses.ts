export interface CourseEleProps {
    courseId: number,
    deleteFunction: Function,
    isTagsIncluded: boolean,
    isStarIncluded: boolean,
    isRealPriceIncluded: boolean,
    isAddtoCartIncluded: boolean,
    isBinIncluded: boolean,
    isArrowIncluded: boolean,
    isMoveToWishlistIncluded: boolean
}

export enum Place {
    Cart,
    All,
    Wishlist
}

export interface Course {
    id: number,
    title: String,
    author: String,
    tags: String[],
    price: number,
    discontedPrice: number,
    place: Place
}

export interface Data {
    courses: Course[];
    cart: Course[];
    wishlist: Course[];
    price: number;
    discountedPrice: number;
}

export interface HomeState {
    page: number,
    text: string,
    sort: string,
    courses: Course[],
    modal: boolean
}