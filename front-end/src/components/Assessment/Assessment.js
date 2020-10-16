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

  const [list, setList] = useState(null);
  const [check, setCheck] = useState([]);
  const [keyword, setKeyword] = useState("");

  const onClick = (e) => {
    setList([]);
    data.map((data) =>
      data.categories.map((categories) =>
        categories.questions.map((questions) =>
          questions.answers.map((answers) => {
            if (answers.writer === e.target.value) {
              setList({ ...list, answers });
            }
            // const test = answers.filter(answers => answers.writer === e.target.value);
            // setList({...list, test});
          })
        )
      )
    );
  };

  const handleChange = (e) => {
    setKeyword(e.target.value);
  };

  // const filter = data.map((data)=>(
  //   data.categories.map((categories) => (
  //     categories.questions.map((questions)=>(
  //       questions.answers.map((answers)=>{
  //         answers.filter(answers => answers.answer.indexof(keyword) !== -1)
  //       })
  //     ))
  //   ))
  // ))

  // const Arraylist = [
  //   {
  //     name: "박",
  //     test: [
  //       {
  //         age: "20살",
  //       },
  //       {
  //         age: "21살",
  //       },
  //     ],
  //   },
  //   {
  //     name: "김",
  //     test: [
  //       {
  //         age: "22살",
  //       },
  //       {
  //         age: "23살",
  //       },
  //     ],
  //   },
  // ];

  const [le, setLe] = useState();
  const filter1 = data.filter((data) =>
    data.categories.filter((categories) =>
      categories.questions.filter((questions) =>
        questions.answers.filter(
          (answers) => answers.writer===keyword ? setLe({...le, answers}) : console.log("아니다")  
        )
      )
    )
  );

  
  console.log(le);
  //const filter1 = data.filter(data=> data.categories.indexOf(keyword) !== -1 )
  
  //const filterList = data.filter( data => data.categories.questions.answers.answer.indexOf(keyword) !== -1 ? le = {...data, q});

  // let a;
  // const Array1 = Arraylist.filter((Array) => 
  //   Array.test.filter((test) => test.age === "21살" ? a=Array : console.log("아니다"))
  // );
  // console.log(a);
  return (
    <>
      <div className="Assessment_container">
        <div className="Assessment">
          <Search onChange={handleChange} value={keyword}></Search>

          <div>
            {filter1.map((data) =>
              data.categories.map((categories) => (
                <Categories
                  onClick={onClick}
                  categories={categories.category}
                  questions={categories.questions}
                  list={list}
                ></Categories>
              ))
            )}
          </div>

          {/* {data.map((data)=>(
      data.categories.map((categories) => (
        categories.questions.map((questions)=>(
          questions.answers.map((answers)=>{
            if(answers.writer === e.target.value){
              setList({...list, answers})
            }
            // const test = answers.filter(answers => answers.writer === e.target.value);
            // setList({...list, test});  
          })
            
        ))
      ))
    ))} */}
        </div>
      </div>
    </>
  );
};

export default Assessment;
