const localhost = "http://localhost:3000";
const server = "";
const host =localhost;

const APPCONFIG = {
    userURL : host+ "/user",
    loginURL : host+"/auth/login",
    companyURL:host+"/company",
    loadURL : host+"/load",
    driverURL:host+"/driver",
    bidURL : host+"/bid",
    ownedCompanyURL : host+"/company/owned-companies",
    availableLoadURL : host+"/load/available-load",
    getCompanyDriversURL : host+"/driver/company-drivers",
 
};

export default APPCONFIG;
