import { Button } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

import ButtonBlue from "./components/ButtonBlue";
import About from "./Pages/About";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <Button bg="red.400">
        <div>test</div>
      </Button>
      <ButtonBlue
        onClick={() => {
          console.log("hola");
        }}
        onDoubleClick={() => {
          console.log("doble");
        }}
        color="white"
      >
        <div>Ejemplo</div>
      </ButtonBlue>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
