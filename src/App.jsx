import { useFormik } from 'formik';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import MyContext from './Context/MyContext';


const App = () => {
  const navigate=useNavigate();
  const {setIsLoggedIn}= useContext(MyContext)
  const formik= useFormik(
{
  initialValues:{
    email:"",
    password:""
  },
  onSubmit:({email, password}, {resetForm}) =>{
   
    if(email === "ssubash042@gmail.com" && password === "123")
     { alert("Login Successful");
      setIsLoggedIn(true);
    navigate("/game");}
    else
      alert("Login Failed");
    resetForm({
      email:"",
      password:""
    } )
  },
  validationSchema: yup.object({
    email: yup.string().required("Email is required").email(("Invalid Email")),
    password: yup.string().required("Password is required")
  }),
  });

  return (
    
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="d-flex align-items-center justify-content-center" style={{height: "100vh", backgroundColor:"#282828"}}>
          <form className='p-5 m-5 w-35' style={{ backgroundColor: "#F0F0F0"}} onSubmit={formik.handleSubmit}>
  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    
    <input type="email" 
    className="form-control" 
    id="exampleInputEmail1"  
    {...formik.getFieldProps("email")} 
    />
    {formik.touched.email && formik.errors.email ? (
        <div className='text-danger'>{formik.errors.email} </div>
       ):null } 

    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" {...formik.getFieldProps("password")} />
    {formik.touched.password && formik.errors.password ? (
        <div className='text-danger'>{formik.errors.password} </div>
       ): null } 

  </div>
  
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;