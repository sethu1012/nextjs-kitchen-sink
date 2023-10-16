import { cn } from "~/utils/lib";
import React from "react";

type IButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ className, children }: IButtonProps) => {
    return <button className={cn(`
        p-2 
        bg-emerald-600 rounded-lg active:bg-emerald-500 hover:bg-emerald-800
    `, className)}>{children}</button>
};

export default Button;