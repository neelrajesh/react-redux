import { Button,Form } from 'react-bootstrap';
import PropTypes from 'prop-types';
import {
   Link
  } from "react-router-dom";
function Header(props){
    return (
        <>
        
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            {/* <nav className="navbar navbar-expand-lg navbar-Dark bg-Dark"> */}
            <Link className="navbar-brand" to="/">{props.logoName}</Link>
            <Button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </Button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                    
                    <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/About">{props.aboutTitle}</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/Register">Register</Link>
                </li>
                <li className="nav-item active">
                    <Link className="nav-link" to="/Slider">Slider</Link>
                </li>
                
            </ul>
            <div className='d-flex mx-10'>
            <div className='bg-primary rounded mx-2' onClick={()=>{props.toggleMode('primary')}} style={{height:'30px', widht:'30px',}}>primary</div>
            <div className='bg-danger rounded mx-2' onClick={()=>{props.toggleMode('danger')}} style={{height:'30px', widht:'30px',}}>danger</div>
            <div className='bg-success rounded mx-2' onClick={()=>{props.toggleMode('success')}} style={{height:'30px', widht:'30px',}}>success</div>
            <div className='bg-warning rounded mx-2' onClick={()=>{props.toggleMode('warning')}} style={{height:'30px', widht:'30px',}}>warning</div>
            </div>
            <div className='d-flex mx-10'>
            <Form.Check 
                    type="switch"
                    id="custom-switch"
                    label="Check this switch" className='text-light' onClick={props.toggleMode}
                />
            </div>
          
            </div>
            </nav>
        </>
    )
}

Header.propTypes = {logoName: PropTypes.string, aboutUs: PropTypes.string}
export default Header;