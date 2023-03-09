import Link from "next/link";

export interface NavItemProps {
    children: React.ReactNode;
    href: string;
}

const NavItem = ({ children, href }: NavItemProps) => {
    return (
        <span><Link href={href}>{children}</Link></span>
    )
}

export default NavItem