// import { textarea } from 'react-bootstrap';
import React, {useState} from 'react';
// import PropTypes from 'prop-types';

function Register(props) {
    const clickForm = ()=> {
        // console.warn('dfkdsklfjds'+ text);
        let newText = text.toUpperCase();
        // setText('this is working succssfully');
        setText(newText);
        props.showAlert('text uppercase converted', 'success');
    }
    const colorChange = ()=> {
        // console.warn('dfkdsklfjds'+ text);
        console.log("you just clicked");
        props.showAlert('text color change successfully', 'danger');
  
        setStyle("cont2");
    }
    const handleOnChange = (event)=> {
        // console.warn('dsfdsfdsf');
        setText(event.target.value)
    }

    const textCopy = ()=>{
        var text = document.getElementById('exampleFormControlTextarea1');
        text.select();
        navigator.clipboard.writeText(text.value);
    }

    const removeSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
const [text, setText] = useState('');
const [style, setStyle] = useState('cont');

    return(
        <>
          <div className="container " style={{color: props.mode==='light'?'gray':'white'}} >
                <h1>{props.Heading}</h1>
                <div className="form-group md-3">
                    <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="exampleFormControlTextarea1" rows="8" style={{backgroundColor: props.mode==='light'?'gray':'white'}} ></textarea>
                </div>
                <button type="submit" onClick={clickForm} className="btn btn-primary mx-2 my-1">uppercase</button>
                <button type="submit" onClick={colorChange} className="btn btn-primary mx-2 my-1">color change</button>
                <button type="submit" onClick={textCopy} className="btn btn-primary mx-2 my-1">text copy</button>
                <button type="submit" onClick={removeSpace} className="btn btn-primary mx-2 my-1">Remove Extra space</button>
        </div>
        <div className="container">
            <h2 >text line</h2>
            <p> This is a text {text.length}</p>
            <p> This is a text {text.split(/\s+/).filter((element)=>{return element.length!==0}).length}</p>
            <p> read text in minite {0.008 *  text.split(" ").length}</p>
            <h2 className={style}>preview</h2>
            <p>{text.length>0? text:'enter your text'}</p>

            
        </div>
        </>
     
    )
}
export default Register;