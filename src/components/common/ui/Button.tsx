import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

interface ButtonOwnProps {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  className?: string;
  disabled?: boolean;
}

type ButtonProps<T extends ElementType = "button"> = ButtonOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof ButtonOwnProps> & {
    as?: T;
  };

export const Button = <T extends ElementType = "button">({
  variant = "primary",
  size = "md",
  children,
  className = "",
  disabled,
  as,
  ...props
}: ButtonProps<T>) => {
  const baseStyles =
    "font-medium rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none";

  const disabledStyles = disabled ? "opacity-25 select-none bg-gray-200 pointer-events-none" : "";

  const variantStyles: Record<"primary" | "secondary" | "outline" | "danger", string> = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",
    secondary: "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border-2 border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500",
    danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",
  };

  const sizeStyles: Record<"sm" | "md" | "lg", string> = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  };

  const Component: ElementType = as || "button";

  return (
    <Component
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className} ${disabledStyles}`}
      {...props}
    >
      {children}
    </Component>
  );
};
