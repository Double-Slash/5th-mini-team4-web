import React, { useEffect, useState } from "react";
import "./Assessment.css";
import Search from "./Search";

import Main_title from "./Main_Title";

//질문결과 페이지
const Assessment = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      assessment: "평가제목",
      categories : [
        {
          category : "기획",
          questions : [
            {
              question : "발상:하정인의 아이디어 창출",
              description : true,
              contribution : false,
              answers : [
                {
                  writer : "사용자1",
                  answer : "평가 내용_답장입력 후 상태이다.",
                  contribution : 10
                },
                {
                  writer : "사용자2",
                  answer : "장문 답장이다.",
                  contribution : 10
                }
              ]
            },
            {
              question : "자료조사:정보 확보 능력?",
              description : true,
              contribution : false,
              answers : [
                {
                  writer : "사용자1",
                  answer : "아주 탁월하다",
                  contribution : 10
                }

              ]
            },
          ]
        },

        {
          category : "개발",
          questions : [
            {
              question : "코드 퀄리티는?",
              description : true,
              contribution : false,
              answers : [
                {
                  writer : "사용자1",
                  answer : "코드를 아주 잘 작성한다.",
                  contribution : 10
                }
              ]
            }
          ]
        },
      ]
    },

  ]
  // const getDatas = async () => {
  //   const data = await axios.get("https://localhost:8080");
  //   console.log(data+"AA");
  // };

  // useEffect(() => {
  //   getDatas();
  // }, []);

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  //const filterList = assessment.filter( info => info.name.indexOf(search) !== -1 )
  return (
    <>
    
      <Search onChange={onChange} value={search}></Search>
      
      <div>
        {data.map( (data) => (
           <Main_title categories={data.categories}>
           </Main_title>
        ))}
      </div>
    </>
  );
};

export default Assessment;
