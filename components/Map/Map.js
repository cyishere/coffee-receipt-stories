import { Dialog } from "@reach/dialog";
import Image from "next/image";

import { container, close } from "./Map.module.css";
import UnstyledButton from "../UnstyledButton";

function Map({ isOpen, handleClose }) {
  return (
    <Dialog isOpen={isOpen} className={container}>
      <div className={close}>
        <UnstyledButton onClick={handleClose}>
          <Image
            src="/images/close-icon_2x.png"
            alt="Close"
            layout="fixed"
            width={50}
            height={50}
            priority="true"
          />
        </UnstyledButton>
      </div>
    </Dialog>
  );
}

export default Map;
