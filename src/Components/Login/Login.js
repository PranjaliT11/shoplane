import React, { useState } from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
import {Formik ,Form,Field} from 'formik';
import {useNavigate} from 'react-router-dom';
import * as Yup from 'formik-yup'
import { useState } from 'react';


function Login(){

    let navigate = useNavigate();

    const [formData]=useState({
        email : '',
        password : ''
    });
   
    let handleSubmit = (val)=>{
        console.log(val);
        alert("congratulations! you have successfully login")
        navigate("/", true)
    }

    const LoginSchema = Yup.object().shape({
        email : Yup.string().required("Please provide a valid email")
        .email("invalid email"),

        password : Yup.string().required("Please provie a valid password")
        .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
                  "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
       
       .max(30, "password is too long!")
  )



    })

    return(
        <div className="page-section">
            <div className="form-section">
                <h1>Login</h1>
                <Formik initialValues={formData} validationSchema={LoginSchema}  >
                                {({errors})=>(<Form id="form" method='post'>
                               <Field  id="email"name="email"type="email"placeholder="Email Address"/>
                            <span>{errors.email}</span>
                               <Field  id="password"name="password"type="password"placeholder="Password"/>
                            <span>{errors.password}</span>
                            <p> Don't have an account? Sign up <Link to='/signup'>here.</Link></p>
                            <button onClick={handleSubmit} id="form-submit" className="button-login" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-in-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M10 3.5a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 1 1 0v2A1.5 1.5 0 0 1 9.5 14h-8A1.5 1.5 0 0 1 0 12.5v-9A1.5 1.5 0 0 1 1.5 2h8A1.5 1.5 0 0 1 11 3.5v2a.5.5 0 0 1-1 0v-2z"/>
                                <path fill-rule="evenodd" d="M4.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H14.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3z"/>
                                 </svg>Login</button>
                                </Form>)}
                              </Formik>


            </div>

        </div>
    )
}
export default Login