import "./App.css";
import NavBar from "./components/navBar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <NavBar />
        <main></main>
      </Router>
    </ChakraProvider>
  );
}

export default App;
