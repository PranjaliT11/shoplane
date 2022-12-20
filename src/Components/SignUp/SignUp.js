import './SignUp.css';
import {Formik,Form,Field} from 'formik-yup';
import React, { useState } from 'react';
import * as Yup from 'formik-yup';
import {useNavigate} from 'react';
import {Link} from 'react-router-dom';


function SignUp(){

    let navigate= useNavigate();
    const [formData] = useState({
        name : '',
        lastname : '',
        email : '',
        password : '',
        confirmpassword : ''

    });

    let handleSubmit = (val)=>{
        console.log(val);
        alert("Congratulations!!! you have successfully sign up.")
        navigate('/login', true)
    }

    let LoginSchema = Yup.object().shape({
        name : Yup.string()
        .required("Please provide a name")
        .min(3,"minimum characters are 3"),

        lastname : Yup.string()
        .required("please provide a lastname")
        .min(3,"minimum 3 characters are required"),

        email: Yup.string()
       .required("please enter email")
       .email("Invailed Email"),

       confirmpassword: Yup
       .string()
       .required('Confirm Password is required')
       .oneOf([Yup.ref('password'), null], 'Password must match'),

       password : Yup.string()
       .required("Password is required")
       .min(8,"Password should not be less than 8 characters")
       .max(30,"password is too long")
       .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,}$/,
       "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character")
   


    });
    return(
        <div className="page-section">
            <div className="form-section">
                <h1>Sign Up</h1>
                <Formik initialValues={formData} validationSchema={LoginSchema}>
                    {({errors})=>(<Form  id="form" method="post">
                        <Field id="firstname" name="name" type="text"placeholder="First Name"/>
                        <span>{errors.name}</span>
                        <Field id="lastname" name="lname" type="text"placeholder="Last Name"/>
                        <span>{errors.lname}</span>
                        <Field id="email" name="email" type="email"placeholder="Email"/>
                        <span>{errors.email}</span>
                        <Field id="password" name="password" type="password"placeholder="Password"/>
                        <span>{errors.password}</span>
                        <Field id="confirmpassword" name="confirmpassword" type="password"placeholder="Confirm Pssword"/>
                        <span>{errors.confirmpassword}</span>
                        <p>Already have an account! Login<Link to='/login'>here</Link></p>

                        <button onClick={handleSubmit} id="formsubmit" className="button-submit" type="button"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-add" viewBox="0 0 16 16">
  <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0Zm-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/>
  <path d="M8.256 14a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Z"/>
</svg>Sign Up</button>
                    </Form>)
                    }
                </Formik>
            </div>

        </div>
    )
}
export default SignUp;