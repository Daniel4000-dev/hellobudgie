import { SidebarItemGroup } from "@/types/types";
import Icon from '../public/icon'
export const SIDEBAR_ITEMS: SidebarItemGroup[] = [

    {
      menuList:[ {
        title: "Overview",
        path: "/",
        icon: Icon.Overview,
      }, 
      {
        title: "Products",
        path: "/products",
        icon: Icon.Products,
      },
      {
        title: "Orders",
        path: "/orders",
        icon: Icon.Orders,
      },
      {
          title: "Categories",
          path: "/categories",
          icon: Icon.Category,
        }
    ]
    },
    {
      title: "Manage",
      menuList:[
        {
          title: "Admin",
          path: "/admin",
          icon: Icon.Admin
        },
        {
          title: "Delivery Company",
          path: "/deliverycompany",
          icon: Icon.Delivery,
        },
        {
            title: "Help Centre",
            path: "/helpcentre",
            icon: Icon.Help,
          },
      ]
    }
  ];