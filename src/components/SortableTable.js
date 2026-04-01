import { useState } from "react";
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";

import Table from "./Table";

function Sortabletable(props) {
   const [sortOrder, setSortOrder] = useState(null);
   const [sortBy, setSortBy] = useState(null);

   const { config, data } = props;

   const handleClick = (label) => {
      if (sortBy && label !== sortBy) {
         setSortOrder("asc");
         setSortBy(label);
         return;
      }

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

   const updatedConfig = config.map((column) => {
      if (!column.sortValue) {
         return column;
      }

      return {
         ...column,
         header: () => (
            <th
               className="cursor-pointer hover:bg-gray-100"
               key={column.label}
               onClick={() => handleClick(column.label)}
            >
               <div className="flex items-center">
                  {getIcons(column.label, sortBy, sortOrder)}
                  {column.label}
               </div>
            </th>
         ),
      };
   });

   let sortedData = data;
   if (sortOrder && sortBy) {
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

   return <Table {...props} data={sortedData} config={updatedConfig} />;
}

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
