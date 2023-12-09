import styles from "./Display.module.css";
const Display = ({displ}) => {
  return <input className={styles.display} type="text" value={displayValue} />;
};
export default Display;
