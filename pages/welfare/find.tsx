import axios from "axios";
import React from "react";
import { GET_WELFARE_URL, POST_WELFARE_URL } from "../../constant/url";

const Find = () => {
  // const [result, setResult] = React.useState<string[]>([]);
  // const [result2, setResult2] = React.useState<string[]>([]);
  const [data, setData] = React.useState([]);
  const [pageNumber, setPageNumber] = React.useState(0);
  const [pageCount, setPageCount] = React.useState(0);

  type form = [string, string, boolean];

  const submit = async (randomNumber: number) => {
    let temp: string[] = [];
    let temp2: string[] = [];
    console.log(form, form2);

    for (let i = 0; i < form.length; i++) {
      if (form[i][2] === true) {
        temp.push(form[i][1]);
      }
    }

    for (let i = 0; i < form2.length; i++) {
      if (form2[i][2] === true) {
        temp2.push(form2[i][1]);
      }
    }

    let data = {
      targets: temp,
      wish_benefits: temp2,
    };
    let config = {
      method: "patch",
      url: POST_WELFARE_URL + `/${randomNumber}`,
      data: data,
      withCredentials: true,
    };
    console.log(config.url);

    await axios(config)
      .then((res) => {
        console.log(res);
        let config = {
          method: "get",
          url: GET_WELFARE_URL + `/${randomNumber}?page=${pageNumber}`,
          data: data,
          withCredentials: true,
        };

        axios(config)
          .then((res) => {
            console.log(res.data);
            setData(res.data.list);
            console.log(res.data.page_count)
            setPageCount(res.data.page_count);
            console.log(pageNumber);
          })
          .catch((err) => {
            console.log(err);
            console.log("get err");
          });
      })
      .catch((err) => {
        console.log(err);
      });

    console.log(temp, temp2);
  };

  const randomNumber = Math.round(Math.random() * 1000);

  React.useEffect(() => {
    localStorage.setItem("key", randomNumber.toString());
    console.log(localStorage.getItem("key"));
  }, []);

  React.useEffect(() => {
    let config = {
      method: "get",
      url: GET_WELFARE_URL + `/${randomNumber}?page=${pageNumber}`,
      data: data,
      withCredentials: true,
    };

    axios(config)
      .then((res) => {
        console.log(res);
        let config = {
          method: "get",
          url: GET_WELFARE_URL + `/${randomNumber}?page=${pageNumber}`,
          data: data,
          withCredentials: true,
        };

        axios(config)
          .then((res) => {
            console.log(res.data);
            setData(res.data.list);
            setPageCount(res.data.page_count);
            console.log("pageCount", pageCount);
            console.log(pageNumber);
          })
          .catch((err) => {
            console.log(err);
            console.log("get err");
          });
      })
      .catch((err) => {
        console.log(err);
      });
  }, [pageNumber]);

  let form: form[] = [
    ["저소득자", "LOW_INCOME", false],
    ["장애인", "DISABLED", false],
    ["국가유공자", "VETERAN", false],
  ];

  let form2: form[] = [
    ["교육 지원", "EDUCATION", false],
    ["의료 지원", "MEDICAL", false],
    ["문화생활 지원", "CULTURE", false],
    ["경제적 지원", "FINANCIAL", false],
    ["기타 정부부처 소관", "OTHER", false],
  ];

  return (
    <>
      {form.map((data, idx) => {
        return (
          <div key={idx}>
            <input
              type="checkbox"
              name="check"
              value={data[1]}
              onChange={(e) => {
                form[idx][2] = !form[idx][2];
              }}
            />
            <label htmlFor="check">{data[0]}</label>
          </div>
        );
      })}

      {form2.map((data, idx) => {
        return (
          <div key={idx}>
            <input
              type="checkbox"
              name="check2"
              value={data[1]}
              onChange={(e) => {
                form2[idx][2] = !form2[idx][2];
              }}
            />
            <label htmlFor="check2">{data[0]}</label>
          </div>
        );
      })}
      <button
        onClick={() => {
          submit(randomNumber);
        }}
      >
        계산하기
      </button>
      {data &&
        data.map((data_, idx) => {
          return (
            <div key={idx} style={{ margin: "50px auto" }}>
              <div>
                {data_.department} {data_.division}
              </div>
              <div>{data_.summary}</div>
            </div>
          );
        })}
      {new Array(pageCount).fill(0).map((_, idx) => {
        <button
          onClick={() => {
            setPageNumber(idx);
          }}
        >
          {idx + 1}
        </button>;
      })}
    </>
  );
};

export default Find;
