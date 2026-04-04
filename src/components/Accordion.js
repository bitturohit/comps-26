import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

/**
 * Accordion component.
 * Renders a list of expandable/collapsible items.
 * Tracks which item is expanded using local state.
 *
 * Props:
 * - items: array of objects with { id, label, content }
 */

function Accordion({ items }) {
   // Tracks which accordion item is currently expanded (-1 means all collapsed)
   const [expandedIndex, setExpandedIndex] = useState(-1);

   // Toggle expansion: collapse if already expanded, otherwise expand clicked item
   const handleClick = (currentIndex) => {
      if (currentIndex === expandedIndex) {
         setExpandedIndex(-1);
      } else {
         setExpandedIndex(currentIndex);
      }
   };

   const renderedItems = items.map((item, index) => {
      const isExpanded = index === expandedIndex;

      // Icon changes depending on expansion state
      const icon = (
         <span className="text-xl">
            {isExpanded ? <GoChevronDown /> : <GoChevronLeft />}
         </span>
      );

      return (
         <div key={item.id}>
            {/* Header section: clickable to toggle expansion */}
            <div
               className="flex justify-between p-3 bg-gray-50 border-b border-gray-200 items-center cursor-pointer"
               onClick={() => handleClick(index)}
            >
               {item.label}
               {icon}
            </div>
            {/* Expanded content section */}
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
