import faker from "faker";
import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

//Demonstrates usage of the Modal component with an action bar and dummy text content.
function ModalPage() {
   // Controls modal visibility
   const [showModal, setShowModal] = useState(false);

   const handleClick = () => {
      setShowModal(!showModal);
   };

   const modal = (
      <Modal
         onClose={handleClick}
         actionBar={
            <div>
               <Button primary onClick={handleClick}>
                  I accept
               </Button>
            </div>
         }
      >
         <p>This is an important agreement for you to accept</p>
      </Modal>
   );

   // Generates long placeholder content to demonstrate modal overlay behavior
   const dummyTexts = faker.lorem.paragraphs(30);

   return (
      <div>
         {showModal && modal}
         <Button primary onClick={handleClick}>
            Open Modal
         </Button>
         <p>{dummyTexts}</p>
      </div>
   );
}

export default ModalPage;
