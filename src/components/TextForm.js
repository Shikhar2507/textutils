import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  const handleUpClick = () => {
    // console.log("Button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UpperCase", "success");
  };

  const handleLowerClick = () => {
    // console.log("Button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase", "success");
  };

  const handleClearClick = () => {
    // console.log("Button clicked");
    let newText = "";
    setText(newText);
    props.showAlert("Cleared the textbox", "success");
  };

  const handleSentenceClick = () => {
    // console.log("Button clicked");
    let newText = text.charAt(0).toUpperCase() + text.substring(1);
    setText(newText);
    props.showAlert(
      "First character of sentence Converted to UpperCase",
      "success"
    );
  };

  const handleFirstCapitalClick = () => {
    // console.log("Button clicked");
    let newText = text.split(" ");
    let newestText = "";
    for (let i = 0; i < newText.length; i++) {
      // console.log(newText[i].charAt(0).toUpperCase());
      newestText =
        newestText +
        newText[i].charAt(0).toUpperCase() +
        newText[i].substring(1) +
        " ";
    }
    setText(newestText);
    props.showAlert("First Character Converted to UpperCase", "success");
  };

  const handleOnChange = (e) => {
    //  console.log("changed");
    setText(e.target.value);
  };

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <div className="mb-3">
          <h1>{props.title}</h1>
          {/* <label for="myBox" className="form-label">Example textarea</label> */}
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "dark" ? "#073e5a" : "white",
              color: props.mode === "light" ? "#042743" : "white",
            }}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleUpClick}
        >
          Convert to UpperCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleLowerClick}
        >
          Convert to LowerCase
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleClearClick}
        >
          Clear
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleSentenceClick}
        >
          Sentence Case
        </button>
        <button
          disabled={text.length === 0}
          className="btn btn-primary mx-2 my-2"
          onClick={handleFirstCapitalClick}
        >
          First Letter Capital
        </button>
      </div>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "#042743" : "white" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {" "}
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          words and {text.length - text.split(" ").length + 1} characters
        </p>
        <p>
          {" "}
          It may take{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes or{" "}
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length *
            60}{" "}
          seconds to read{" "}
        </p>
        <h3>Preview</h3>
        <p>
          {text.length > 0
            ? text
            : "Enter your text in text area to preview it here"}
        </p>
      </div>
    </>
  );
}
