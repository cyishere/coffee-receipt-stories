import React from "react";
import Image from "next/image";

import styles from "./Intro.module.css";
import VisuallyHidden from "../VisuallyHidden";

const Intro = () => (
  <section className={styles.section}>
    <VisuallyHidden>
      It was a Christmas Eve, one of those days that I felt neither inspired nor
      motivated, just lost in the miserable feeling of self-doubt. :( Sitting in
      a nearby cafe, I saw a person writing something at the back of the
      receipt. Instantly, I realized all I should do was just to keep doing what
      I was doing. So I took out my pen and drew **a little story** at the back
      of my receipt, thinking that maybe one day I&#39;d be able to finish 100
      stories in 100 different coffee places all over Tokyo and then stop. Then
      the day came but I didn&#39;t stop. :) by Odding
    </VisuallyHidden>
    <div className={styles.hero}>
      <Image
        src="/images/intro-text.png"
        alt=""
        layout="fixed"
        width={646}
        height={474}
        priority="true"
      />
    </div>

    <div className={styles.arrow}>
      <Image
        src="/images/arrow.png"
        alt="scroll down"
        layout="fixed"
        width={35}
        height={20}
      />
    </div>
  </section>
);

export default Intro;
