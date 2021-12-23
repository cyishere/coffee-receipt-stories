import styles from "./VisuallyHidden.module.css";

function VisuallyHidden({ children }) {
  return <div className={styles.container}>{children}</div>;
}

export default VisuallyHidden;
