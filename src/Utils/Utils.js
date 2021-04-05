const HOST = "http://139.59.4.68:8001";


const ADMIN_HOST = HOST + "/admin";
const PACKAGES_HOST = HOST + "/package";



const API = {

    LOGIN: ADMIN_HOST + "/login",
    REGISTER: ADMIN_HOST + "/register",

    // ############### PACKAGES ##################
    

    ADD_PACKAGE: PACKAGES_HOST + "/addPackage",
    LIST_PACKAGES: PACKAGES_HOST + "/listPackage",
    ADD_PACKAGE_IMG: PACKAGES_HOST + "/addPackageImage",
    SEARCH_PACKAGE: PACKAGES_HOST + "/searchPackageById",
    UPDATE_PACKAGE: PACKAGES_HOST + "/updatePackage",
    DELETE_PACKAGE: PACKAGES_HOST +"/deletePackage"


    
   
}

module.exports = API;