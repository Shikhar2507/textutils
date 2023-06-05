import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import React, { useState } from "react";
import Alert from "./components/Alert";
// import About from "./components/about";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark Mode Activated", "success");
      document.title = "TextUtils - Dark Mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Activated", "success");
      document.title = "TextUtils - Light Mode";
    }
  };
  const greyTheme = () => {
    document.body.style.backgroundColor = "grey";
    setMode("grey");
  };
  const blueTheme = () => {
    document.body.style.backgroundColor = "blue";
    setMode("grey");
  };
  const aquaTheme = () => {
    setMode("turquoise");
    document.body.style.backgroundColor = "#056a7e";
  };
  return (
    <>
      {/* <Router> */}
      <Navbar
        title="Textutils"
        aboutText="about TextUtils"
        mode={mode}
        toggleMode={toggleMode}
        greyTheme={greyTheme}
        blueTheme={blueTheme}
        aquaTheme={aquaTheme}
      />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Switch> */}
        {/* <Route exact path="/about" element={<About />}> */}
        {/* <About /> */}
        {/* </Route> */}
        {/* <Route */}
        {/* exact
              path="/"
              element={ */}
        <TextForm
          title="Enter text to analyze"
          mode={mode}
          showAlert={showAlert}
        />
        {/* } */}
        {/* > */}
        {/* <TextForm
                showAlert={showAlert}
                title="Enter the Text to Analyse"
                mode={mode}
              /> */}
        {/* </Route> */}
        {/* </Switch> */}
      </div>
      {/* </Router> */}
    </>
  );
}

export default App;
