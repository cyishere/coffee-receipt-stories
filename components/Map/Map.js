import { Dialog } from "@reach/dialog";
import Image from "next/image";
import Link from "next/link";

import styles from "./Map.module.css";
import UnstyledButton from "../UnstyledButton";
import VisuallyHidden from "../VisuallyHidden";
import { KEYWORDS, LOCATION } from "@/data/selectors";

function Map({ isOpen, handleClose }) {
  return (
    <Dialog isOpen={isOpen} className={styles.container}>
      <div className={styles.close}>
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

      <div className={styles.grid}>
        <div className={styles.locationColumn}>
          <h2>
            <VisuallyHidden>By Location</VisuallyHidden>
            <Image
              src="/images/by-location.png"
              alt=""
              layout="fixed"
              width={230}
              height={68}
              property="true"
            />
          </h2>
          <div className={styles.world}>
            {LOCATION.map((place) => (
              <div className={styles.location} key={place.id}>
                <VisuallyHidden>{place.text}</VisuallyHidden>
                <Link href={`/location/${place.text.toLowerCase()}`} passHref>
                  <a>
                    <Image
                      src={place.image}
                      alt=""
                      layout="fixed"
                      width={place.width}
                      height={place.height}
                      property="true"
                    />
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </div>
        <aside className={styles.keywordsColumn}>
          <h2>
            <VisuallyHidden>By Keywords</VisuallyHidden>
            <Image
              src="/images/by-keywords.png"
              alt=""
              layout="fixed"
              width={240}
              height={65}
              property="true"
            />
          </h2>

          <div className={styles.keywords}>
            {KEYWORDS.map((keyword) => (
              <div
                key={keyword.id}
                className={styles.keyword}
                style={{
                  "--width": keyword.width + "px",
                  "--height": keyword.height + "px",
                }}
              >
                <VisuallyHidden>{keyword.text}</VisuallyHidden>
                <Link href={`/keywords/${keyword.text.toLowerCase()}`} passHref>
                  <a className={styles.content}>
                    <div className={styles.wrapper}>
                      <Image
                        src={keyword.images.unselected}
                        alt=""
                        layout="fixed"
                        width={keyword.width}
                        height={keyword.height}
                        property="true"
                      />
                    </div>
                    <div className={styles.wrapper}>
                      <Image
                        src={keyword.images.selected}
                        alt=""
                        layout="fixed"
                        width={keyword.width}
                        height={keyword.height}
                        property="true"
                      />
                    </div>
                  </a>
                </Link>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </Dialog>
  );
}

export default Map;
