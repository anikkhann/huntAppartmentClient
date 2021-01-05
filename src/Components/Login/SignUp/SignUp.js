import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import google from '../../../logos/google.png';
import fb from '../../../logos/facebook.png';  
import NavBar from '../../Home/NavBar/NavBar';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";


const SignUp = () => {
    const location= useLocation();
    const history = useHistory();
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);

    let {from}= location.state || { from: {pathname:"/"}};

    const [user, setUser]= useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        confirmPassword:'',
    });

    let isFormValid = true;

    const handleBlur=(event) => {

        if (event.target.name === 'email'){ 
            let isFormValid= /\S+@\S+\.\S+/.test(event.target.value);
                              
        }

        if(isFormValid){
            const newUserInfo = {...user};
            newUserInfo[event.target.name]= event.target.value;            
            setUser(newUserInfo);
        }
    }
    const updateUserName= name=>{
        const user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name,
        }).then(function() {
        }).catch(function(error) {
        });
    }

    const handleSubmit=(e)=>{
        if(user.confirmPassword !== user.password){
            alert("Password don't match")
        }

        if(user.email && user.password){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
            .then(res=>{
                const newUserInfo={...user};
                newUserInfo.error= '';
                setUser(newUserInfo);
                updateUserName(user.name);
                setLoggedInUser(newUserInfo);
                history.replace(from);
            })
            .catch(function(error) {
                const newUserInfo={...user};
                newUserInfo.error= error.message;
                setUser(newUserInfo);;
              });

        }
        e.preventDefault();
        history.replace(from);
    }

    
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const handleGoogleLogin = () => {
        firebase.auth().signInWithPopup(googleProvider)
        .then(res=>{
            const {displayName, email}= res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);

        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const handleFbLogin = () => {
        firebase.auth().signInWithPopup(fbProvider)
        .then(res=>{
            const {displayName, email}= res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });
    }

    return (

        <div id="page">
            <NavBar></NavBar>
            <div id="login">
                <Form onSubmit={handleSubmit}>
                    <h3>Create an account</h3>
                    <br />
                    <Form.Group >
                        <Form.Control type="text" name='firstName' required onBlur={handleBlur} placeholder="First name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control type="text" name='lastName' required onBlur={handleBlur} placeholder="Last name" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                        
                        <Form.Control type="email" onBlur={handleBlur} required name="email" placeholder="Username or Email" />                        
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        
                        <Form.Control type="password" name='password' required onBlur={handleBlur} placeholder="Password" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Control type="password" onBlur={handleBlur} name="confirmPassword" required placeholder="Confirm Password" />
                    </Form.Group>
                    <Button variant="warning" type="submit">
                        <h5>Create an account</h5>
                    </Button> <br /> 
                    <p className="text-center">Already have an account? <a href='/login'> Login</a></p>   
                </Form>
                
            </div>
            
            <div id="anotherProcess">    
                <p className="text-center">Or</p>            
                <a onClick={handleGoogleLogin}>
                    <div className="google">
                        <img src={google} alt="Google"></img>
                        <h5 >Continue with Google</h5>
                    </div>
                </a>
                <a onClick={handleFbLogin}>
                    <div className="fb">
                        <img src={fb} alt="Facebook"></img>
                        <h5>Continue with Facebook</h5>
                    </div>
                </a>
            </div>
        </div>
    );
}
export default SignUp;