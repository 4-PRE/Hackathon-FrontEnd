import React, { useEffect, useState } from "react";
// @ts-ignore
import { useSpeechRecognition } from "react-speech-kit";
import axios from "axios";
import { GET_SPEECH_URL } from "../../constant/url";
import useDebounce from "../../hooks/useDebounce";

function Example() {
  const [value, setValue] = useState("");
  const [showval, setShowval] = useState("");
  const [continuousCode, setContinuousCode] = useState("");
  const [result, setResult] = useState("");
  const { debounce } = useDebounce();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: any) => {
      setShowval(result);
      debounce(() => setValue(result), 1000);
    },
  });

  useEffect(() => {
    let config = {
      method: "get",
      url:
        GET_SPEECH_URL + `?speech=${value}?continuous_code=${continuousCode}`,
    };
    axios(config)
      .then((res) => {
        console.log(res);
        console.log(config.url);
        setContinuousCode(res.data.continuous_code);
        setResult(res.data.text);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [value]);

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
        {showval}
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
      {result}
      <div>이렇게 말씀해보세요!</div>
      <p>기초생활수급자인데, 추가적인 경제 지원을 받고싶어요</p>
    </div>
  );
}

export default Example;
