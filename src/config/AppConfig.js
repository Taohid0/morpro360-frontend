const localhost = "http://localhost:3001";
const server = "";
const host = localhost;

const APPCONFIG = {
  userURL: host + "/user",
  loginURL: host + "/auth/login",
  logoutURL: host + "/auth/logout",
  companyURL: host + "/company",
  loadURL: host + "/load",
  driverURL: host + "/driver",
  bidURL: host + "/bid",
  ownedCompanyURL: host + "/company/owned-companies",
  availableLoadURL: host + "/load/available-load",
  getCompanyDriversURL: host + "/driver/company-drivers",
  myBidsURL: host + "/bid/my-bids",
  adminURL: host + "/admin",
  adminLoginURL: host + "/admin/login"
};

export default APPCONFIG;
