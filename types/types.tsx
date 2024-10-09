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

export type OverviewProductItem = {
    title: string;
    price: string;
    piece: string;
}