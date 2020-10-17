import React, { useEffect, useState } from "react";
import Search from "./Search";
import "../../css/Assessment.css";
import Categories from "./Categories";

//질문결과 페이지
const Assessment = () => {
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
                    "평가 내용_답장입력 후 상태이다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.평가 내용_답장입력 후 상태이다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.첫번째 영역: 각각의 영역의 너비를 33%로 주었을 때, 세 영역이 나란히 놓인다.",
                  contribution: 10,
                },
                {
                  writer: "사용자2",
                  answer: "장문 답장이다.",
                  contribution: 10,
                },
                {
                  writer: "사용자3",
                  answer: "너무 잘했다.",
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
                  writer: "사용자1",
                  answer: "아주 탁월하다",
                  contribution: 10,
                },
                {
                  writer: "사용자3",
                  answer: "조사 x나 못함",
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
                  writer: "사용자2",
                  answer: "개발조사를 잘한다.",
                  contribution: 10,
                },
              ],
            },
          ],
        },
        {
          category: "팀워크",
          questions: [
            {
              question: "팀워크 능력은?",
              description: true,
              contribution: false,
              answers: [
                {
                  writer: "사용자2",
                  answer: "협업능력 뛰어남",
                  contribution: 10,
                },
                {
                  writer: "사용자3",
                  answer: "4번은 개인주의야!",
                  contribution: 10,
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const a = 10;
  const [keyword, setKeyword] = useState("");
  const [newList, setNewList] = useState();
  const [clickCheck, setClickCheck] = useState(false);

  //사용자 클릭시
  const onClick = (e) => {
    console.log(e.target.value);
    const clickWriter = data.filter(
      (data) =>
        (data.categories = data.categories.filter(
          (categories) =>
            (categories.questions = categories.questions.filter(
              (questions) =>
                (questions.answers = questions.answers.filter((answers) => {
                  if (answers.writer === e.target.value) {
                    return true;
                  } else {
                    return false;
                  }
                }))
            ))
        ))
    );
    setClickCheck(!clickCheck);
    setNewList(clickWriter);
  };

  //검색 문자열
  const handleChange = (e) => {
    setKeyword(e.target.value);
  };
  console.log(newList === undefined ? console.log("A") : console.log("B"));

  //검색 필터링 기능 댓글 or 사용자 기준으로 검색가능
  const serachFilter = data.filter(
    (data) =>
      (data.categories = data.categories.filter(
        (categories) =>
          (categories.questions = categories.questions.filter(
            (questions) =>
              (questions.answers = questions.answers.filter((answers) => {
                if (answers.answer.indexOf(keyword) !== -1 || answers.writer===keyword ) {
                  return true;
                } else {
                  return false;
                }
              }))
          ))
      ))
  );

  return (
    <>
      <div className="Assessment_container">
        <div className="Assessment">
          {/* 키워드 검색 컴포넌트 */}
          <Search onChange={handleChange} value={keyword}></Search>

          <div>
            {/* 카테고리 제목과 questions부분 map으로 하위컴포넌트로 전달 */}
            {serachFilter.map((data) =>
              data.categories.map((categories) => (
                <Categories
                  onClick={onClick}
                  categories={categories.category}
                  questions={categories.questions}
                ></Categories>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Assessment;
