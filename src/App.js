import { useState } from "react";

import Dropdown from "./components/Dropdown";

function App() {
   const [selectOption, setSelectOption] = useState(null);

   const handleSelect = (option) => {
      setSelectOption(option);
   };

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
         {/* <Dropdown
            options={options}
            value={selectOption}
            onChange={handleSelect}
         /> */}
      </div>
   );
}

export default App;
