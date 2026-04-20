import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  // allow string or function like the original NavLink
  className?: string | ((state: { isActive: boolean; isPending: boolean }) => string);
  activeClassName?: string;
  pendingClassName?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(
  ({ className, activeClassName, pendingClassName, ...props }, ref) => {
    return (
      <RouterNavLink
        ref={ref}
        {...props}
        className={(state) => {
          const base = typeof className === "function" ? className(state) : className;
          return cn(base, state.isActive && activeClassName, state.isPending && pendingClassName);
        }}
      />
    );
  },
);

NavLink.displayName = "NavLink";

export default NavLink;
