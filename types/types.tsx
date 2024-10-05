import { StaticImageData } from "@/node_modules/next/image";

export type adminLoginItems = {
    title: string;
    placeholder: string;
}

export type button = {
    title?: string,
    className?: string
}

export type SidebarItemGroup = {
    title: string;
    menuList: SidebarItem[];
}

export type SidebarItem = {
    title?: string;
    path: string;
    icon?: StaticImageData;
};