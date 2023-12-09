import styles from "./ButtonsContainer.module.css";
const ButtonsContainer = ({ onButtonClick }) => {
  const buttonNames = [
    "C",
    "C",
    "%",
    <span></span>,//
    "7",
    "8",
    "9",
    "*",//
    "4",
    "5",
    "6",
    "-",//
    "7",
    "8",
    "9",
    "+",//
    "0",
    ".",
    "=",//
  ];
  return (
    <div className={styles.buttonsContainer}>
      {buttonNames.map((buttonName) => (
        <button
          key="Name"
          className={styles.button}
          onClick={() => onButtonClick(buttonName)}
        >
          {buttonName}
        </button>
      ))}
    </div>
  );
};
export default ButtonsContainer;
