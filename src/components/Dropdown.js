import { useState, useEffect } from "react";
import { GoChevronDown } from "react-icons/go";

import Panel from "./Panel";

// const dropdown = document.querySelector(".w-48");

// const handleClick = (event) => {
//    if (dropdown.contains(event.target)) {
//       console.log("Inside dropdown");
//    } else {
//       console.log("Outside dropdown");
//    }
// };

// document.addEventListener('click', handleClick, true);

function Dropdown({ options, value, onChange }) {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
      const handler = (event) => {
         console.log(event.target);
      };

      document.addEventListener("click", handler, true);
   }, []);

   const handleClick = () => {
      setIsOpen(!isOpen);
   };

   // window.timeTwo = performance.now();
   const handleOptionClick = (option) => {
      // window.timeOne = performance.now();
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
      <div className="w-48 relative" onClick={handleClick}>
         <Panel className="flex justify-between items-center cursor-pointer ">
            {value?.label || "Select..."}
            <GoChevronDown />
         </Panel>
         {isOpen && (
            <Panel className="absolute top-full">{renderedOptions}</Panel>
         )}
      </div>
   );
}

export default Dropdown;
