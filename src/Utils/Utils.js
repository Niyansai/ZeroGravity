const HOST = "http://139.59.4.68:8001";


const ADMIN_HOST = HOST + "/admin";
const PACKAGES_HOST = HOST + "/package";
const USER_HOST = HOST + "/user";
const STORAGE_HOST = HOST + "/storage";
const BLOG_HOST = HOST + "/blog";


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
    DELETE_PACKAGE: PACKAGES_HOST + "/deletePackage"




}

module.exports = API;