import React from "react";

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <div className="form">
        <div className="form_item ">
          <input
            className="form_item-input"
            type="tex"
            onChange={onInputChange}
          />
          <button className="form_button" onClick={onButtonSubmit}>
            Detect
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageLinkForm;
