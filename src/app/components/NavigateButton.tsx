"use client"

import { useRouter } from "next/navigation"
import { CSSProperties } from "react"

interface Props {
    url: string,
    title: string,
    customStyle?: CSSProperties
}

export default function NavigateButton({
    url,
    title,
    customStyle
}: Props) {
    const router = useRouter()

    const onNavigate = () => {
        router.push(url)
    }

    return (
        <button onClick={onNavigate} className="py-3 px-14 shadow-md rounded-md" style={customStyle}>
            {title}
        </button>
    )
}