import Image from "next/image";

import styles from "./Featured.module.css";
import UnstyledButton from "../UnstyledButton";
import coverFront from "@/images/cover-front.png";
import { RECEIPTS } from "@/data/receipts";

const Featured = ({ handleOpen }) => {
  const featuredReceipts = RECEIPTS.filter((receipt) => receipt.featured);

  return (
    <section className={styles.section}>
      <div className={styles.receipts}>
        {featuredReceipts.map((receipt) => (
          <div
            className={styles.receipt}
            id={styles[`featured${receipt.featured_stack_order}`]}
            key={receipt.id}
          >
            <Image
              src={`/images/receipts/${receipt.id}-back.png`}
              alt=""
              layout="fixed"
              width={receipt.fixed.width}
              height={receipt.fixed.height}
              priority="true"
              placeholder="blur"
              blurDataURL="/images/placeholder.png"
            />
          </div>
        ))}

        <div className={styles.receipt} id={styles.cover}>
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
