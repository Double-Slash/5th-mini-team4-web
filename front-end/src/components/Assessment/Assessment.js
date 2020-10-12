import React, { useEffect, useState } from "react";

import Search from "./Search";

import Categories from "../Categories/Categories";

//질문결과 페이지
const Assessment = () => {
  const [search, setSearch] = useState("");

  const data = [
    {
      id: 1,
      assessment: "평가제목",
      categories: [
        {
          category: "기획",
          questions: [
            {
              question: "발상:하정인의 아이디어 창출",
              description: true,
              contribution: false,
              answers: [
                {
                  writer: "사용자1",
                  answer:
                    "평가 내용_답장입력 후 상태이다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.",
                  contribution: 10,
                },
                {
                  writer: "사용자2",
                  answer: "장문 답장이다.",
                  contribution: 10,
                },
              ],
            },
            {
              question: "자료조사:정보 확보 능력?",
              description: true,
              contribution: false,
              answers: [
                {
                  writer: "사용자4",
                  answer: "아주 탁월하다",
                  contribution: 10,
                },
              ],
            },
          ],
        },

        {
          category: "개발",
          questions: [
            {
              question: "코드 퀄리티는?",
              description: true,
              contribution: false,
              answers: [
                {
                  writer: "사용자1",
                  answer: "코드를 아주 잘 작성한다.",
                  contribution: 10,
                },
              ],
            },
          ],
        },
      ],
    },
  ];
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
      <div className="Assessment">
        <Search onChange={onChange} value={search}></Search>

        <div>
          {data.map((data) =>
            data.categories.map((categories) => (
              <Categories
                categories={categories.category}
                questions={categories.questions}
              ></Categories>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Assessment;
