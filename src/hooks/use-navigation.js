import { useContext } from "react";

import NavigationContext from "../context/navigation";

/**
 * Hook to access navigation context.
 */
function useNavigation() {
   return useContext(NavigationContext);
}

export default useNavigation;
