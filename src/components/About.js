import React, {useState} from 'react'

export default function About() {
    let imageStyle={
        width:'100%',
             
    }
    const [Image, setImage] = useState('https://camo.githubusercontent.com/cae12fddd9d6982901d82580bdf321d81fb299141098ca1c2d4891870827bf17/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313336302f302a37513379765349765f7430696f4a2d5a2e676966');
    const changeImage = ()=>{
        setImage('https://camo.githubusercontent.com/8bf6f6d78abc81fcf9c49f10649423e73ea44bc248e83aaae8759d401c829a84/68747470733a2f2f70687973696373677572756b756c2e66696c65732e776f726470726573732e636f6d2f323031392f30322f6368617261637465722d312e676966');
    }

const [myStyle, setMyStyle] = useState({
    color:'white',
    backgroundColor:'blue',
    padding:'10px'

})

const toggleBtn = ()=>{
    if(myStyle.color=='white'){
        setMyStyle({
            color:'blue',
            backgroundColor:'white',
            padding:'10px'
        })
    }else{
        setMyStyle({
            color:'white',
            backgroundColor:'blue',
            padding:'10px'
        })
    }
}

    return (
        <div className='container'>
            <div className="aboutus-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="aboutus">
                                    <h2 className="aboutus-title">About Us</h2>
                                    <p className="aboutus-text">Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                    <p className="aboutus-text">This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem</p>
                                    
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="aboutus-banner" >
                                    <img src={Image} alt="" style={imageStyle} />
                                </div>
                            </div>
                            <div className="col-md-5 col-sm-6 col-xs-12">
                                <div className="feature">
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Work with heart</h4>
                                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="feature-content">
                                                <h4>Reliable services</h4>
                                                <p>Donec vitae sapien ut libero venenatis faucibu. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="feature-box">
                                        <div className="clearfix">
                                            <div className="iconset">
                                                <span className="glyphicon glyphicon-cog icon"></span>
                                            </div>
                                            <div className="feature-content" style={myStyle}>
                                                <h4>Great support</h4>
                                                <p>Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
        <button type="button" className="btn btn-success M-2" onClick={changeImage}>Change Image</button>
        <button type="button" className="btn btn-success m-2" onClick={toggleBtn}>toggle Color</button>

        </div>
    )
}
