import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'red' | 'blue' | 'outline';
  href?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'red', href, children, ...props }, ref) => {
    const baseStyles =
      'group relative inline-flex items-center justify-center overflow-hidden rounded-md px-6 py-3 font-semibold text-white transition-all duration-300';
    
    const variants = {
      red: 'bg-spider-red',
      blue: 'bg-spider-blue',
      outline: 'border-2 border-spider-red text-spider-red bg-transparent hover:text-white',
    };

    const overlayVariants = {
      red: 'bg-red-950/40',
      blue: 'bg-blue-950/40',
      outline: 'bg-spider-red',
    };

    const classes = cn(baseStyles, variants[variant], className);

    const content = (
      <>
        {/* Sliding overlay for the dark effect */}
        <span
          className={cn(
            'absolute inset-0 translate-x-[-100%] transition-transform duration-300 ease-out group-hover:translate-x-0 group-active:translate-x-0',
            overlayVariants[variant]
          )}
        />
        {/* Button text relative to stay above the overlay */}
        <span className="relative z-10">{children}</span>
      </>
    );

    if (href) {
      return (
        <a href={href} className={classes}>
          {content}
        </a>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {content}
      </button>
    );
  }
);
Button.displayName = 'Button';
