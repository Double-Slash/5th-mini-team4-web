import React, { useState } from 'react';
import '../../css/Category.css'
import Question from '../Question/Question'
// image
import add from '../../images/add.svg'
import chevrondown from '../../images/chevrondown.svg'
import chevronup from '../../images/chevronup.svg'
import caretup from '../../images/caretup.svg'
import caretdown from '../../images/caretdown.svg'
import close from '../../images/close.svg'

function Category ({
  categories,
  inputs,
  setInputs,
  descript,
  setDescript,
  contribute,
  setContribute,
  onCategoryRemove,
  onCategoryAdd,
  onChangeTitle,
  onChangeQuestion,
  onQuestionAdd,
  onQuestionRemove,
  onDescriptChange,
  onContributeChange
}) {
  // const [inputs, setInputs] = useState({
  //   category: '',
  //   question: ''
  // })
  // const [descript, setDescript]=useState(false);
  // const [contribute, setContribute]=useState(false);
  // const { category, question } = inputs
  // const [lists, setLists] = useState(categories)

  // // 카테고리 삭제 
  // const onCategoryRemove = (id) => {
  //   setLists(lists.filter((list,index) => index !== id));
  // }

  // // 카테고리 추가
  // const onCategoryAdd = () => {
  //   const list = {
  //     category,
  //     questions: []
  //   }
  //   setLists([...lists, list]);
  //   setInputs({ category: '' });
  // }
  
  // // 카테고리 input 변경
  // const onChangeTitle = (e) => {
  //   setInputs({ category: e.target.value });
  // }

  // // 질문 input 변경
  // const onChangeQuestion = (e) => {
  //   setInputs({ question: e.target.value });
  // }

  // // 질문 추가
  // const onQuestionAdd = (id) =>{
  //   const list = lists.map((list,index) => {
  //     return(
  //       index === id ? {
  //         ...list, 
  //         questions: list.questions.concat({
  //           question,
  //           description: descript,
  //           contribution: contribute,
  //         })
  //       }: list
  //     )
  //   })
  //   setLists(list);
  //   setDescript(false);
  //   setContribute(false);
  //   setInputs({ question: '' });

  // }

  // const onQuestionRemove = (id, index) => {
  //   console.log('remove', id, index);
  //   const newList = lists.slice(0);
  //   newList.forEach((category,index) => {
  //     if(index === id) {
  //       category.questions = category.questions.filter((question, i) => i !== index)
  //     }
  //   });
  //   setLists(newList);
  // }

  // // 서술형 체크
  // const onDescriptChange = (e) => {
  //   setDescript(!descript)
  // }
  
  // // 점수형 체크
  // const onContributeChange = (e) =>{
  //   setContribute(!contribute)
  // }


  return (
    console.log(inputs),
    <>
      {
        categories?.map((list,index) => {
          return(
            <CategoryList 
              key={index}
              list={list} 
              index={index}
              question={inputs.question}
              descript={descript}
              contribute={contribute}
              onQuestionAdd={onQuestionAdd}
              onQuestionRemove={onQuestionRemove}
              onCategoryRemove={onCategoryRemove}
              onChangeQuestion={onChangeQuestion}
              onDescriptChange={onDescriptChange}
              onContributeChange={onContributeChange}
            />
          )
        })
      }

      <CategoryInput 
        input={inputs.category}
        setInputs={setInputs}
        onChangeTitle={onChangeTitle}
        onCategoryAdd={onCategoryAdd}
      />
    </>
  );
}

function CategoryInput({ 
    input, 
    setInputs, 
    onChangeTitle, 
    onCategoryAdd,}) {
  //const [input, setInput] = useState('')
  const [accordion, setAccordion] = useState(false);
  
  return(
    <>
      <div className='container'>
        <div className='category-flex'>
          <input 
            value={input}
            onChange={onChangeTitle}
            className='category-input'
            type='text' 
            placeholder="하고 싶은 질문의 카테고리를 입력하세요."/>
        </div>
        <div className='category-right '>
          <div className='cateogry-icon'>
            <img alt='caretup' src={caretup} />
            <img alt='caretdown' src={caretdown} />
          </div>

          <div className='spacer'/>

          <div onClick={() => setAccordion(!accordion)}>
            <img alt='accordion' src={ accordion ? chevronup : chevrondown} />
          </div>

          <div className='spacer'/>
          
          <div onClick={onCategoryAdd}>
            <img alt='activeCategory' src={add} />
          </div>
        </div>
      </div>

      <div className={ accordion ? 'category-open' : 'category-close'}>
        <Question /> 
      </div>
    </>
  )
}

function CategoryList({ 
    list, 
    index,
    question, 
    descript,
    contribute,
    onCategoryRemove,
    onChangeQuestion,
    onDescriptChange,
    onContributeChange,
    onQuestionAdd,
    onQuestionRemove }) {
  const [accordion, setAccordion] = useState(false);
  return(
    <>
      <div className='container'>
        <div className='category-flex'>
          <div className='category-label'>{list.category}</div>
        </div>
        <div className='category-right '>
          <div className='cateogry-icon'>
            <img alt='caretup' src={caretup} />
            <img alt='caretdown' src={caretdown} />
          </div>

          <div className='spacer'/>

          <div onClick={() => setAccordion(!accordion)}>
            <img alt='accordion' src={ accordion ? chevronup : chevrondown} />
          </div>

          <div className='spacer'/>
          
          <div onClick={() => onCategoryRemove(index)}>
            <img alt='activeCategory' src={close} />
          </div>
        </div>
      </div>

      <div className={ accordion ? 'category-open' : 'category-close'}>
        <Question 
          questions={list.questions}
          question={question}
          descript={descript}
          contribute={contribute}
          onChangeQuestion={onChangeQuestion}
          onDescriptChange={onDescriptChange}
          onContributeChange={onContributeChange}
          onQuestionAdd={onQuestionAdd}
          index={index}
          onQuestionRemove={onQuestionRemove}
          />
      </div>
    </>
  )
}


export default Category;