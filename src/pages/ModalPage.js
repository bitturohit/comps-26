import faker from "faker";
import { useState } from "react";

import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
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
