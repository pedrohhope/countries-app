import React, { MouseEventHandler } from "react";

interface Props {
    children: React.ReactNode,
    onClick?: MouseEventHandler
}

export default function Card({
    children,
    onClick
}: Props) {
    return (
        <div className="bg-white rounded-lg shadow-md h-96" onClick={onClick}>
            {children}
        </div>
    )
}