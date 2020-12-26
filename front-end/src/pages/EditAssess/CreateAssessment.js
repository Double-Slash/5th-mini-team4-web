import React, { useState } from "react";
import Category from "../../components/Category/Category";
import "./CreateAssessment.css";

function CreateAssessment() {
  const [assessment, setAssessment] = useState([]);
  const [active, setActive] = useState(false);
  const [lists, setLists] = useState([
    {
      assessment: "테스트 에세스먼트",
      categories: [
        {
          category: "개발",
          questions: [
            {
              question: "개발이 괜찮나?",
              description: false,
              contribution: true,
            },
            {
              question: "개발이 괜찮나?",
              description: false,
              contribution: true,
            },
            {
              question: "개발이 괜찮나?",
              description: false,
              contribution: true,
            },
          ],
        },
        {
          category: "기획",
          questions: [
            {
              question: "기획이 괜찮나?",
              description: true,
              contribution: true,
            },
            {
              question: "기획이 괜찮나?",
              description: true,
              contribution: true,
            },
            {
              question: "기획이 괜찮나?",
              description: true,
              contribution: true,
            },
          ],
        },
        {
          category: "디자인",
          questions: [
            {
              question: "디자인이 괜찮나?",
              description: true,
              contribution: false,
            },
            {
              question: "디자인이 괜찮나?",
              description: true,
              contribution: false,
            },
            {
              question: "디자인이 괜찮나?",
              description: true,
              contribution: false,
            },
          ],
        },
      ],
    },
  ]);

  const onActiveClick = () => {
    setActive(!active);
  };

  const [inputs, setInputs] = useState({
    category: "",
    question: "",
  });
  const [descript, setDescript] = useState(false);
  const [contribute, setContribute] = useState(false);
  const { category, question } = inputs;
  //const [lists, setLists] = useState(categories)

  // 카테고리 삭제
  const onCategoryRemove = (id) => {
    const newList = lists.slice(0);
    newList.forEach((category, index) => {
      category.categories = category.categories.filter((categ, i) => i !== id);
    });
    setLists(newList);
  };

  // 카테고리 추가
  const onCategoryAdd = () => {
    const newList = lists.slice(0);
    newList.forEach((list) => {
      list.categories = list.categories.concat({
        category,
        questions: [],
      });
    });
    setLists(newList);
    setInputs({ category: "" });
  };

  // 카테고리 input 변경
  const onChangeTitle = (e) => {
    setInputs({ category: e.target.value });
  };

  // 질문 input 변경
  const onChangeQuestion = (e) => {
    setInputs({ question: e.target.value });
  };

  // 질문 추가
  const onQuestionAdd = (id) => {
    const newList = lists.slice(0);
    newList[0].categories.forEach((category, index) => {
      console.log("test", category);
      if (index === id) {
        category.questions = category.questions.concat({
          question,
          description: descript,
          contribution: contribute,
        });
      }
    });
    setLists(newList);
    setDescript(false);
    setContribute(false);
    setInputs({ question: "" });
  };

  // 질문 삭제
  const onQuestionRemove = (id, ind) => {
    const newList = lists.slice(0);
    newList[0].categories.forEach((category, index) => {
      if (index === id) {
        category.questions = category.questions.filter(
          (question, i) => i !== ind
        );
      }
    });
    setLists(newList);
  };

  // 서술형 체크
  const onDescriptChange = (e) => {
    setDescript(!descript);
  };

  // 점수형 체크
  const onContributeChange = (e) => {
    setContribute(!contribute);
  };

  return (
    console.log(lists),
      <>
        <div className="title-wrapper">
          <div className="title">{lists[0]?.assessment}</div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Category
              categories={lists[0]?.categories}
              inputs={inputs}
              setInputs={setInputs}
              lists={lists}
              setLists={setLists}
              descript={descript}
              setDescript={setDescript}
              contribute={contribute}
              setContribute={setContribute}
              onCategoryRemove={onCategoryRemove}
              onCategoryAdd={onCategoryAdd}
              onChangeTitle={onChangeTitle}
              onChangeQuestion={onChangeQuestion}
              onQuestionAdd={onQuestionAdd}
              onQuestionRemove={onQuestionRemove}
              onDescriptChange={onDescriptChange}
              onContributeChange={onContributeChange}
            />
          </div>
        </div>
        </div>
      </>
    )
  );
}

function PrevAssessment() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: 232,
        height: 48,
        padding: "11px 8px 13px 16px",
      }}
    >
      <div>2018.04.12</div>
      <div>004</div>
    </div>
  );
}

export default CreateAssessment;
