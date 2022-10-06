import React, { useState } from "react";
// @ts-ignore
import { useSpeechRecognition } from "react-speech-kit";
import axios from "axios";

function Example() {
  const [value, setValue] = useState("");
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      setValue(result);
    },
  });

  return (
    <div style={{ marginTop: "30px" }}>
      <div
        style={{
          width: "400px",
          height: "200px",
          borderRadius: "10px",
          padding: "20px",
          boxSizing: "border-box",
          border: "1px solid black",
          margin: "0 auto",
          fontSize: "28 px",
        }}
      >
        {value}
      </div>
      <button
        onMouseDown={listen}
        onMouseUp={stop}
        style={{
          display: "block",
          width: "400px",
          height: "50px",
          margin: "0 auto",
          border: "0",
          background: "#00aaff",
          borderRadius: "10px",
          marginTop: "20px",
          fontSize: "24px",
        }}
      >
        🎤 누른 채로 말씀해주세요
      </button>
      {listening && (
        <div
          style={{ textAlign: "center", marginTop: "20px", fontSize: "24px" }}
        >
          음성인식 활성화 중
        </div>
      )}
    </div>
  );
}

export default Example;
