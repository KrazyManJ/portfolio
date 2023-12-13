import React from 'react';
import {Squircle, SquircleProps} from "@squircle-js/react";

interface ShadowSquircleProps extends SquircleProps<"div">, Omit<React.ComponentPropsWithoutRef<"div">, keyof SquircleProps<"div">> {
    squircleClassName?: string
}

const ShadowSquircle = ({
    children,
    cornerSmoothing,
    cornerRadius,
    squircleClassName,
    className,
    ...props
}: ShadowSquircleProps) => {
    return (
        <div className={"relative " + (className ?? "")} {...props}>
            <div className="-z-10 m-5 -top-5 -left-5 absolute h-full w-full drop-shadow-lg">
                <Squircle
                    cornerSmoothing={cornerSmoothing}
                    cornerRadius={cornerRadius}
                    className={"absolute inset-0 " + (squircleClassName ?? "")}
                />
            </div>
            {children}
        </div>
    );
};

export default ShadowSquircle;