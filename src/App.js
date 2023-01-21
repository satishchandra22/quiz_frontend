
import { useState } from 'react';
import './App.css';
import Question from './components/Question';

function App() {
  const [evalans, setEval] = useState(false);
  const [darkmode ,setDarkmode] = useState(false);
  
  function h1(){
      setEval(true)
  }
  function h2(){
    setEval(false);
   let ele = document.getElementsByClassName('r');
    for(let i=0;i<ele.length;i++){
      ele[i].checked = false;
    }
  }
function h3(){
  setDarkmode(!darkmode);
  if(darkmode){
    document.getElementsByTagName('body')[0].style.backgroundColor='black';
    let ele = document.getElementsByClassName('q');
    for(let i=0;i<ele.length;i++){
      ele[i].style.color='white';
    }
      
  }else{
    document.getElementsByTagName('body')[0].style.backgroundColor='white';
    let ele = document.getElementsByClassName('q');
    for(let i=0;i<ele.length;i++){
      ele[i].style.color='black';
    }
  }
}

  return (
    <div className="App" id='app'>
      <Question evaluate={evalans} num={'1'} ques={'What is capital of India ?'} op1={'Hyderabd'} op2={'Delhi'} op3={'Lucknow'} op4={'Ahmadabad'} cans={'Delhi'}/>
      <Question evaluate={evalans} num={'2'} ques={'What is capital of Japan ?'} op1={'Kyoto'} op2={'Tokyo'} op3={'Bhutan'} op4={'Vietnam'} cans={'Tokyo'}/>
      <Question evaluate={evalans} num={'3'} ques={'What is capital of Russia ?'} op1={'Beijing'} op2={'Washington'} op3={'Myanmar'} op4={'Moscow'} cans={'Moscow'}/>
      <div id='b'>
      <button onClick={h1} className='button'>Submit</button>
      <button onClick={h2}  className='button'>reset</button>
      <button onClick={h3}  className='button'>darkmode</button>
      </div>
    </div>
  );
}

export default App;
