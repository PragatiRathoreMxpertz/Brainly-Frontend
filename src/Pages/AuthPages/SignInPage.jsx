// import React, { useState } from 'react';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useNavigate } from 'react-router-dom';
// import signInImg from "../../Assets/Images/signImg.jpg";
// import Button from "../../Components/Button.jsx";
// import "../../Styles/AuthPage.css";
// import { Link } from 'react-router-dom';

// const SignUpPage = () => {

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [termsChecked, setTermsChecked] = useState(false);
//   const [marketingChecked, setMarketingChecked] = useState(false);
//   const [passwordVisible, setPasswordVisible] = useState(false); 
//   const [clickCheck , setClickCheck] = useState("")
 
//   const [emailError, setEmailError] = useState('');

//   const [passwordError, setPasswordError] = useState('');

//   const navigate = useNavigate();

//   const handleTermsChange = () => {
//     setTermsChecked(!termsChecked);
//   };

//   const handleMarketingChange = () => {
//     setMarketingChecked(!marketingChecked);
//   };

//   const validateInputs = () => {
//     let isValid = true;

    

//     if (email.trim() === '') {
//       setEmailError('Email address is required');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Email address is invalid');
//       isValid = false;
//     }

   

//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//       isValid = false;
//     } else if (!/(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}/.test(password)) {
//       setPasswordError('Password must be 8 or more characters long and contain at least one letter, one number, and one special character');
//       isValid = false;
//     } 

//     if(marketingChecked===false && termsChecked === false){
//       setClickCheck("please accept terms and conditions")
//       isValid = false
//     }

//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateInputs()) {
//       console.log('Submitted:', { email,  password });
//       navigate("/ScienceFictionStories");
//     }
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };

//   return (
//     <div>
//       <div className='SignInContainer'>
//         <div className='signInBox1'>
//           <div>
//             <h1 className='font-semibold font-poppins text-white learnWithUs'>Learn with us</h1>
//             <p className='text-white font-poppins font-light accessNew'>Access the new ways to learn while playing</p>
//           </div>
//           <div className='signImgBox'>
//             <img src={signInImg} alt="illustration" />
//           </div>
//         </div>

//         <div className='signInBox2'>
//           <h2 className='font-poppins font-normal text-white accessNew'>Sign In now</h2>
//           <form onSubmit={handleSubmit}>
            
//             <div className='flex flex-col py-2 '>
//               <label className=' font-poppins text-white userInfoText'>Email address</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setEmailError('');
//                 }}
//                 required
//                 className='userInfoBox'
//               />
//               {emailError && <span className="text-red-500">{emailError}</span>}
//             </div>
           
//             <div className='flex flex-col py-2 '>
//               <label className='flex justify-between font-poppins text-white userInfoText'>  
//               <p>Password</p>
//               <p className='flex gap-2 items-center'><span  onClick={togglePasswordVisibility}>{passwordVisible ?  <FaRegEyeSlash />:<FaRegEye /> }</span>Hide</p>
             
//           </label>
//             <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setPasswordError('');
//                 }}
//                 required
//                 className='userInfoBox'
//               />
//               {passwordError && <span className="text-red-500">{passwordError}</span>}
//             </div>
            

//             <div className=' flex flex-col items-center text-white gap-4'>
//               <div className='w-[30%] text-white'>
//                 <Button btnText="Sign In" onClickFunction={handleSubmit} />
//               </div>
//               <div className='flex gap-6'>
//                 <p>Forgot Password? </p>
//                 <Link to="/RecoverpassWord">
//                 <p className='underline text-sky-500'>Recover now</p>
//                 </Link>
               
//               </div>
//               <div className='flex gap-6'>
//                 <p>Don't have an account? </p>
//                 <Link to="/SignUpPage">
//                 <p className='underline text-sky-500'>SignUp</p>
//                 </Link>
               
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;


