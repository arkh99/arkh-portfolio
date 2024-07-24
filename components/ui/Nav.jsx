"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: 'home',
        Path: '/',

    },
    {
        name: 'services',
        Path: '/services',

    },
    {
        name: 'resume',
        Path: '/resume',

    },
    {
        name: 'work',
        Path: '/work',

    },
    {
        name: 'contact',
        Path: '/contact',

    },
]

const Nav = () => {
    const pathname = usePathname()
    return (
        <nav className="flex gap-8">{links.map((link, index) => {
            return <Link href={link.Path} key={index} className={`${link.Path === pathname && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all`}>{ link.name}</Link>
        }) }</nav>
    )
}

export default Nav;