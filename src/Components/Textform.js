import React, {useState} from 'react'
export default function TextForm(props) 
  {
  const [text, setText] = useState('Enter text here');
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
  return (
    <>
              <div className="container">
              <h1>{props.heading}</h1>
              <textarea className="form-control" value={text} id="myBox" rows="7" onChange={(e) => setText(e.target.value)} ></textarea>
              <button className="btn btn-primary mx-1" onClick={handleConvertToUppercase}>Convert to Uppercase</button>
              <button className="btn btn-primary mx-1" onClick={handleConvertToLowercase}>Convert to Lowercase</button>
              <button className="btn btn-primary mx-1" onClick={handleConvertToClear}>Clear Text</button>
              <button className="btn btn-primary mx-1" onClick={handleRemoveSpaces}>Remove Spaces</button>
              </div>
              <div className='container my-3'>
              <h2>Text Summary</h2>
              <p> {text.split(" ").length} Words & {text.length} Characters</p>
              <p>{0.008 * text.split(" ").length} Mintues to read </p>
              <h2>Preview</h2>
              <p>{text}</p>
              </div>
    </>
  )
}

