import React, {useRef,useState,useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./Login.scss"



const Login = () => {
    const userRef=useRef();
    const errRef=useRef();
    const [user,setUser]=useState('');
    const [pwd,setpwd]=useState('');
    const[errMsg,setErrMsg]=useState("");
    const [success,setSuccess]=useState(false);
    useEffect(()=>{
        userRef.current.focus();
    },[])
    useEffect(()=>{
        setErrMsg('')
    },[user,pwd])
const handleSubmit=async(e)=>{
    e.preventDefault();
    setUser('')
    setpwd('')
    setSuccess(true)
}
  return (
    <div className='login'>
    {success? (<section>
        <h1>You are logged in!</h1><br/>
        <Link to="/home"><li>Home</li></Link>
    </section>):(
         <section>
        <p ref={errRef} className={errMsg ? "errmsg":"offscreen"} aria-live="assertive">{errMsg}</p>
        <h1>Log  In</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="userName">Username:</label>
            <input type="text" id='username' ref={userRef} 
            onChange={(e)=>setUser(e.target.value)} value={user} required />
             <label htmlFor="password">Password:</label>
            <input type="password" id='password' ref={userRef} 
            onChange={(e)=>setpwd(e.target.value)} value={user} required />
            <button>Log In</button>
        </form>
    </section>)}
    </div>
    )}

export default Login