// import React, { useState } from 'react';
// import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, useNavigate } from 'react-router-dom';
// import signInImg from "../../Assets/Images/signImg.jpg";
// import Button from "../../Components/Button.jsx";
// import "../../Styles/AuthPage.css";
// import { loginUser } from '../../store/Slice/AuthSlice/SignIn.js';

// const SignInPage = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [passwordVisible, setPasswordVisible] = useState(false);
//   const [emailError, setEmailError] = useState('');
//   const [passwordError, setPasswordError] = useState('');

//   const isLoading = useSelector((state) => state.SignInuser.isLoading);
//   const error = useSelector((state) => state.SignInuser.error);
// //   const user = useSelector((state) => state.SignInuser.user);
// // console.log(error)

//   const validateInputs = () => {
//     let isValid = true;

//     if (email.trim() === '') {
//       setEmailError('Email address is required');
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       setEmailError('Email address is invalid');
//       isValid = false;
//     }

//     if (password.trim() === '') {
//       setPasswordError('Password is required');
//       isValid = false;
//     }

//     return isValid;
//   };

//   const togglePasswordVisibility = () => {
//     setPasswordVisible(!passwordVisible);
//   };


//   const handleLogin = (e) => {
//   e.preventDefault();

//   if (validateInputs()) {
//     dispatch(loginUser({ 
//       Email: email, 
//       Password: password
//     })).then(() => {
//       // Check if there's an error in the Redux state
//       if (!error) {
//         // If no error, navigate to desired page upon successful login
//         navigate("/ScienceFictionStories");
//       }
//     });
//   }
// };

//   return (
//     <div>
//       <div className='SignInContainer'>
//         <div className='signInBox1'>
//           <div>
//             <h1 className='font-semibold font-poppins text-white learnWithUs'>Learn with us</h1>
//             <p className='text-white font-poppins font-light accessNew'>Access the new ways to learn while playing</p>
//           </div>
//           <div className='signImgBox'>
//             <img src={signInImg} alt="illustration" />
//           </div>
//         </div>

