import React, { useState } from 'react';
import '../../css/Category.css'
import Question from '../Question/Question'
// image
import {Add32, ChevronDown32, ChevronUp32, Close32} from "@carbon/icons-react";
import add from '../../images/add.svg'
import chevrondown from '../../images/chevrondown.svg'
import chevronup from '../../images/chevronup.svg'
import caretup from '../../images/caretup.svg'
import caretdown from '../../images/caretdown.svg'

function Category ({
  categories,
  inputs,
  setInputs,
  lists,
  setLists,
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

  return (
    <>
      {
        categories?.map((list,index) => {
          return(
            <CategoryList 
              key={index}
              list={list} 
              index={index}
              lists={lists}
              setLists={setLists}
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
      <div className='category-wrapper'>
        <div className='category-label'>
          <input 
            value={input}
            onChange={onChangeTitle}
            className='category-input'
            type='text' 
            placeholder="하고 싶은 질문의 카테고리를 입력하세요."/>
        </div>
        <div className='category-right add-only'>
          <div className="category-button" onClick={onCategoryAdd}>
            <Add32 />
          </div>
        </div>
      </div>
    </>
  )
}

function CategoryList({ 
    list, 
    index,
    lists,
    setLists,
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
    <div className="category-container">
      <div className='category-wrapper'>
          <div className='category-label'>{list.category}</div>
        <div className='category-right'>
          <div className="category-button" onClick={() => setAccordion(!accordion)}>
              {accordion ? <ChevronUp32/> : <ChevronDown32/>}
          </div>
          <div className="category-button" onClick={() => onCategoryRemove(index)}>
            <Close32 />
          </div>
        </div>
      </div>

      <div className={ accordion ? 'category-open' : 'category-close'}>
        <Question 
          questions={list.questions}
          lists={lists}
          setLists={setLists}
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
    </div>
  )
}


export default Category;