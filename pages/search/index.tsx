import React from "react";
import type { NextPage } from "next";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";
import { POST_JOBS_SEARCH_URL } from "../../constant/url";
import axios from "axios";
import Recommend from "../../components/recommend";

const SearchInput = styled.input`
  width: 600px;
  height: 50px;
  font-size: 20px;
  padding: 10px;
  box-sizing: border-box;
`;
const SearchButton = styled.button`
  width: 50px;
  height: 50px;
`;
const Container = styled.div``;

const RegionSelect = styled.select`
  width: 100px;
  height: 50px;
  color: #00aaff;
  border: 0;
  background-color: skyblue;
  border-radius: 5px;
`;

const RegionOption = styled.option`
  color: #eee;
  background-color: #00aaff;
  text-align: center;
`;

interface searchData {
  company_name: string;
  end_date: string;
  id: number;
  region: string;
  region_detail: string;
  require_number: number;
  start_date: string;
  telephone: string;
}

const Search: NextPage = () => {
  const [keyWord, setKeyWord] = React.useState<string>("");
  const [region, setRegion] = React.useState<string>("서울특별시");
  const [nowPageNumber, setNowPageNumber] = React.useState<number>(0);
  const [pageNumber, setPageNumber] = React.useState<number>(0);
  const [result, setResult] = React.useState<searchData[]>([]);

  React.useEffect(() => {
    let config = {
      method: "get",
      url: `http://118.40.3.28:8080/jobs?region=${region}&page=${nowPageNumber}&size=5&keyword=${keyWord}`,
      headers: { "Content-Type": `application/json` },
    };

    axios(config)
      .then((response) => {
        setNowPageNumber(0);
        console.log(config.url);
        console.log(response.data);
        setResult(response.data.result.list);
        setPageNumber(response.data.result.totalPage);
        console.log(response.data.result.list);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [region]);

  const searchWithKeyword = () => {
    let config = {
      method: "get",
      url: `http://118.40.3.28:8080/jobs?region=${region}&page=${nowPageNumber}&size=5&keyword=${keyWord}`,
      headers: { "Content-Type": `application/json` },
    };

    axios(config)
      .then((response) => {
        setNowPageNumber(0);
        console.log(config.url);
        console.log(response.data);
        setResult(response.data.result.list);
        setPageNumber(response.data.result.totalPage);
        console.log(response.data.result.list);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <RegionSelect
          name="region"
          id="region"
          onChange={(e) => {
            setRegion(e.target.value);
            console.log(region);
          }}
        >
          <RegionOption value="서울특별시">서울특별시</RegionOption>
          <RegionOption value="부산광역시">부산광역시</RegionOption>
          <RegionOption value="대구광역시">대구광역시</RegionOption>
          <RegionOption value="인천광역시">인천광역시</RegionOption>
          <RegionOption value="광주광역시">광주광역시</RegionOption>
          <RegionOption value="대전광역시">대전광역시</RegionOption>
          <RegionOption value="울산광역시">울산광역시</RegionOption>
          <RegionOption value="세종특별자치시">세종특별자치시</RegionOption>
          <RegionOption value="경기도">경기도</RegionOption>
          <RegionOption value="강원도">강원도</RegionOption>
          <RegionOption value="충청북도">충청북도</RegionOption>
          <RegionOption value="충청남도">충청남도</RegionOption>
          <RegionOption value="전라북도">전라북도</RegionOption>
          <RegionOption value="전라남도">전라남도</RegionOption>
          <RegionOption value="경상북도">경상북도</RegionOption>
          <RegionOption value="경상남도">경상남도</RegionOption>
          <RegionOption value="제주특별자치도">제주특별자치도</RegionOption>
        </RegionSelect>
        <SearchInput
          placeholder="상세 내용을 검색해주세요 (입력 안해도 됨)"
          onChange={(e) => {
            setKeyWord(e.target.value);
          }}
        />
        <SearchButton
          onClick={() => {
            searchWithKeyword();
            console.log("search");
          }}
        >
          <FaSearch size={`30`} />
        </SearchButton>
      </div>

      {result ? <Recommend data={result} /> : <div>업서</div>}

      {pageNumber !== 0 ? (
        [...Array(pageNumber)].map((data, idx) => (
          <button
            onClick={() => {
              setNowPageNumber(idx + 1);
              console.log(nowPageNumber);
            }}
            key={idx}
          >
            {idx + 1}
          </button>
        ))
      ) : (
        <div>일자리가 없습니다</div>
      )}
    </Container>
  );
};

export default Search;
