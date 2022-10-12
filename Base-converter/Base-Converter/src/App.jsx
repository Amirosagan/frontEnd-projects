import { useLayoutEffect, useRef, useState } from 'react'
import './styles/App.scss'
import Inputs from './components/Inputs'
import Buttons from './components/Buttons'
import baseConvert from './js/converterFun'


const valided = ["0", "1","2","3","4","5","6","7","8","9","A","B" , "C" , "D" , "E" ,"F"]


function App() {
  const formRef = useRef();

  const numberRef = useRef();
  const fromRef = useRef();
  const toRef = useRef();

  const calcRef = useRef();
  const resetRef = useRef();

  const outputRef = useRef();

  const [isvalid , setIsvalid] =useState();
  useLayoutEffect(()=>{
    formRef.current.addEventListener("submit" , (eve)=>{
      const fromBase = +fromRef.current.options[fromRef.current.selectedIndex].value;
      const toBase = +toRef.current.options[toRef.current.selectedIndex].value;
      if(validing(numberRef.current)){
        const output = baseConvert(fromBase , toBase , numberRef.current.value);
        outputRef.current.value = output;
        setIsvalid(true);
        
      }else{
        setIsvalid(false);
      }
      eve.preventDefault();
    })
  }, []);

  const validing = (DOMEle)=> {
    var s = DOMEle.value;
    for (let i = 0; i < s.length; i++) {
      const ele = s[i];
      const d = valided.indexOf(ele);
      const fromBase = +fromRef.current.options[fromRef.current.selectedIndex].value;
      if((d == -1 || d >= fromBase) && ele != "."){
        return 0;
      }

    }
    return 1;
  }

  const copyOutput = (DOMEle)=>{
    DOMEle.select();
    DOMEle.setSelectionRange(0 , 99999);

    navigator.clipboard.writeText(DOMEle.value).catch((error)=>{
      console.error("some error with copy");
    });
  }
  
  return (
    <div className="App">
      {isvalid == false && <span className='wrong'> wrong Input</span>}
      <form autoComplete='off' ref={formRef}>
        <Inputs to={toRef} from={fromRef} num={numberRef} />
        <Buttons calc={calcRef} reset={resetRef} />
      </form>
      <div className="outputs" id="outputs">
        <textarea name="answer" id="output" cols="30" rows="10" ref={outputRef} readOnly={true}></textarea>
        <button id='copy' onClick={()=>{
          copyOutput(outputRef.current);
        }}>Copy</button>
      </div>
    </div>
  )
}

export default App
