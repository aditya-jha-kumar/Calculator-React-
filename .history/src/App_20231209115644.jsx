import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  let [calVal, setCalVal] = useState("");
  const onButtonClick = (event) => console.log("Button Clicked.")
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <ButtonsContainer
        onButtonClick={}
      ></ButtonsContainer>
    </div>
  );
}
export default App;
