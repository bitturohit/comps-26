import { useState } from "react";

import Dropdown from "../components/Dropdown";

/**
 * Demonstrates usage of the reusable Dropdown component with controlled state.
 * Maintains the currently selected option and passes it to Dropdown.
 */
function DropdownPage() {
   // Stores currently selected option object
   const [selectOption, setSelectOption] = useState(null);

   // Update selected option when user makes a choice
   const handleSelect = (option) => {
      setSelectOption(option);
   };

   // Available dropdown options
   const options = [
      { label: "Red", value: "red" },
      { label: "Green", value: "green" },
      { label: "Blue", value: "blue" },
   ];

   return (
      <div className="flex">
         <Dropdown
            options={options}
            value={selectOption}
            onChange={handleSelect}
         />
         {/* Example of rendering multiple dropdowns with shared state */}
         {/* <Dropdown
            options={options}
            value={selectOption}
            onChange={handleSelect}
         /> */}
      </div>
   );
}

export default DropdownPage;
