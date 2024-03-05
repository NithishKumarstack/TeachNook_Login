import React from 'react';
import './Login.css';
import Lottie from 'react-lottie';
import animationData from '../lottie/Animation2.json';
// import DigitalLearning from './DigitalLearning';
import { MDBInput } from 'mdb-react-ui-kit';
const Login = () => {
  return (
    <div className='wrapper'>
    <div className='container'>
    <div className='lottie'>
    <Lottie
    height={400}
    width={300}
    options={{
      autoplay: true,
      loop: true,
      animationData,
    }}
    />
    </div>
    {/* <div className='svg me-3 p-3'>
    <DigitalLearning/>
    </div> */}
    <div className='form'>
    <div className='logo'>
    <svg width="48" height="53" viewBox="0 0 48 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Logo">
    <path id="Vector" d="M18.9298 24.8395C16.7853 26.0466 14.1649 26.0029 12.0637 24.7183L0 17.3498L15.4631 8.44453L28.7288 0.935428C31.0223 -0.35891 33.8303 -0.310433 36.0709 1.07601L48 8.44453L18.9298 24.8395Z" fill="#1D1D1F"/>
    <path id="Vector_2" d="M19.4683 29.3383L26.2478 25.3874C27.0748 24.9027 27.9932 24.5827 28.95 24.5003C30.3348 24.384 32.085 24.6942 32.9168 26.706C33.1524 27.2684 33.2485 27.884 33.2485 28.4948V50.2126C33.2485 50.358 33.2485 50.5034 33.2485 50.6489C33.2582 51.0027 33.2053 52.4522 31.5801 52.8933C30.705 53.1309 29.7674 52.9515 28.9933 52.4716C27.0219 51.2548 22.0118 48.1571 19.8193 46.8046C18.1749 45.7914 17.1315 44.0075 17.1123 42.0684C17.1123 42.0393 17.1123 42.0102 17.1123 41.9811V33.4443C17.1123 31.7525 18.0066 30.1867 19.4635 29.3383H19.4683Z" fill="#1D1D1F"/>
    </g>
    <defs>
    <clipPath id="clip0_26_63">
    <rect width="48" height="53" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    </div>
    <div className='brand'>
    <h3 className='title'>Welcome To Teachnook!</h3>
    </div>
    <span className='description'>Please enter your details</span>
    <div>
    <form>
    <MDBInput label='Email' id='typeEmail' type='email' />
    <br />
    <MDBInput label='Password' id='typePassword' type='password' />
    <br />
    <span className='forget'>Forgot Password?</span>
    <button className='login w-100 p-3'>
    Log in
    </button>
    </form>
    <p className='choose'>-----Or continue with-----</p>
    <div>
    <button className='googlelogin w-100 p-3'>
    <img width="32" height="32" src="https://img.icons8.com/3d-fluency/94/google-logo.png" alt="google-logo"/>
    <span className='goocont'>Continue With Google</span>
    </button>
    <br/>
    <button className='applelogin w-100 p-3'>
    <img width="32" height="32" src="https://img.icons8.com/ios-filled/50/000000/mac-os.png" alt="mac-os"/>
    <span className='appcont'>Continue With Apple</span>
    </button>
    </div>
    </div>
    </div>
    </div>
    </div>
  )
}

export default Login;