//         <div className='signInBox2'>
//           <h2 className='font-poppins font-normal text-white accessNew'>Sign In now</h2>
//           <form onSubmit={handleLogin}>
//             <div className='flex flex-col py-2 '>
//               <label className=' font-poppins text-white userInfoText'>Email address</label>
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => {
//                   setEmail(e.target.value);
//                   setEmailError('');
//                 }}
//                 required
//                 className='userInfoBox'
//               />
//               {emailError && <span className="text-red-500">{emailError}</span>}
//             </div>
//             <div className='flex flex-col py-2 '>
//               <label className='flex justify-between font-poppins text-white userInfoText'>  
//                 <p>Password</p>
//                 <p className='flex gap-2 items-center'>
//                   <span onClick={togglePasswordVisibility}>
//                     {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
//                   </span>
//                   Hide
//                 </p>
//               </label>
//               <input
//                 type={passwordVisible ? 'text' : 'password'}
//                 value={password}
//                 onChange={(e) => {
//                   setPassword(e.target.value);
//                   setPasswordError('');
//                 }}
//                 required
//                 className='userInfoBox'
//               />
//               {passwordError && <span className="text-red-500">{passwordError}</span>}
//             </div>

//             <div className=' flex flex-col items-center text-white gap-4'>
//               <div className='w-[30%] text-white'>
//                 <Button btnText="Sign In" onClickFunction={handleLogin} />
//               </div>
//               <div className='flex gap-6'>
//                 <p>Forgot Password? </p>
//                 <Link to="/RecoverpassWord">
//                   <p className='underline text-sky-500'>Recover now</p>
//                 </Link>
//               </div>
//               <div className='flex gap-6'>
//                 <p>Don't have an account? </p>
//                 <Link to="/SignUpPage">
//                   <p className='underline text-sky-500'>Sign Up</p>
//                 </Link>
//               </div>
//             </div>
//           </form>
//           {isLoading && <p>Loading...</p>}
//           {error && <p>{error}</p>}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignInPage;


import React, { useEffect, useState } from 'react';
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import signInImg from "../../Assets/Images/signImg.jpg"; // Update the path as needed
import Button from "../../Components/Button.jsx"; // Update the path as needed
import "../../Styles/AuthPage.css";
import { Signin_user } from '../../store/Actions/Authactions.js';

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const isLoading = useSelector((state) => state.auth.loading);
  // const error = useSelector((state) => state.auth.error);
  // const user = useSelector((state) => state.SignInuser.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const user = useSelector((state) => state.auth.user);
  const userType = useSelector((state) => state.auth.userType);
  console.log(user, userType, isAuthenticated);

  useEffect(() => {
    if (isAuthenticated > 0) {
      switch (userType) {
        case "student":
          navigate("/ScienceFictionStories");
          // navigate("/");
          break;
        case "admin":
          navigate("/Admin/Admin-Home");
          break;
        default:
          navigate("/");
      }
    } else {
      navigate("/SignInPage");
    }
  }, [isAuthenticated, userType, navigate]);








  const validateInputs = () => {
    let isValid = true;

    if (email.trim() === '') {
      setEmailError('Email address is required');
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setEmailError('Email address is invalid');
      isValid = false;
    }

    if (password.trim() === '') {
      setPasswordError('Password is required');
      isValid = false;
    }

    return isValid;
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
  
    if (validateInputs()) {
      try {
         dispatch(Signin_user({ 
          Email: email, 
          Password: password
        }));
        // navigate("/ScienceFictionStories")
  
       
      } catch (error) {
        console.error("Error logging in:", error);
      }
    }
  };
  

  return (
    <div>
      <div className='SignInContainer'>
        <div className='signInBox1'>
          <div>
            <h1 className='font-semibold font-poppins text-white learnWithUs'>Learn with us</h1>
            <p className='text-white font-poppins font-light accessNew'>Access the new ways to learn while playing</p>
          </div>
          <div className='signImgBox'>
            <img src={signInImg} alt="illustration" />
          </div>
        </div>

        <div className='signInBox2'>
          <h2 className='font-poppins font-normal text-white SignText'>Sign In now</h2>
          <form onSubmit={handleLogin}>
            <div className='flex flex-col py-2 '>
              <label className=' font-poppins text-white userInfoText'>Email address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError('');
                }}
                required
                className='userInfoBox'
              />
              {emailError && <span className="text-red-500">{emailError}</span>}
            </div>
            <div className='flex flex-col py-2 '>
              <label className='flex justify-between font-poppins text-white userInfoText'>  
                <p>Password</p>
                <p className='flex gap-2 items-center'>
                  <span onClick={togglePasswordVisibility}>
                    {passwordVisible ? <FaRegEyeSlash /> : <FaRegEye />}
                  </span>
                  Hide
                </p>
              </label>
              <input
                type={passwordVisible ? 'text' : 'password'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setPasswordError('');
                }}
                required
                className='userInfoBox'
              />
              {passwordError && <span className="text-red-500">{passwordError}</span>}
            </div>

            <div className=' flex flex-col items-center text-white gap-4'>
              <div className='w-[30%] text-white'>
                <Button btnText="Sign In" onClickFunction={handleLogin} />
              </div>
              <div className='flex gap-6'>
                <p>Forgot Password? </p>
                <Link to="/RecoverpassWord">
                  <p className='underline text-sky-500'>Recover now</p>
                </Link>
              </div>
              <div className='flex gap-6'>
                <p>Don't have an account? </p>
                <Link to="/SignUpPage">
                  <p className='underline text-sky-500'>Sign Up</p>
                </Link>
              </div>
            </div>
          </form>
          {isLoading && <p>Loading...</p>}
          {/* {error && <p>{error}</p>} */}
        </div>
      </div>
    </div>
  );
};

export default SignInPage;
