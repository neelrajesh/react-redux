import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import './assets/App.css';
import Header from './components/Header';
import Register from './components/Register';
import About from './components/About';
// import FormValidation from './components/FormValidation';
// import DemoModal from './components/DemoModal';
import Slider from './components/modal/Slider'
import TextAlert from './components/TextAlert';
function App() {
 const [mode, setMode] = useState('light')
const [alert, setAlert] = useState(null)
 const showAlert = (message, type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null)
    },3000)
 }

 const bgClassRemove = () => {
   document.body.classList.remove('bg-primary');
   document.body.classList.remove('bg-danger');
   document.body.classList.remove('bg-success');
   document.body.classList.remove('bg-warning');
   document.body.classList.remove('bg-light');
   document.body.classList.remove('bg-dark');
 }

 const toggleMode = (clrs)=>{
   console.log(mode);
bgClassRemove();

  if(clrs === 'primary'){
    setMode('dark');
    document.body.classList.add('bg-'+clrs);
    showAlert('primary mode enable',"primary");
    document.title = 'React: Dark mode theme';
  } else if(clrs === 'danger'){
    setMode('dark');
    document.body.classList.add('bg-'+clrs);
    showAlert('danger mode enable',"danger");
    document.title = 'React: Dark mode theme';
  }else if(clrs === 'success'){
    setMode('dark');
    document.body.classList.add('bg-'+clrs);
    showAlert('success mode enable',"success");
    document.title = 'React: Dark mode theme';
  }else if(clrs === 'warning'){
    setMode('dark');
    document.body.classList.add('bg-'+clrs);
    showAlert('warning mode enable',"warning");
    document.title = 'React: Dark mode theme';
  }else if(mode === 'light'){
    setMode('dark');
    document.body.style.backgroundColor = 'gray';
    showAlert('success mode enable',"success");
    document.title = 'React: Dark mode theme';
  }  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert('dark mode enable',"warning");
    document.title = 'React: Light mode theme';


  }

}

 //OLD TOOGLE FUNCTION
//  const toggleMode = ()=>{

//     if(mode === 'light'){
//       setMode('dark');
//       document.body.style.backgroundColor = 'gray';
//       showAlert('dark mode enable',"success");
//       document.title = 'React: Dark mode theme';
//     }else{
//       setMode('light');
//       document.body.style.backgroundColor = 'white';
//       showAlert('dark mode enable',"warning");
//       document.title = 'React: Light mode theme';


//     }

//  }
  return (
  <div className='app'>

<BrowserRouter>
<Header logoName="hello world" aboutTitle="about title" mode={mode} toggleMode={toggleMode}/>
<TextAlert alert={alert} />

          <Routes>
              <Route path="/" element={<h2>Home page</h2>}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/Register" element={<Register mode={mode} showAlert={showAlert}/>}></Route>
              <Route path="/Slider" element={<Slider />}></Route>

          </Routes>
      </BrowserRouter>

    {/* <Header logoName="hello world" aboutTitle="about title" mode={mode} toggleMode={toggleMode}/>
    <TextAlert alert={alert} />
    <Register Heading="form handing" mode={mode} showAlert={showAlert} />
    <About /> */}
    {/* <FormValidation /> */}
    {/* <DemoModal /> */}
    {/* <Slider /> */}
  </div>
  );
}

export default App;
