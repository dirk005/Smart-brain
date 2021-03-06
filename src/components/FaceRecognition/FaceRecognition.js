import React from "react";

const FaceRecognition = ({ imageUrl, boxes }) => {
  return (
    <div className="faceRecognition">
      <div className="faceRecognition_box">
        <img
          className="faceRecognition_image"
          id="inputimage"
          alt=""
          src={imageUrl}
        />
        {boxes.map((box) => (
          <div
            key={box.topRow}
            className="bounding-box"
            style={{
              top: box.topRow,
              right: box.rightCol,
              bottom: box.bottomRow,
              left: box.leftCol,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default FaceRecognition;
