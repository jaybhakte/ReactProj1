import React, {useState} from 'react'
export default function Textform(props) {
    const handleupClick = ()=>{
        // console.log("Uppercase clicked "+text)
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Successfully! Converted to UpeerCase","success")
    }
    const handleloClick = ()=>{
        // console.log("Uppercase clicked "+text)
       let newText = text.toLowerCase();
       setText(newText);
       props.showAlert("Successfully! Converted to LowerCase","success")
    }
    const handleclearClick = ()=>{
        // console.log("Uppercase clicked "+text)

       let newText = '';
       setText(newText);
       props.showAlert("Successfully! Text Cleard ","success")
    }
    const handleOnchange = (event)=>{
        // console.log("Onchange")
        setText(event.target.value)
    }
const [text,setText] = useState('');
    
    return (
        <>
       <div className="container" style={{color:props.mode==='light'?'black':'white'}}>
        <div className="mb-3">
            <h2>{props.heading}</h2>
            <textarea className="form-control" value={text} onChange={handleOnchange} id="mybox" rows="6"  style={{backgroundColor:props.mode==='light'?'white':'#200720',color:props.mode==='light'?'black':'white'}}></textarea>
        </div>
        <button className="btn btn-success" onClick={handleupClick}>Convert To UperCase</button>
        <button className="btn btn-success mx-1" onClick={handleloClick}>Convert To LowerCase</button>
        <button className="btn btn-success mx-1" onClick={handleclearClick}>Clear all</button>
       </div>
        
       <div className="container my-3" style={{color:props.mode==='light'?'black':'white'}}>
        <p>{text.split(" ").length-1} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length > 0?text:"Enter some text above to preview here.."}</p>
        
       </div>
       </>
    )
}
