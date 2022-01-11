import React, { useState } from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
       // console.log("Uppercase was clicked" +  text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Upper Case!", "success");
    }

    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked" +  text);
         let newText = text.toLowerCase();
         setText(newText)
         props.showAlert("Converted to Lower Case!", "success");
     }

     const handleClearClick = ()=>{
        // console.log("Uppercase was clicked" +  text);
         let newText = '';
         setText(newText)
         props.showAlert("Clear Text!", "success");
     }

     const handleCopyClick = ()=>{
        // console.log("Uppercase was clicked" +  text);
         navigator.clipboard.writeText(text);
         props.showAlert("Copy to Clipboard!", "success");
         
     }

     const handleExtraSpaces = ()=>{
        // console.log("Uppercase was clicked" +  text);
         let newText = text.split(/[ ]+/);
         setText(newText.join(" "))
         props.showAlert("Remove Extra Spaces!", "success");
     }
     

    const handleOnChange = (event)=>{
        //console.log("Uppercase was clicked" + text);
        setText(event.target.value)
    }
    const [text, setText] = useState('');
    return (
        <>
        <div className="container" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white' ,color:props.mode==='dark'?'white':'#042743'}}  id="myBox" rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
            <button className="btn btn-primary mx-2" onClick={handleCopyClick}>Copy Text</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} character</p>
            <p><b>{0.008 * text.split(" ").length}</b> Minutes Read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview!"}</p>
        </div>
        </>
    )
}
