
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
  let[글제목, 글제목변경] = useState(['남자코트 추천','여자코트 추천','가어린이 코트 추천' ]);
  
  let [따봉, 따봉변경]= useState([0,0,0]);
  let [openModal, setOpenModal] = useState(true);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState("");

  

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
                <h4 className='list_title' onClick={()=>{{setOpenModal(false)}; setTitle(i) }}
                >{글제목[i]} 
                <span onClick={(e) => {
                  e.stopPropagation();  //이벤트 버블링 방지
                  let 따봉카피 = [...따봉]; //따봉카피라는 변수를 만들어 따봉을 깊은복사한다
                  따봉카피[i] = 따봉카피[i] +1; //버튼이 클릭되었을때 따봉카피배열에 1을 더한다
                  따봉변경(따봉카피); //set에 변경된 따봉카피를저장한다
                } }>👍</span> {따봉[i]}</h4>
                <p>2월 17일 발행</p>
                <button onClick={()=>{
                  let delCopy = [...글제목]; //글제목배열 깊은복사
                  delCopy.splice(i,1); //splice(수정할 배열 요소의 인덱스, 삭제할 요소 개수, 추가될 요소)
                  글제목변경(delCopy); //변경내역 저장
                }
                }
                >삭제</button>
            </div>
          )
         })
      }

      {/* <button onClick={()=>{ setTitle(0)}}>글제목0</button>
      <button onClick={()=>{ setTitle(1)}}>글제목1</button>
      <button onClick={()=>{ setTitle(2)}}>글제목2</button>
      
      <button onClick={()=>setOpenModal(!openModal)}>모달</button> */}

      <input onChange={(e)=> { 
        // console.log(e.target.value) 
        입력값변경(e.target.value);  //input에 value를 입력값변경에 저장
        console.log(입력값);
        }} />

      <button onClick={()=>{
        let addCopy = [...글제목];  //배열깊은 복사
        addCopy.push(입력값);       //배열에 입력값 추가
        글제목변경(addCopy);         //저장
      }}>
        추가버튼
      </button>    
        

      {
        openModal == 0 ? <Modal title변경={title} 글제목변경props={글제목변경} 글제목props={글제목} color="yellow"/> : null/*1. openmodal이 0이면 보여주기 아니면 null처리
                                                                                                        2. modal컴포넌트에 props전달 */
      }

    </div>
  );
}

function Modal(props){
  return (
    <div className='modal' style={{background : props.color}}>
    <h4>{props.글제목props[props.title변경]}</h4>
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
