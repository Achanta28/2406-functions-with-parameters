import React, { useRef } from 'react'

function TenthMarksSheet() {
    let firstNameInputRef= useRef();
    let lastNameInputRef= useRef();
    let teltInputRef= useRef();
    let engtInputRef= useRef();
    let hintInputRef= useRef();
    let mathsInputRef= useRef();
    let sciInputRef= useRef();
    let socInputRef= useRef();
    let firstNameResultRef = useRef();
    let lastNameResultRef = useRef();
    let telResultRef = useRef();
    let engResultRef = useRef();
    let hinResultRef = useRef();
    let mathsResultRef = useRef();
    let sciResultRef = useRef();
    let socResultRef = useRef();
    let resultParaRef =useRef();

   let calculateResult =()=>{
    let firstNameMarks = firstNameInputRef.current.value;
                 let lastNameMarks = lastNameInputRef.current.value;
                 let telMarks = Number(teltInputRef.current.value);
                 let hinMarks = Number(hintInputRef.current.value);
                 let engMarks = Number(engtInputRef.current.value);
                 let mathsMarks = Number(mathsInputRef.current.value);
                 let sciMarks =Number(sciInputRef.current.value);
                 let socMarks = Number(socInputRef.current.value);
 
                 let totalMarks =telMarks+hinMarks
                 +engMarks+mathsMarks+sciMarks+socMarks;
                 let result;
 
                 if(telMarks < 35|| hinMarks < 35 || engMarks < 35 ||mathsMarks<35||sciMarks<35||socMarks<35){
                     result ="Failed";
 
                 }else{
                     result="Passed";
                 }
               
                 resultParaRef.current.innerHTML=`${firstNameMarks} ${lastNameMarks} ${result}in tenth got total marks of    ${totalMarks} `;

   }


   //onFocus
   let inputOnFocus = (inputRef) =>{
    inputRef.current.style.backgroundColor="aqua";
   }
   //onChange
   let inputOnChange = (inputRef,resultSpanRef) =>{
    if(inputRef.current.value >=0 && 
        inputRef.current.value<=100){
            if(inputRef.current.value >= 35 ){
                resultSpanRef.current.innerHTML="pass";
                resultSpanRef.current.style.backgroundColor="green";

            }else{
                resultSpanRef.current.innerHTML="Fail";
                resultSpanRef.current.style.backgroundColor="red";

            }

    }else{
        resultSpanRef.current.innerHTML="Invalid";
        resultSpanRef.current.style.backgroundColor="Purple";

    }


   }

    //onBlur
    let inputOnBlur = (inputRef) => {
        inputRef.current.style.backgroundColor="";
    }
  
   

 

  
   
return (
    <div>
        <form className='form'>
            <h1 className='mainHeading'>Tenth Results</h1>
        <div className='formDiv'>
            <label className='formLabel'>FirstName</label>
            <input type='text' ref={firstNameInputRef}
            onFocus={()=>{
                inputOnFocus(firstNameInputRef);
                
            }}
           
            onBlur={()=>{
                inputOnBlur(firstNameInputRef);
            }}></input>
            <span ref={firstNameResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>LastName</label>
            <input type='text' ref={lastNameInputRef}
            onFocus={()=>{
                inputOnFocus(lastNameInputRef);
            }}
            
            onBlur={()=>{
                inputOnBlur(lastNameInputRef);
            }}></input>
            <span ref={lastNameResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Telugu</label>
            <input type='number' ref={teltInputRef}
            onFocus={()=>{
                inputOnFocus(teltInputRef); 
            }}
            onChange={()=>{ 
                inputOnChange(teltInputRef,telResultRef)
            }}
            onBlur={()=>{
                inputOnBlur(teltInputRef);
                }}></input>
            <span ref={telResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>English</label>
            <input type='number' ref={engtInputRef}
             onFocus={()=>{
              
                inputOnFocus(engtInputRef); 
            }}
            onChange={()=>{
                inputOnChange(engtInputRef,engResultRef);
               }}
            onBlur={()=>{
                inputOnBlur(engtInputRef);
         }}></input>
            <span ref={engResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Hindi</label>
            <input type='number' ref={hintInputRef}
            onFocus={()=>{
                inputOnFocus(hintInputRef);
               }}
            onChange={()=>{
                inputOnChange(hintInputRef,hinResultRef);
                }}
            onBlur={()=>{
                inputOnBlur(hintInputRef);
               
            }}></input>
            <span ref={hinResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Maths</label>
            <input type='number' ref={mathsInputRef}
            onFocus={()=>{
                inputOnFocus(mathsInputRef)
               }}
            onChange={()=>{
                inputOnChange(mathsInputRef,mathsResultRef);
               }}
            onBlur={()=>{
                inputOnBlur(mathsInputRef);
                
            }}></input>
            <span ref={mathsResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel' >Science</label>
            <input type='number' ref={sciInputRef}
            onFocus={()=>{
                inputOnFocus(sciInputRef)
            }}
            onChange={()=>{
                inputOnChange(sciInputRef,sciResultRef);
                }}
            onBlur={()=>{
                inputOnBlur(sciInputRef);
                
            }}></input>
            <span ref={sciResultRef}></span>
        </div>
        <div className='formDiv'>
            <label className='formLabel'>Social</label>
            <input type='number' ref={socInputRef}
             onFocus={()=>{
                inputOnFocus(socInputRef)
             }}
            onChange={()=>{
                inputOnChange(socInputRef,socResultRef);
            }}
            onBlur={()=>{
                inputOnBlur(socInputRef);
               
            }}></input>
            <span ref={socResultRef}></span>
        </div>
        <p ref={resultParaRef}>Please Enter Values And Calculate Results</p>
        <div className='formDiv'>
            <button type='button' onClick={()=>{
                 calculateResult();
                 }}>CalculateResult</button>
        </div>
        </form>
       
    </div>
  )
}



export default TenthMarksSheet