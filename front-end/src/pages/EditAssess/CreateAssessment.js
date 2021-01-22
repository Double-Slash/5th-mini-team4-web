import React, { useState } from "react";
import Category from "../../components/Category/Category";
import "./CreateAssessment.css";
import { SendAltFilled16, View16 } from "@carbon/icons-react";

function CreateAssessment() {
  const [list, setList] = useState({
    categories: [
      {
        category: "개발",
        questions: [
          {
            question: "개발이 괜찮나?",
            questionType: "",
          },
          {
            question: {
              title: "개발이 괜찮나?",
              answers: [
                {
                  type: "short",
                },
                {
                  type: "number",
                },
              ],
            },
          },
        ],
      },
      {
        category: "기획",
        questions: [
          {
            question: "개발이 괜찮나?",
            questionType: "",
          },
        ],
      },
      {
        category: "디자인",
        questions: [
          {
            question: "개발이 괜찮나?",
            questionType: "",
          },
        ],
      },
    ],
  });

  const [inputs, setInputs] = useState({
    title: "",
    category: "",
    question: "",
  });

  const { title, category, question } = inputs;

  const onChangeTitle = (e) => {
    setInputs({ question: e.target.value });
  };

  // 카테고리 삭제
  const onCategoryRemove = (id) => {
    const categories = list.categories.filter((category, i) => i !== id);
    setList({ categories });
  };

  // 카테고리 추가
  const onCategoryAdd = () => {
    list.categories = list.categories.concat({
      category,
      questions: [],
    });
    setList(list);
    setInputs({ category: "" });
  };

  // 카테고리 input 변경
  const onChangeCategoryName = (e) => {
    setInputs({ category: e.target.value });
  };

  // 질문 input 변경
  const onChangeQuestion = (e) => {
    setInputs({ question: e.target.value });
  };

  // 질문 추가
  const onQuestionAdd = (id, question) => {
    list.categories.forEach((category, index) => {
      if (index === id) {
        category.questions = category.questions.concat({
          question: question,
        });
      }
    });
    setList(list);
    setInputs({ question: "" });
  };

  const onQuestionTypeChange = (id, questionType) => {
    list.categories.forEach((category, index) => {
      if (index === id) {
        category.questions[id].questionType = questionType;
      }
    });
    setList(list);
    setInputs({ question: "" });
    console.log(list);
  };

  // 질문 삭제
  const onQuestionRemove = (id, ind) => {
    list.categories.forEach((category, index) => {
      if (index === id) {
        category.questions = category.questions.filter(
          (question, i) => i !== ind
        );
      }
    });
    setList(list);
    setInputs({ question: "" });
  };

  const onSubmitAssessment = () => {
    console.log({
      title: title,
      lists: list,
    });
  };

  return (
    <div className="assessment-create-container">
      <div className="title-wrapper">
        <input
          type="text"
          onChange={onChangeTitle}
          placeholder="평가 제목을 입력해주세요."
          className="title"
        />
      </div>
      <div className="category-container">
        <Category
          inputs={inputs}
          setInputs={setInputs}
          lists={list}
          onCategoryRemove={onCategoryRemove}
          onCategoryAdd={onCategoryAdd}
          onChangeTitle={onChangeCategoryName}
          onChangeQuestion={onChangeQuestion}
          onQuestionAdd={onQuestionAdd}
          onQuestionRemove={onQuestionRemove}
          onQuestionTypeChange={onQuestionTypeChange}
        />
      </div>

      <div className="button-container">
        <div className="show-button-wrapper">
          <button onClick={onSubmitAssessment}>미리보기</button>
          <View16 />
        </div>
        <div className="next-button-wrapper">
          <button onClick={onSubmitAssessment}>다음 단계</button>
          <SendAltFilled16 />
        </div>
      </div>
    </div>
  );
}

export default CreateAssessment;
