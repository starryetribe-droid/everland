import React, { ReactNode } from 'react';

interface SectionWrapperProps {
    children: ReactNode;
    id?: string;
    className?: string;
    pageNumber?: number;
    [key: string]: any;
}

export const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = '', pageNumber, ...props }) => {
    return (
        <section id={id} className={`relative w-full min-h-screen py-20 flex flex-col justify-center snap-start ${className}`} {...props}>
            {children}
            {pageNumber && (
                <div className="absolute bottom-8 right-8 text-black/20 font-bold text-sm z-50">
                    {pageNumber.toString().padStart(2, '0')}
                </div>
            )}
        </section>
    );
};
