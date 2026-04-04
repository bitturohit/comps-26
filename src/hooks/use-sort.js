import { useState } from "react";

/**
 * Hook that provides sorting logic for config-driven tables.
 *
 * Sorting cycles through: asc → desc → none.
 * Uses column.sortValue to determine how values should be compared.
 */
function useSort(data, config) {
   const [sortOrder, setSortOrder] = useState(null);
   const [sortBy, setSortBy] = useState(null);

   // Updates sorting state based on selected column.
   const sortColumn = (label) => {
      // Reset to ascending when switching to a different column
      if (sortBy && label !== sortBy) {
         setSortOrder("asc");
         setSortBy(label);
         return;
      }

      // Cycle sorting state for same column
      if (sortOrder === null) {
         setSortOrder("asc");
         setSortBy(label);
      } else if (sortOrder === "asc") {
         setSortOrder("desc");
         setSortBy(label);
      } else if (sortOrder === "desc") {
         setSortOrder(null);
         setSortBy(null);
      }
   };

   let sortedData = data;
   if (sortOrder && sortBy) {
      // Retrieve column-specific sort function
      const { sortValue } = config.find((column) => column.label === sortBy);
      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      sortedData = [...data].sort((a, b) => {
         const valueA = sortValue(a);
         const valueB = sortValue(b);

         if (typeof valueA === "string") {
            return valueA.localeCompare(valueB) * reverseOrder;
         } else {
            return (valueA - valueB) * reverseOrder;
         }
      });
   }

   return { sortColumn, sortBy, sortOrder, sortedData };
}

export default useSort;
