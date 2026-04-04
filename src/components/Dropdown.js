import { GoChevronDown } from "react-icons/go";
import { useState, useEffect, useRef } from "react";

import Panel from "./Panel";

/**
 * Displays a selectable list of options in a collapsible panel.
 *
 * Props:
 * - options: Array of { label, value } objects to display
 * - value: currently selected option object
 * - onChange: callback triggered when user selects an option
 */
function Dropdown({ options, value, onChange }) {
   const [isOpen, setIsOpen] = useState(false);
   // Reference to root element for detecting outside clicks
   const divEl = useRef();

   // Close dropdown when clicking outside the component
   useEffect(() => {
      const handler = (event) => {
         if (!divEl.current) {
            return;
         }

         if (!divEl.current.contains(event.target)) {
            setIsOpen(false);
         }
      };

      document.addEventListener("click", handler, true);

      return () => {
         document.removeEventListener("click", handler);
      };
   }, []);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   const handleOptionClick = (option) => {
      setIsOpen(false);
      onChange(option);
   };

   const renderedOptions = options.map((option) => {
      return (
         <div
            className="hover:bg-sky-100 rounded cursor-pointer p-1"
            onClick={() => handleOptionClick(option)}
            key={option.value}
         >
            {option.label}
         </div>
      );
   });

   return (
      <div ref={divEl} className="w-48 relative" onClick={handleClick}>
         {/* Dropdown trigger panel */}
         <Panel className="flex justify-between items-center cursor-pointer ">
            {value?.label || "Select..."}
            <GoChevronDown />
         </Panel>
         {/* Dropdown options panel */}
         {isOpen && (
            <Panel className="absolute top-full">{renderedOptions}</Panel>
         )}
      </div>
   );
}

export default Dropdown;
