
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
  let[글제목, 글제목변경] = useState([ '남자코트 추천','여자코트 추천','가어린이 코트 추천' ]);
  
  let [따봉, 따봉변경]= useState([0,0,0]);
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

        글제목변경(copy);
      }}>글수정</button>

      <button onClick={() => {
        let change = [...글제목];
        change.sort();
        글제목변경(change);
      }}>
        수정버튼
      </button>         
      
      {
         글제목.map(function(a,i){
          return(
            <div className='list' key={i}>  
                <h4>{글제목[i]} <span onClick={() => {
                  let 따봉카피 = [...따봉]; //따봉카피라는 변수를 만들어 따봉을 깊은복사한다
                  따봉카피[i] = 따봉카피[i] +1; //버튼이 클릭되었을때 따봉카피배열에 1을 더한다
                  따봉변경(따봉카피) //set에 변경된 따봉카피를저장한다
                } }>👍</span> {따봉[i]}</h4>
                <p>2월 17일 발행</p>
            </div>
          )
         })
      }
      
      <button onClick={()=>setOpenModal(!openModal)}>모달</button>

      {
        openModal == 0 ? <Modal 글제목변경props={글제목변경} 글제목props={글제목} color="yellow"/> : null/*1. openmodal이 0이면 보여주기 아니면 null처리
                                                                                                        2. modal컴포넌트에 props전달 */
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
    <h4>{props.글제목props[0]}</h4>
    <p>날짜</p>
    <p>상세내용</p>
    <button onClick={()=> {
      let 글수정변경 = [...props.글제목props];
      글수정변경[0] = "할머니코트 추천";
      props.글제목변경props(글수정변경);
      
    }}>글수정</button>
</div>
  )
}

export default App;
