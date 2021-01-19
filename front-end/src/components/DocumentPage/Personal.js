import React from "react";
import "../../css/Personal.css";
import Personal_Category from "./Personal_Category";
import { DocumentAdd32 } from "@carbon/icons-react";
import { Search32 } from "@carbon/icons-react";
import { Settings32 } from "@carbon/icons-react";
import { Link } from "react-router-dom";
const Personal = () => {
  const data = [
    {
      categories: [
        {
          id: 1,
          category: "2020 2학년 1학기 서베이방법론",
          date: "2020.10.1",
          questions: [
            {
              question: "개념화를 어떻게 했는가?",
              answers: [
                {
                  answer:
                    "한 질문에 응답 2개를 북마크 저장했다. 응답자 8명 중 2개가 유용하다고 생각한 상황이다.",
                },
                {
                  answer: "저장 누른 순이고 드래그로 변경 가능",
                },
              ],
            },

            {
              question: "조직적 정의의 품질?",
              answers: [
                {
                  answer: "대분류는 같다",
                },
              ],
            },
          ],
        },

        {
          id: 2,
          category: "2020 2학년 1학기 미디어콘텐츠 제작론",
          date: "2020.08.1",
          questions: [
            {
              question: "해당 성적은?",
              answers: [
                {
                  answer: "에이쁠",
                },
              ],
            },

            {
              question: "교수 강의는?",
              answers: [
                {
                  answer: "아주 좋다",
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  return (
    <>
      <div className="personal_container">
        <h2>개인용</h2>
        <h3 className="personal_subtitle">개인적으로 주고받는 설문</h3>

        <div className="personal_component1">
          <Link to="/createassessment">
            <button className="personal_make">
              <div className="personal_make_text">
                만들기 <DocumentAdd32 />
              </div>
            </button>
          </Link>
          <div className="personal_component1_icon">
            <Search32 className="personal_icon" />
            <Settings32 className="personal_icon" />
          </div>
        </div>

        <div>
          <div className="personal_contitle">
            <div className="personal_contitle_title1">제목</div>
            <div className="personal_contitle_title">응답비율</div>
            <div className="personal_contitle_title">날짜</div>
          </div>

          {data.map((data) =>
            data.categories.map((categories) => (
              <div>
                <Personal_Category
                  category={categories.category}
                  date={categories.date}
                  questions={categories.questions}
                ></Personal_Category>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Personal;
