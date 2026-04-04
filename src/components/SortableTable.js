import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

/**
 * Enhances Table with sorting capability.
 *
 * Uses config-driven approach to inject sortable headers
 * only for columns that define a sortValue function.
 */
import Table from "./Table";
import useSort from "../hooks/use-sort";

function Sortabletable(props) {
   const { config, data } = props;
   const { sortColumn, sortBy, sortOrder, sortedData } = useSort(data, config);

   // Enhance config: add clickable headers for sortable columns
   const updatedConfig = config.map((column) => {
      // Skip columns that do not support sorting
      if (!column.sortValue) {
         return column;
      }

      return {
         ...column,
         // Custom header with click handler for sorting
         header: () => (
            <th
               className="cursor-pointer hover:bg-gray-100"
               key={column.label}
               onClick={() => sortColumn(column.label)}
            >
               <div className="flex items-center">
                  {getIcons(column.label, sortBy, sortOrder)}
                  {column.label}
               </div>
            </th>
         ),
      };
   });

   return <Table {...props} data={sortedData} config={updatedConfig} />;
}

// Render sort icons based on current sort state
function getIcons(label, sortBy, sortOrder) {
   if (label !== sortBy) {
      return (
         <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
         </div>
      );
   }

   if (sortOrder === "asc") {
      return (
         <div>
            <GoArrowSmallUp />
         </div>
      );
   } else if (sortOrder === "desc") {
      return (
         <div>
            <GoArrowSmallDown />
         </div>
      );
   }
}

export default Sortabletable;
