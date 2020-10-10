import React, { useState } from 'react';
import '../../css/Category.css'
import add from '../../images/add.svg'
import chevrondown from '../../images/chevrondown.svg'
import chevronup from '../../images/chevronup.svg'
import caretup from '../../images/caretup.svg'
import caretdown from '../../images/caretdown.svg'
import close from '../../images/close.svg'
import test from '../../images/test.svg'

function Category () {
  const [input, setInput] = useState('')
  // const [active, setActive] = useState({
  //   accordion: false,
  //   addActive: true
  // })

  const [lists, setLists] = useState([
    {
      id: 1,
      category: 'test1',
      question: [
        {
          qeustion: 'ttttt',
          description: false,
          contribution: false,
        },
        {
          qeustion: 'oooooo',
          description: false,
          contribution: false,
        },
        {
          qeustion: 'xxxxxx',
          description: false,
          contribution: false,
        },
      ]
    },
    {
      id: 2,
      category: 'test2',
      question: [
        {
          qeustion: 'ttttt',
          description: false,
          contribution: false,
        },
        {
          qeustion: 'oooooo',
          description: false,
          contribution: false,
        },
        {
          qeustion: 'xxxxxx',
          description: false,
          contribution: false,
        },
      ]
    },
    {
      id: 3,
      category: 'test3',
      question: [
        {
          qeustion: 'ttttt',
          description: false,
          contribution: false,
        },
        {
          qeustion: 'oooooo',
          description: false,
          contribution: false,
        },
        {
          qeustion: 'xxxxxx',
          description: false,
          contribution: false,
        },
      ]
    }
  ])

  const onCategoryRemove = (id) => {
    //console.log(id);
    //console.log(lists.filter((list,index) => index !== id))
    setLists(lists.filter((list,index) => index !== id));
  }
  const onCategoryAdd = () => {
    const list = {
      category: input,
      question: []
    }
    setLists([...lists, list]);
    setInput('');
  }

  const onChangeTitle = (e) => {
    setInput(e.target.value);
  }

  return (
    <>
      {
        lists?.map((list,index) => {
          return(
            <CategoryList 
              key={index}
              list={list} 
              index={index}
              onCategoryRemove={onCategoryRemove}
            />
          )
        })
      }

      <CategoryInput 
        input={input}
        setInput={setInput}
        onChangeTitle={onChangeTitle}
        onCategoryAdd={onCategoryAdd}
      />
    </>
  );
}

function CategoryInput({ input, setInput, onChangeTitle, onCategoryAdd}) {
  //const [input, setInput] = useState('')
  const [active, setActive] = useState({
    accordion: false,
    addActive: true
  })

  const { accordion, addActive } = active
  
  // const onChangeTitle = (e) => {
  //   setInput(e.target.value);
  // }
  return(
    <>
      <div className='container'>
        <div>
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

          <div onClick={() => setActive({ accordion: !accordion})}>
            <img alt='accordion' src={ accordion ? chevronup : chevrondown} />
          </div>

          <div className='spacer'/>
          
          <div onClick={onCategoryAdd}>
            <img alt='activeCategory' src={add} />
          </div>
        </div>
      </div>

      <div className={ accordion ? 'category-open' : 'category-close'}>
        render Items 
      </div>
    </>
  )
}

function CategoryList({ list, index, onCategoryRemove }) {
  const [accordion, setAccordion] = useState(false);
  const [active, setActive] = useState(false);

  return(
    console.log(index),
    <>
      <div className='container'>
        <div>
          <div>{list.category}</div>
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
        render Items 
        <img src={test} />
      </div>
    </>
  )
}


export default Category;