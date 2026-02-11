import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
   const [expandedIndex, setExpandedIndex] = useState(-1);

   const handleClick = (currentIndex) => {
      if (currentIndex === expandedIndex) {
         setExpandedIndex(-1);
      } else {
         setExpandedIndex(currentIndex);
      }
   };

   const renderedItems = items.map((item, index) => {
      const isExpanded = index === expandedIndex;

      const icon = (
         <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
         </span>
      );

      return (
         <div key={item.id}>
            <div
               className="flex justify-between p-3 bg-gray-50 border-b border-gray-200 items-center cursor-pointer"
               onClick={() => handleClick(index)}
            >
               {item.label}
               {icon}
            </div>
            {isExpanded && (
               <div className="border-b p-5 border-gray-200">
                  {item.content}
               </div>
            )}
         </div>
      );
   });

   return (
      <div className="border-x border-t rounded border-gray-200">
         {renderedItems}
      </div>
   );
}

export default Accordion;
