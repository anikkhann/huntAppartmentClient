import React, { useContext, useState } from 'react';
import firebase from "firebase";
import "firebase/auth";
import "firebase/firestore";
import { Button, Col, Form, Row } from 'react-bootstrap';
import './Login.css';      
import google from '../../../logos/google.png';
import fb from '../../../logos/facebook.png'; 
import firebaseConfig from './firebase.config';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../../App';
import NavBar from '../../Home/NavBar/NavBar';


firebase.initializeApp(firebaseConfig);

const Login = () => {
    const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    const [newUser, setNewUser] = useState(false);
    const location= useLocation();
    const history = useHistory();

    let {from}= location.state || { from: {pathname:"/"}};
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);  //firebase app name duplicate jeno na hoi tai  if used.
    }
    

    const handleBlur=(event) => {
        let isFormValid = true;
        if (event.target.name === 'email'){
            isFormValid = /\S+@\S+\.\S+/.test(event.target.value);          
        }
        // if (event.target.name === 'password'){
        //     const isPasswordValid = event.target.value.length > 6;
        //     const passwordHasNumber= /\d{1}/.test(event.target.value);
        //     isFormValid=(isPasswordValid && passwordHasNumber);   
                     
        // }
    
        if(isFormValid){
            // const newUserInfo = {...user};
            const newUserInfo = {...loggedInUser};
            newUserInfo[event.target.name]= event.target.value;
            // setUser(newUserInfo);
            setLoggedInUser(newUserInfo);
        }
    }
    

    // const [user, setUser]= useState({
    //     isSignedIn: false,
    //     name: '',
    //     email: '',
    //     password: '',
    // });
    // const [loggedInUser, setLoggedInUser]= useContext(UserContext);
    
    const handleSubmit=(e)=>{
        if(newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().createUserWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res=>{
                const {displayName, email} = res.user;
                const emailUser = {name: displayName, email: email};
                // const newUserInfo={...user};
                // const newUserInfo={...loggedInUser};
                // newUserInfo.error= '';
                // setUser(newUserInfo);
                setLoggedInUser(emailUser);
                updateUserName(loggedInUser.name);
                history.replace(from);
            })
            .catch(function(error) {
                // const newUserInfo={...user};
                const newUserInfo={...loggedInUser};
                newUserInfo.error= error.message;
                newUserInfo.success = false;
                // setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                
              });
        }

        if(!newUser && loggedInUser.email && loggedInUser.password){
            firebase.auth().signInWithEmailAndPassword(loggedInUser.email, loggedInUser.password)
            .then(res=>{
                const {displayName, email} = res.user;
                const emailUser = {name: displayName, email: email};
                // const newUserInfo={...user};
                // const newUserInfo={...loggedInUser};
                // newUserInfo.error= '';
                // setUser(newUserInfo);
                setLoggedInUser(emailUser);
                updateUserName(loggedInUser.name);
                history.replace(from);
            })
            .catch(function(error) {
                // const newUserInfo={...user};
                const newUserInfo={...loggedInUser};
                newUserInfo.error= error.message;
                newUserInfo.success = false;
                // setUser(newUserInfo);
                setLoggedInUser(newUserInfo);
                
              });
        }
        e.preventDefault();
        // history.replace(from);

    }
    //update user name
    const updateUserName = name => {
        const user = firebase.auth().currentUser;
    
        user.updateProfile({
          displayName: name
        }).then(function() {
          // Update successful.
        }).catch(function(error) {
          // An error happened.
        });
       }

    
    const handleGoogleLogin = () => {
        const googleProvider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(googleProvider)
        .then(res=>{
            const {displayName, email}= res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            // setUser(signedInUser);
            setLoggedInUser(signedInUser);
            history.replace(from);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            var email = error.email;
            var credential = error.credential;
          });

    }
    
    const handleFbLogin = () => {
        const fbProvider = new firebase.auth.FacebookAuthProvider();
        firebase.auth().signInWithPopup(fbProvider)
        .then(res=>{
            const {displayName, email}= res.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
            }
            // setUser(signedInUser);
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
            <h3>Login</h3>
            <br />
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" onClick={() => setNewUser(!newUser)} label="Click for Sign up & Login" />
            </Form.Group >
            <Form.Group >
                {newUser &&  <Form.Control type="name" name="name" className="form-control" onBlur={handleBlur} placeholder="Your name" required/> } 
            </Form.Group >

            <Form.Group  controlId="formBasicEmail">
                
                <Form.Control name="email" onBlur={handleBlur} type="email" placeholder="Username or Email" required />
            </Form.Group >
            <Form.Group  controlId="formBasicPassword">
                
                <Form.Control name='password' onBlur={handleBlur} type="password" placeholder="Password" required />
            </Form.Group >
            <Row>
                <Col >
                    <Form.Group  controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember Me" />
                    </Form.Group >
                </Col>
                <Col></Col>
                <Col>
                <a href="#forgot">Forgot Password</a>
                </Col>

            </Row>
            <Button variant="warning" type="submit">
                <h5>Login</h5>
            </Button>
           {/* <input variant="warning" type="submit" value="Submit"/> */}
            <p className="text-center">Don't have an account? <a name='newUser' href="/login">Create an account</a></p>
            </Form>
            
        </div>
        <p className="text-center">Or</p>
        <div id="anotherProcess">                
            <a onClick={handleFbLogin}>
                <div className="fb">
                    <img src={fb} alt="Facebook"></img>
                    <h5>Continue with Facebook</h5>
                </div>
            </a>
            <a onClick={handleGoogleLogin}>
                <div className="google">
                    <img src={google} alt="Google"></img>
                    <h5>Continue with Google</h5>
                </div>
            </a>
            
        </div>
    </div>
    );
};

export default Login;
