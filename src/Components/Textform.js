import React, {useState} from 'react'
export default function TextForm(props) 
  {
  const [text, setText] = useState('');
  function handleConvertToUppercase() {
    const uppercaseText = text.toUpperCase();
    setText(uppercaseText);
  }
  function handleConvertToLowercase() {
    const uppercaseText = text.toLowerCase();
    setText(uppercaseText);
  }
  function handleConvertToClear() {
    const uppercaseText = "";
    setText(uppercaseText);
  }
  function handleRemoveSpaces() {
    const uppercaseText = text.replace(/\s+/g, ' ');
    setText(uppercaseText);
  }
  function handleCopyText() {
    // const uppercaseText = text.toUpperCase();
    // setText(uppercaseText);
    navigator.clipboard.writeText(text).then(() => {
      // Handle success
      console.log('Text copied to clipboard');
    }, (error) => {
      // Handle error
      console.error('Failed to copy text to clipboard', error);
    });
  }

  return (
    <>
              <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
              <h1>{props.heading}</h1>
              <textarea className="form-control" placeholder='Enter text here' value={text} style={{backgroundColor: props.mode==='dark'?'grey':'white',color: props.mode==='dark'?'white':'black'}} id="myBox" rows="7" onChange={(e) => setText(e.target.value) } />
              <button className="btn btn-primary mx-1" onClick={handleConvertToUppercase}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-1" onClick={handleConvertToLowercase}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-1" onClick={handleConvertToClear}>Clear Text</button>
              <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Spaces</button>
              <button className="btn btn-primary mx-1" onClick={handleCopyText}>Copy Text</button>
              </div>
              <div className='container my-3' style={{color: props.mode==='dark'?'white':'black'}}>
              <h2>Text Summary</h2>
              <p> {text.split(" ").length-1} Words & {text.length} Characters</p>
              <p>{0.008 * text.split(" ").length} Mintues to read </p>
              <h2>Preview</h2>
              <p>{text}</p>
              </div>
    </>
  )
}