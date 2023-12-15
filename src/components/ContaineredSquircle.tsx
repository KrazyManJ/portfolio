import React from 'react';
import {Squircle, SquircleProps} from "@squircle-js/react";

interface ContaineredSquircleProps extends SquircleProps<"div">, Omit<React.ComponentPropsWithoutRef<"div">, keyof SquircleProps<"div">> {
    containerClassName?: string
}

const ContaineredSquircle = ({
    children,
    cornerRadius,
    className,
    containerClassName,
    ...props
}: ContaineredSquircleProps) => {
    return (
        <div className={containerClassName} style={{borderRadius: cornerRadius ? cornerRadius + 1 : undefined}}>
            <Squircle
                cornerRadius={cornerRadius}
                className={className}
                {...props}
            >{children}</Squircle>
        </div>
    );
};

export default ContaineredSquircle;