/**
 * Custom Link component.
 * Wraps an <a> tag to provide client-side navigation without full page reloads.
 * Integrates with the custom useNavigation hook to track current path and trigger navigation.
 *
 * Props:
 * - to: target route path
 * - children: link label or nested content
 * - className: base styling classes
 * - activeClassName: additional styling applied when link is active
 */
import classNames from "classnames";

import useNavigation from "../hooks/use-navigation";

function Link({ to, children, className, activeClassName }) {
   const { navigate, currentPath } = useNavigation();

   // Compute CSS classes dynamically:
   // - Always apply base text color
   // - Merge any custom className passed in
   // - Apply activeClassName when current path matches target path
   const classes = classNames(
      "text-blue-500",
      className,
      currentPath === to && activeClassName,
   );

   const handleClick = (event) => {
      // Allow default browser behavior for opening link in new tab/window
      if (event.ctrlKey || event.metaKey) {
         return;
      }

      event.preventDefault(); // Prevent full page reload

      navigate(to); // Trigger client-side navigation
   };

   return (
      <a className={classes} href={to} onClick={handleClick}>
         {children}
      </a>
   );
}

export default Link;
