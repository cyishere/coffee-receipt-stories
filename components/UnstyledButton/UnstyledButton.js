import { btn } from "./UnstyledButton.module.css";

function UnstyledButton({ display = "block", children, ...delegated }) {
  const styles = {
    "--display": display,
  };

  return (
    <button className={btn} style={styles} {...delegated}>
      {children}
    </button>
  );
}

export default UnstyledButton;
