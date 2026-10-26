"use client";

import React from "react";
import Link from "next/link";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "danger"
  | "indigo"
  | "cyan"
  | "emerald"
  | "amber"
  | "purple";

export type ButtonSize = "xs" | "sm" | "md" | "lg";

interface BaseButtonProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  iconRight?: React.ReactNode;
  rightIcon?: React.ReactNode;
  isLoading?: boolean;
  fullWidth?: boolean;
  children: React.ReactNode;
  className?: string;
}

type ButtonAsButton = BaseButtonProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseButtonProps & {
  href: string;
  target?: string;
  rel?: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary:
    "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 border border-indigo-500/40",
  secondary:
    "bg-[#0f1422] hover:bg-[#161d30] text-slate-200 border border-white/10 hover:border-white/20 shadow-md",
  outline:
    "bg-transparent hover:bg-white/5 text-slate-300 border border-white/15 hover:border-white/30",
  ghost:
    "bg-transparent hover:bg-white/5 text-slate-400 hover:text-white border border-transparent",
  danger:
    "bg-rose-950/60 hover:bg-rose-900/60 text-rose-300 border border-rose-500/40 shadow-lg shadow-rose-950/50",
  indigo:
    "bg-indigo-600/30 hover:bg-indigo-600/40 text-indigo-300 border border-indigo-500/50 shadow-md shadow-indigo-950/50",
  cyan:
    "bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 shadow-md shadow-cyan-950/50",
  emerald:
    "bg-emerald-950/50 hover:bg-emerald-900/50 text-emerald-300 border border-emerald-500/40 shadow-md shadow-emerald-950/50",
  amber:
    "bg-amber-500/20 hover:bg-amber-500/30 text-amber-300 border border-amber-500/40 shadow-md shadow-amber-950/50",
  purple:
    "bg-purple-950/50 hover:bg-purple-900/50 text-purple-300 border border-purple-500/40 shadow-md shadow-purple-950/50"
};

const SIZE_STYLES: Record<ButtonSize, string> = {
  xs: "px-2.5 py-1 text-[11px] rounded-lg gap-1.5",
  sm: "px-3 py-1.5 text-xs rounded-xl gap-2",
  md: "px-4 py-2 text-xs sm:text-sm rounded-xl gap-2 font-medium",
  lg: "px-5 py-2.5 text-sm sm:text-base rounded-xl gap-2.5 font-semibold"
};

export function Button({
  variant = "primary",
  size = "md",
  icon,
  leftIcon,
  iconRight,
  rightIcon,
  isLoading = false,
  fullWidth = false,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center font-heading transition-all duration-200 select-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-indigo-500/40 disabled:opacity-50 disabled:pointer-events-none";
  const variantClass = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;
  const sizeClass = SIZE_STYLES[size] || SIZE_STYLES.md;
  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseClasses} ${variantClass} ${sizeClass} ${widthClass} ${className}`;

  const startIcon = leftIcon || icon;
  const endIcon = rightIcon || iconRight;

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
      ) : (
        startIcon && <span className="shrink-0">{startIcon}</span>
      )}
      <span>{children}</span>
      {!isLoading && endIcon && <span className="shrink-0">{endIcon}</span>}
    </>
  );

  if ("href" in props && props.href) {
    const { href, target, rel } = props;
    return (
      <Link href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={combinedClasses} disabled={isLoading || buttonProps.disabled} {...buttonProps}>
      {content}
    </button>
  );
}
