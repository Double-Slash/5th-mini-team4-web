import React from "react";
import "../../css/Sharing.css";
import { Search32 } from "@carbon/icons-react";
import { Settings32 } from "@carbon/icons-react";
import Sharing_Category from "./Sharing_Category";
const Sharing = () => {
  const data = [
    {
      categories: [
        {
          id: 1,
          category: "2020 2학년 1학기 서베이방법론",

          answers: [
            {
              name: "박미소",
              mail: "miso1006@ewhain.net",
            },
            {
              name: "박민수",
              mail: "miso1006@ewhain.net",
            },
            {
              name: "이희진",
              mail: "miso1006@ewhain.net",
            },
            {
              name: "박미소",
              mail: "miso1006@ewhain.net",
            },
            {
              name: "박미소",
              mail: "miso1006@ewhain.net",
            },
          ],
        },
        {
          id: 2,
          category: "2020 2학년 1학기 미디어콘텐츠 제작론",

          answers: [
            {
              name: "박민수",
              mail: "miso1006@ewhain.net",
            },
            {
              name: "박민수",
              mail: "miso1006@ewhain.net",
            },
            {
              name: "박민수",
              mail: "miso1006@ewhain.net",
            },
            {
              name: "박미소",
              mail: "miso1006@ewhain.net",
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div className="sharing_container">
        <h2>공유용</h2>
        <h3 className="sharing_subtitle">공유문서로 주고받는 설문</h3>

        <div className="sharing_component1">
          {/* <div className="sharing_make"></div> */}

          <div className="sharing_component1_icon">
            <Search32 className="sharing_icon" />
            <Settings32 className="sharing_icon" />
          </div>
        </div>

        <div>
          <div className="sharing_contitle">
            <div>제목</div>
            <div>응답비율</div>
            <div>날짜</div>
          </div>

          {data.map((data) =>
            data.categories.map((categories) => (
              <div>
                <Sharing_Category
                  category={categories.category}
                  answers={categories.answers}
                ></Sharing_Category>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
export default Sharing;
