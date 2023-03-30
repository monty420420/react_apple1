import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  let post = '강남 우동 맛집';
  // document.querySelector('h4').innerHTML = post;
  //1
  // let[글제목1, 글제목a] = useState('남자코트 추천');
  // let[글제목2,글제목b] = useState('여자코트 추천');
  // let[글제목3,글제목c] = useState('어린이코트 추천');
  //2
  let[글제목, 글제목이다] = useState([ '남자코트 추천','여자코트 추천','가어린이 코트 추천' ]);
  
  let [따봉, 따봉변경]= useState(0);
  let [openModal, setOpenModal] = useState(0);

  //console.log(따봉);

  // function 함수(){
  //   // console.log(1);
  // }
  
  
    

  

  return (
    <div className="App">
      <div className='black-nav'>
             <h4 style={ {color : 'red', fontsize : '16px'} }>
              blog
            </h4>
      </div>

      <button onClick={()=> {
        let copy = [...글제목];
        copy[0] = '노인코트 추천';
        copy[1] = '할머니 코트';

        글제목이다(copy);
      }}>글수정</button>

      <button onClick={() => {
        let change = [...글제목];
        change.sort();
        글제목이다(change);
      }}>
        수정버튼
      </button>
         
      <div className='list'>
      <h4>{글제목[0]} <span onClick={() => 따봉변경(따봉+1) }>👍</span> {따봉} </h4>
      <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[1]}</h4>
      <p>2월 17일 발행</p>
      </div>
      <div className='list'>
      <h4>{글제목[2]}</h4>
      <p>2월 17일 발행</p>
      </div>
      
      <button onClick={()=>setOpenModal(!openModal)}>모달</button>

      {
        openModal == 0 ? <Modal/> : null
      }


    </div>
  );
}

function Modal(){
  return (
    <div className='modal'>
    <h4>제목</h4>
    <p>날짜</p>
    <p>상세내용</p>
</div>
  )
}

export default App;
