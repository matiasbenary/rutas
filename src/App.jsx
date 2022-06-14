import ButtonsRojo from "./components/ButtonsRojo";

function App() {
  return (
    <ButtonsRojo
      onClick={() => {
        console.log("hola");
      }}
    >
      hola
    </ButtonsRojo>
  );
}

export default App;
