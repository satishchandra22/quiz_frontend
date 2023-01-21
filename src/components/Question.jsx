import React from 'react'
import { useState } from 'react'

function Question(p) {
    const [answer , setAnswer] = useState('');
    function myfun(e){
       setAnswer(e.target.value);
    }
    function evalAnswer(){
        if(answer===p.cans){
            return(
                <>
                <div>{answer} is the correct answer</div>
                </>
            )
        }
       return(
        <>
           <div>{answer} is the wrong answer</div>
           <div>correct answer is {p.cans}</div>
        </>
       )
    }
  return (
    <div className='q' id='qe'>
        <div>
            Question {p.num}
        </div>
        
        <div>
            <h3>{p.ques}</h3>
            {(p.evaluate) && 
         evalAnswer()}
           {
            (!p.eavluate) && (
               <>
               <input type="radio" name={p.num} value={p.op1} id={p.num+'c1'} onClick={myfun} className='r'/>
            <label htmlFor={p.num+'c1'}>{p.op1}</label>
            <br />
            <input type="radio" name={p.num} value={p.op2} id={p.num+'c2'} onClick={myfun} className='r'/>
            <label htmlFor={p.num+'c2'}>{p.op2}</label>
            <br />
            <input type="radio" name={p.num} value={p.op3} id={p.num+'c3'} onClick={myfun} className='r'/>
            <label htmlFor={p.num+'c3'}>{p.op3}</label>
            <br />
            <input type="radio" name={p.num} value={p.op4} id={p.num+'c4'} onClick={myfun} className='r'/>
            <label htmlFor={p.num+'c4'}>{p.op4}</label>
            <br />
               </>
            )
           }
            
        </div>
    </div>
  )
}

export default Question
