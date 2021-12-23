import Image from "next/image";

import styles from "./Featured.module.css";
import UnstyledButton from "../UnstyledButton";
import coverFront from "@/images/cover-front.png";

const Featured = ({ handleOpen }) => {
  return (
    <section className={styles.section}>
      <div className={styles.receipts}>
        <div className={styles.receipt}>
          <UnstyledButton onClick={handleOpen}>
            <Image
              src={coverFront}
              alt="a journey of little adventures in everyday life"
              layout="fixed"
              width={317}
              height={442}
              priority="true"
              placeholder="blur"
            />
          </UnstyledButton>
        </div>
      </div>
    </section>
  );
};

export default Featured;
