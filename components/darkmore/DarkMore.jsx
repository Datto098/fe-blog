"use client"

import { useContext } from "react"
import Moon from "../svg/Moon";
import { ThemeContext } from "@/context/ThemeContext"

export default function DarkMore(params) {

    const {toggle, theme} = useContext(ThemeContext)
    console.log(theme);
    return <button className="flex items-center justify-center rounded-full p-[4px] bg-[var(--background)] text-[var(--text)]" onClick={toggle}>
        <div className="w-[18px] h-[18px] ">
            <Moon />
        </div>
    </button>
};

