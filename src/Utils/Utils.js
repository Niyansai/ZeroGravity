const HOST = "http://139.59.4.68:8001";
const ADMIN_HOST = HOST + "/admin";
const PACKAGES_HOST = HOST + "/package";
const USER_HOST = HOST + "/user";
const STORAGE_HOST = HOST + "/storage";
const BLOG_HOST = HOST + "/blog";
const BOOKINGS_HOST = HOST + "/booking";



const API = {

    LOGIN: ADMIN_HOST + "/login",
    REGISTER: ADMIN_HOST + "/register",

    LIST_USERS: ADMIN_HOST + "/listUser",
    DELETE_USER: ADMIN_HOST + "/deleteUser",
    GET_USER: USER_HOST + "/getUser",
    UPDATE_USER: ADMIN_HOST + "/updateUser",
    UPLOAD_USER_IMAGE: ADMIN_HOST + "/uploadUserImage",
    ADD_USER: ADMIN_HOST + "/addUser",

    GET_IMAGE: STORAGE_HOST + "/getImage",
    UPLOAD_IMAGE: STORAGE_HOST + "/uploadImage",

    ADD_BLOG: BLOG_HOST + "/addBlog",
    LIST_BLOG: BLOG_HOST + "/listBlog",
    UPDATE_BLOG: BLOG_HOST + "/updateBlog",
    DELETE_BLOG: BLOG_HOST + "/deleteBlog",
    GET_BLOG: BLOG_HOST + "/getBlog",

    ADD_INQUIRY: ADMIN_HOST + "/addInquiry",
    DELETE_INQUIRY: ADMIN_HOST + "/deleteInquiry",
    LIST_INQUIRIES: ADMIN_HOST + "/listInquiry",
    GET_INQUIRY: ADMIN_HOST + "/getInquiry",
    UPDATE_INQUIRY: ADMIN_HOST + "/updateInquiry",

    ADD_COUPON: ADMIN_HOST + "/addCoupon",
    UPDATE_COUPON: ADMIN_HOST + "/updateCoupon",
    LIST_COUPON: ADMIN_HOST + "/listCoupon",
    GET_COUPON: ADMIN_HOST + "/getCoupon",
    DELETE_COUPON: ADMIN_HOST + "/deleteCoupon",

    // ############### PACKAGES ##################


    ADD_PACKAGE: PACKAGES_HOST + "/addPackage",
    LIST_PACKAGES: PACKAGES_HOST + "/listPackage",
    ADD_PACKAGE_IMG: PACKAGES_HOST + "/addPackageImage",
    SEARCH_PACKAGE: PACKAGES_HOST + "/searchPackageById",
    UPDATE_PACKAGE: PACKAGES_HOST + "/updatePackage",
    DELETE_PACKAGE: PACKAGES_HOST + "/deletePackage",

 // ############### BOOKINGS ##################

        ADD_BOOKING: BOOKINGS_HOST + "/addBooking",
        LIST_BOOKINGS: BOOKINGS_HOST + "/listBooking",
        GET_BOOKING: BOOKINGS_HOST + "/getBooking",
        UPDATE_BOOKING: BOOKINGS_HOST + "/updateBooking",
        DELETE_BOOKING: BOOKINGS_HOST + "/deleteBooking"


}

module.exports = API;