/**
 * Route component.
 * Conditionally renders child components based on the current path.
 *
 * Acts as a lightweight alternative to traditional routing libraries.
 * Assumes exact path matching (no partial or dynamic route handling).
 *
 * Props:
 * - path: URL path used to determine whether children should be rendered
 * - children: Component(s) rendered when the path matches current route
 */

import useNavigation from "../hooks/use-navigation";

function Route({ path, children }) {
   const { currentPath } = useNavigation();

   // Render children only if the current path matches the route
   if (path === currentPath) {
      return children;
   }

   // Return null when route does not match (nothing rendered)
   return null;
}

export default Route;
