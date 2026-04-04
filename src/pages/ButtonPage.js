import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

import Button from "../components/Button";

/**
 * Demonstrates usage of the reusable Button component with different variants and icons.
 */
function ButtonPage() {
   const handleClick = () => {
      console.log("Click!!");
   };

   return (
      <div>
         <div>
            <Button
               success
               rounded
               outline
               onClick={handleClick}
               className="mb-5"
            >
               <GoBell />
               Click me!!
            </Button>
         </div>
         <div>
            <Button danger outline>
               <GoCloudDownload />
               Buy Now!
            </Button>
         </div>
         <div>
            <Button warning>
               <GoDatabase />
               See Deal!
            </Button>
         </div>
         <div>
            <Button secondary outline>
               Hide Ads!
            </Button>
         </div>
         <div>
            <Button primary rounded>
               Something!
            </Button>
         </div>
      </div>
   );
}

export default ButtonPage;
