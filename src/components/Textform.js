import React ,{useState}from 'react'


export default function Textform(props) {
    const [text,setText]=useState("")

    const cvtupper=()=>{
     const newt=text.toUpperCase()
     setText(newt)
     props.showalert("Text is converted to uppercase","success")
     
    }
    const cvtlower=()=>{
        const newtext=text.toLowerCase()
        setText(newtext)
        props.showalert("Text is converted to lowercase","success")
    }
    const handleExtraSpaces = ()=>{
      let words = text.split(' ');
      let joinedWords = '';
      // console.log(words);
      words.forEach((elem)=>{
          if(elem[0] != undefined){
              joinedWords += elem + " ";
              console.log(joinedWords);
          }
          props.showalert("Extra spaces are removed","success")
      })
      setText(joinedWords);
  }
    const handle=(event)=>{
     setText(event.target.value)
    }
    const [mstyle,setMstyle]=useState({
        color:'black',
       
    })
  
 
  const handleCapitalize = () => {
    let newText = text.split(" ").map(el => el.charAt(0).toUpperCase() + el.slice(1)).join(" ");
    setText(newText);
    props.showalert("Text is capitalized","success")
}
  
    
    const mystyle=()=>{
        if(props.mode==='light'){
            setMstyle({
                color:'black',
                
            }
           
            )
            
        }
        else{
            setMstyle({
                color:'white',
            
            }
            )
           
        }
    }

  return (
  <>
  <div className="container" style={mstyle}>
    <div className="mb-3" style={mstyle}>
    <h2 my-2>{props.title}</h2>
  <label htmlFor="exampleFormControlTextarea1" className="form-label"></label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="8" value={text} onChange={handle} ></textarea>
</div>
<button type="button" className="btn btn-primary" onClick={cvtupper}>upper case</button>
<button type="button" className="btn btn-primary mx-2" onClick={cvtlower}>lower case</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Removes Extra Spaces</button>
<button type="button" className="btn btn-primary mx-2" onClick={handleCapitalize}>Capitalize</button>

<h2>Text Summary</h2>
  <p> the length of text is : {text.length} and {text.split(" ").length} words</p>
  <h2>Preview</h2>
  <p>{text}</p>
</div>
  
  </>
  )
}
