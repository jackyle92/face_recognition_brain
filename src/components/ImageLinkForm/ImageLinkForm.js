import React from "react";
import "./ImageLinkForm.css";

const ImmageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {"This Magic Brain will detech faces in your pictures. Git is a tough"}
      </p>
      <div className="center">
        <div className="center form pa4 br3 shadow-3">
          <input
            className="f4 pa2 w-70 center"
            type="text"
            onInput={onInputChange}
          />
          <button
            className="w-30 grow f4 link ph3 pv2 dib white bg-light-purple"
            onClick={onButtonSubmit}
          >
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImmageLinkForm;
