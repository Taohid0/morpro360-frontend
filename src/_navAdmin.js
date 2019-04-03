let adminItems = [
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "icon-speedometer",
    badge: {
      variant: "info",
      // text: "NEW"
    }
  },
  {
    name: "Load",
    // url: "/base",
    icon: "fa fa-suitcase",
    children: [
      {
        name: "Add New Load",
        url: "/add-load",
        icon: ""
      },
      {
        name:"Active Loads",
        url: "/available-loads-admin",
        
      }
      
    ]
  },

  {
    name: "Company",
    // url: "/base",
    icon: "fa fa-suitcase",
    children: [
      {
        name: "Pending Companies",
        url: "/pending-users",
        icon: ""
      },
      
    ]
  },

  {
    name: "Bid",
    // url: "/base",
    icon: "fa fa-hand-paper-o ",
    // children: [
    //   {
    //     name: "My Bids",
    //     url: "/my-bids",
    //     icon: ""
    //   },
    //   {
    //     name: "My Winning Bids",
    //     url: "/my-winning-bids",
    //     icon: ""
    //   },
    // ]
  },
  {
    name: "Driver",
    // url: "/base",
    icon: "fa fa-truck",
    // children: [
    //   {
    //     name: "Add Driver",
    //     url: "/add-driver",
    //     icon: ""
    //   },
    // ]
  },
  {
    name: "Admin",
    // url: "/base",
    icon: "fa fa-hand-paper-o ",
    children: [
      {
        name: "Add Admin",
        url: "/add-admin",
        icon: ""
      },
      {
        name: "All Admins",
        url: "/to-be-added-son",
        icon: ""
      },
    ]
  },
 
]


export default {
  items: adminItems
};
