const localhost = "http://localhost:3001";
const server = "";
const host = localhost;

const APPCONFIG = {
  userURL: host + "/user",
  loginURL: host + "/auth/login",
  logoutURL: host + "/auth/logout",
  companyURL: host + "/company",
  adminURL: host + "/admin",
  roleURL : host+ "/role",
  loadURL: host + "/load",
  driverURL: host + "/driver",
  bidURL: host + "/bid",
  ownedCompanyURL: host + "/company/owned-companies",
  availableLoadURL: host + "/load/available-load",
  getCompanyDriversURL: host + "/driver/company-drivers",
  myBidsURL: host + "/bid/my-bids",
  
  adminLoginURL: host + "/admin/login",
  pendingUsersURL : host+"/user/pending-users",
  activateUserURL : host+"/user/activate",
  deactivateUserURL : host+"/user/deactivate",
};

export default APPCONFIG;
