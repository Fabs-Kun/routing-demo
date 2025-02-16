"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./style.css";
import { useState } from "react";

const navLinks = [
    { name: "Example-Register", href: "/example-register"},
    { name: "Example-Login", href: "/example-login"}
]

export default function authLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathName = usePathname();
    const [input, setInput] = useState("");

    return(
        <div>
            <div>
                <input value={input} onChange={(e) => setInput(e.target.value)} />
                </div>
            {/* <h2>Inner Layout</h2>
            {children} */}
            {navLinks.map((link) => {
                const isActive = pathName.startsWith(link.href);

                return(
                    <Link href={link.href} key={link.name} className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"}>
                        {link.name}
                    </Link>
                )
            })}
            {children}
        </div>
    )
}