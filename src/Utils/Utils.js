const HOST = "http://139.59.4.68:8001";
// const HOST = "http://localhost:8000";

const ADMIN_HOST = HOST + "/admin";
const PACKAGES_HOST = HOST + "/package";
const USER_HOST = HOST + "/api/v1/user";
const CATEGORY_HOST = HOST + "/api/v1/category";
const IMAGE_HOST = HOST + "/api/v1/image/getImage";
const SERVICE_HOST = HOST + "/api/v1/service";


const API = {
    LOGIN: ADMIN_HOST + "/login",
    REGISTER: ADMIN_HOST + "/register",
    ADDUSER: ADMIN_HOST + "/addUser",
    LISTUSERS: USER_HOST + "/listUsers",
    DELETEUSER: ADMIN_HOST + "/deleteUser",
    SEARCH_USER: USER_HOST + "/searchUser",
    UPLOAD_USER_IMAGE: USER_HOST + "/uploadUserImage",


    ADD_PACKAGE: PACKAGES_HOST + "/addPackage",
    LIST_PACKAGES: PACKAGES_HOST + "/listPackage",
    ADD_PACKAGE_IMG: PACKAGES_HOST + "/addPackageImage",
    SEARCH_PACKAGE: PACKAGES_HOST + "/searchPackageById",
    UPDATE_PACKAGE: PACKAGES_HOST + "/updatePackage",


    
    CATEGORY_LIST: CATEGORY_HOST + "/getAllCategories",
    SUB_CATEGORY_LIST: CATEGORY_HOST + "/getAllSubCategories",
    DELETE_CATEGORY: CATEGORY_HOST + "/deleteCategory",
    DELETE_SUB_CATEGORY: CATEGORY_HOST + "/deleteSubCategory",
    GET_CATEGORY: CATEGORY_HOST + "/getCategory",
    GET_SUB_CATEGORY: CATEGORY_HOST + "/getSubCategory",
    UPLOAD_CAT_IMAGE: CATEGORY_HOST + "/uploadCategoryImage",
    UPLOAD_SUB_CAT_IMAGE: CATEGORY_HOST + "/uploadSubCategoryImage",
    ADDCATEGORY: CATEGORY_HOST + "/addCategory",
    ADDSUBCATEGORY: CATEGORY_HOST + "/addSubCategory",
    UPDATE_CATEGORY: CATEGORY_HOST + "/updateCategory",
    UPDATE_SUB_CATEGORY: CATEGORY_HOST + "/updateSubCategory",

    COMPLAINTS_LIST: ADMIN_HOST + "/getUserReportedIssues",
    FEEDBACK_LIST: ADMIN_HOST + "/getUserFeedbacks",
    DELETE_COMPLAINT: ADMIN_HOST + "/deleteComplaint",
    DELETE_FEEDBACK: ADMIN_HOST + "/deleteFeedback",
    SEARCH_FEEDBACK: ADMIN_HOST + "/searchFeedback",

    ADD_SERVICE: SERVICE_HOST + "/addService",
    LIST_SERVICES: SERVICE_HOST + "/listService",
    DELETE_SERVICE: SERVICE_HOST + "/deleteService",
    SEARCH_SERVICE: SERVICE_HOST + "/searchService",
    UPDATE_SERVICE: SERVICE_HOST + "/updateService",

    GET_IMAGE: IMAGE_HOST
}

module.exports = API;