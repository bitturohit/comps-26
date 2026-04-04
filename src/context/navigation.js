import { createContext, useState, useEffect } from "react";

/**
 * Provides client-side navigation state without full page reload.
 *
 * Tracks currentPath and exposes navigate function to update URL
 * using browser history API.
 */
const NavigationContext = createContext();

function NavigationProvider({ children }) {
   const [currentPath, setCurrentPath] = useState(window.location.pathname);

   // Listen for browser back/forward navigation
   useEffect(() => {
      const handler = () => {
         setCurrentPath(window.location.pathname);
      };
      window.addEventListener("popstate", handler);

      return () => {
         window.removeEventListener("popstate", handler);
      };
   }, []);

   // Updates URL and syncs navigation state.
   const navigate = (to) => {
      window.history.pushState({}, "", to);
      setCurrentPath(to);
   };

   return (
      <NavigationContext.Provider value={{ currentPath, navigate }}>
         {children}
      </NavigationContext.Provider>
   );
}

export { NavigationProvider };
export default NavigationContext;
