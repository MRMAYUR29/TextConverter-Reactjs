import React, { useState } from "react";


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to uppercase!","success")
    }

    const handleLoClick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to lowercase!","success")
    }

    const handleClearClick = () => {
        // console.log("Uppercase was clicked : " + text);
        let newText = "";
        setText(newText)
        props.showAlert("Text is cleared!","success")
    }

    const handleOnChange = (event) => {
        // console.log("handleOnChange was clicked");
        setText(event.target.value)
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select()
        navigator.clipboard.writeText(text.value);
        props.showAlert("Copied to Clipboard!","success")
    }

    const handleExtraSpaces = () => {
        let ExtraSpace = text.split(/[ ]+/);
        setText(ExtraSpace.join(" "))
        props.showAlert("Extra space is removed!","success")
    }

    const [text, setText] = useState("");
    // text = "new text"   //Wrong way to change the state
    // setText("new text");   //Correct way to change the state
    return (
        <>
            <div className="container" style={{color: props.mode==='light'?'black':'white'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea
                        className="form-control"
                        onChange={handleOnChange}
                        value={text}
                        id="myBox"
                        rows="10"
                        style={{backgroundColor: props.mode==='light'?'white':'gray', color: props.mode==='light'?'black':'white'}}
                    ></textarea>
                </div>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode==='red'?'red':'#0D6EFD', border: props.mode==='red'?'2px solid black':'1px solid #0D6EFD'}} onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode==='red'?'red':'#0D6EFD', border: props.mode==='red'?'2px solid black':'1px solid #0D6EFD'}} onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode==='red'?'red':'#0D6EFD', border: props.mode==='red'?'2px solid black':'1px solid #0D6EFD'}} onClick={handleClearClick}>Clear Text</button>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode==='red'?'red':'#0D6EFD', border: props.mode==='red'?'2px solid black':'1px solid #0D6EFD'}} onClick={handleCopy}>Copy Text</button>
                <button className="btn btn-primary mx-1" style={{backgroundColor: props.mode==='red'?'red':'#0D6EFD', border: props.mode==='red'?'2px solid black':'1px solid #0D6EFD'}} onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container my-3" style={{color: props.mode==='light'?'black':'white'}}>
                <h2>Your text summary</h2>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.008 * text.split(" ").length } Minutes to read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
            </div>
        </>
    );
}
