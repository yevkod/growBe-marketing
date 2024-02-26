import React from "react";

export const Button = ({ text, className = '', arrow = false, ...rest }) => {
    return (
        <div>
            <button className={`flex bg-[#F25822] hover:bg-[#db6a3d] active:bg-[#c9653d] px-7 w-full items-center py-4 justify-around text-white rounded-full font-medium text-[12px] uppercase ${className}`} {...rest}>
                <span>{text}</span>
                {arrow && (
                    <span>{'>'}</span>
                )}
            </button>
        </div>
    )
}