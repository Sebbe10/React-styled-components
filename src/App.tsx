import React from "react";
import "./App.css";
import { Button, SaveButton } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button>Lorem</Button>
      <Button bgcolor="red">Ipsum</Button>
      <SaveButton>Spara</SaveButton>
    </div>
  );
}

export default App;
