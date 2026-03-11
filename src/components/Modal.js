import { createPortal } from "react-dom";

function Modal({ onClose }) {
   return createPortal(
      <div>
         <div
            className="absolute inset-0 bg-gray-300 opacity-80"
            onClick={onClose}
         ></div>
         <div className="absolute inset-x-40 inset-y-60 p-10 bg-white">
            I am a Modal!!
         </div>
      </div>,
      document.querySelector(".modal-container"),
   );
}

export default Modal;
