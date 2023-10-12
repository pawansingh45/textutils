import React,{useState} from 'react'



export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was Clicked" + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!", "success");
    }
    
    const handleLoClick = ()=>{
       // console.log("Uppercase was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!", "success");
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was Clicked" + text);
         let newText = '';
         setText(newText);
         props.showAlert("Text cleared", "success");
     }
    const handleOnChange = (event)=>{
        console.log("On Change");
        setText(event.target.value);
    }
    const [text, setText] = useState('Enter text here');
    //text = "new text"; //Wrong way to chamge the state
    //setText("new text"); //Correct way to change the state
  return (
   <>
        < div className="container" style= {{color:props.mode === 'dark'? 'white':'black'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode=== 'dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container" my-3="true" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>Your text summary</h1>
        <p>{text.split(" ").filter((element) => {return element.length!==0}).length}words and {text.length}  characters</p>
        <p>{0.008* text.split(" ").filter((element) => {return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text: "Enter something in the textbox to preview it here"}</p>
    </div>
    </>
  )
  }
