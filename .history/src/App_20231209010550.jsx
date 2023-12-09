import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
function App() {
  let [] = useS
  return (
    <div className={styles.calculator}>
      <Display></Display>
      <ButtonsContainer></ButtonsContainer>
    </div>
  );
}
export default App;
