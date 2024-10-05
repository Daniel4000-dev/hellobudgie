import { SidebarItemGroup } from "@/types/types";
import Overview from '../public/overview.png'
import Products from '../public/products.png'
import Orders from '../public/orders.png'
import Category from '../public/category.png'
import Admin from '../public/admin.png'
import Delivery from '../public/delivery.png'
import Help from '../public/help.png'

export const SIDEBAR_ITEMS: SidebarItemGroup[] = [

    {
      title:"Dashboards",
      menuList:[ {
        title: "Overview",
        path: "/",
        icon: Overview,
      }, 
      {
        title: "Products",
        path: "/products",
        icon: Products,
      },
      {
        title: "Orders",
        path: "/orders",
        icon: Orders,
      },
      {
          title: "Categories",
          path: "/categories",
          icon: Category,
        }
    ]
    },
    {
      title: "Manage",
      menuList:[
        {
          title: "Admin",
          path: "/admin",
          icon: Admin
        },
        {
          title: "Delivery Company",
          path: "/deliverycompany",
          icon: Delivery,
        },
        {
            title: "Help Centre",
            path: "/helpcentre",
            icon: Help,
          },
      ]
    }
  ];