// import React, { useState } from 'react'
// import styled from "styled-components"
// import BackgroundImages from '../components/BackgroundImage.jsx';
// import Header from '../components/Header';
// import {firebaseAuth} from '../utils/firebase-config.js';
// import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom';




// const Signup = () => {

//     const [showPassword, setShowPassword] = useState(false)
//     const navigate = useNavigate();

//     const[formValues, setFormValues] = useState({
//         email : "",
//         password : "",
//     })

//     const handleSignIn = async ()=>{
//         try {
//             const {email, password} = formValues;
//             await createUserWithEmailAndPassword(firebaseAuth,email,password)
//         } catch (err) {

//             console.log(err)            
//         }
//     }

//     onAuthStateChanged(firebaseAuth, (currentUser)=>{
//         if(currentUser) navigate("/")
//     })


//   return (
//     <Container showPasssword = {showPassword}>
//         <BackgroundImages/>
//         <div className="content">
//         <Header login/>
//         <div className="body flex column a-center j-center">
//             <div className="text flex column">
//                 <h1>Unlimited movies, Tv shows and more</h1>
//                 <h4>Watch anywhere. Cancel anytime.</h4>
//                 <h6>
//                     Ready to watch? Enter your email to create or restart membership
//                 </h6>
//             </div>
//             <div className="form">
//                 <input type="email" placeholder='Email Address' name='email' 
//                 value={formValues.email} 
//                 onChange={(e)=>
//                 setFormValues({
//                     ...formValues,
//                     [e.target.name]:e.target.value})} />

//                 {showPassword && <input type="password" placeholder='Password' name='password'
//                 value={formValues.password} 
//                 onChange={(e)=>
//                 setFormValues({
//                     ...formValues,
//                     [e.target.name]:e.target.value})}/>}

//                 {!showPassword &&  <button onClick={() => setShowPassword(true)} >Get Started <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
//   <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
// </svg> </button>}
//             </div>
//                 {/* <h5>Already have an account ? &nbsp */}
//                 <button onClick={handleSignIn}>Sign up</button>
//                 {/* </h5> */}
                
//         </div>
//         </div>
//     </Container>
//   )
// }



// export default Signup


import React, { useState } from 'react'
import styled from "styled-components"
import BackgroundImages from '../components/BackgroundImage.jsx';
import Header from '../components/Header';
import {firebaseAuth} from '../utils/firebase-config.js';
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';


const Container = styled.div`
    position : relative;
    .content{
        position: absolute;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.5);
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-rows: 15vh 85vh;
        .body{
            gap: 1rem;


            .text{
                gap:1rem;
                text-align:center;
                font-size: 2rem;


                h1{
                    padding:0.25rem;
                }
            }

            .form{
                display:grid;
                grid-template-columns:${({showPasssword})=>showPasssword ? "1fr 1fr" : "2fr 1fr"};
                width: 60%;
                gap: 1rem;
                

                input{
                    color: white;
                    background: black;
                    opacity: 60%;
                    border-radius: 10px;
                    padding: 1.5rem;
                    font-size: 1.2rem;
                    border: 1px solid grey;

                    &:focus{
                        border: 6px solid white;
                    }

                }

                button{
                    padding: 0.5rem 1rem;
                    background-color: #e50914;
                    border: none;
                    border-radius: 10px;
                    cursor: pointer;
                    color: white;
                    font-weight: bolder;
                    font-size: 1.05rem;



                }
            }

            button{
                padding: 0.5rem 1rem;
                background-color: #e50914;
                border: none;
                cursor: pointer;
                color: white;
                border-radius: 0.2rem;
                font-weight: bolder;
                font-size: 1.05rem;
            }
        }
    }

`;

const Signup = () => {

    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();

    const[formValues, setFormValues] = useState({
        email : "",
        password : "",
    })

    const handleSignIn = async ()=>{
        try {
            const {email, password} = formValues;
            await createUserWithEmailAndPassword(firebaseAuth,email,password)
        } catch (err) {

            console.log(err)            
        }
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            if (!showPassword) {
                setShowPassword(true);
            } else {
                handleSignIn();
            }
        }
    };

    onAuthStateChanged(firebaseAuth, (currentUser)=>{
        if(currentUser) navigate("/")
    })

  return (
    <Container showPasssword = {showPassword}>
        <BackgroundImages/>
        <div className="content">
        <Header login/>
        <div className="body flex column a-center j-center">
            <div className="text flex column">
                <h1>Unlimited movies, Tv shows and more</h1>
                <h4>Watch anywhere. Cancel anytime.</h4>
                <h6>
                    Ready to watch? Enter your email to create or restart membership
                </h6>
            </div>
            <div className="form">
                <input type="email" placeholder='Email Address' name='email' 
                value={formValues.email} 
                onChange={(e)=>
                setFormValues({
                    ...formValues,
                    [e.target.name]:e.target.value})}
                onKeyPress={handleKeyPress} />

                {showPassword && <input type="password" placeholder='Password' name='password'
                value={formValues.password} 
                onChange={(e)=>
                setFormValues({
                    ...formValues,
                    [e.target.name]:e.target.value})}
                onKeyPress={handleKeyPress} />}

                {!showPassword &&  <button onClick={() => setShowPassword(true)} >Get Started <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708"/>
</svg> </button>}
            </div>
                {/* <h5>Already have an account ? &nbsp */}
                <button onClick={handleSignIn}>Sign up</button>
                {/* </h5> */}
                
        </div>
        </div>
    </Container>
  )
}

export default Signup
