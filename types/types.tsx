import { StaticImageData } from "@/node_modules/next/image";

export type adminLoginItems = {
    title: string;
    placeholder: string;
}

export type ButtonProps = {
    title?: string,
    className?: string,
    variant?: string,
    size?: string,
    onClick?:() => void,
    disabled?: boolean,
    children?: React.ReactNode,
}

export type AdminButtonItems = {
    title: string;
    placeholder: string;
}

export type deliveryCompanyButtonItems = {
    title: string;
    placeholder: string;
}

export type SidebarItemGroup = {
    title?: string;
    menuList: SidebarItem[];
}

export type SidebarItem = {
    title?: string;
    path: string;
    icon?: StaticImageData;
};

export type OverviewSummaryItem = {
    title: string;
    icon?: StaticImageData;
    body: string;
    note: string;
}

export type OverviewTableProps = {
    id: string;
    orderId: string;
    productName: string;
    price: string;
    quantity: string;
    date: string;
};

export type OverviewProductItem = {
    title: string;
    price: string;
    piece: string;
}

export type OrdersTableProductName = {
    icon?: StaticImageData;
    name: string;
  }

export type ProductTableProductName = {
    icon?: StaticImageData;
    name: string;
  }

export type ProductTableProps = {
    productId: string,
    productName: ProductTableProductName,
    price: string
    quantity: string
    status?: string
  }

export type ProductTableWrapperProps = {
    columns: any[];
    data: any[];
    onRowClick: (rowData: any) => void;
}

export type ProductTableGridWrapperProps = {
    data: any[];
    onRowClick: (rowData: any) => void;
}

  export type OrdersTableDeliveryBy ={
    icon?: StaticImageData;
    name: string;
  }

export type OrdersTableProps = {
    id: string;
    orderId: string;
    productName: OrdersTableProductName;
    price: string;
    quantity: string;
    date?: string;
    customerName?: string;
    customerEmail?: string;
    deliveryBy: OrdersTableDeliveryBy;
    status: string;
}

export type AdminTableProps = {
    id: string;
    adminId: string;
    name: string;
    title: string;
    tier: string;
    dateJoined: string;
    status: string;
}

export type DeliveryCompanyTableName = {
    icon?: StaticImageData;
    name: string;
}

export type DeliveryCompanyTableProps = {
    id: string;
    name: DeliveryCompanyTableName;
    deliveryCompanyId: string;
    dateAdded: string;
    status: string;
}

export type DeliveryCompanyInfoProps = {
    selectedCompany: any;
}

export type HelpCenterTableProps = {
    id: string;
    orderId: string;
    subject: string;
    email: string;
    name: string;
    date: string;
    status: string;
}