import React from 'react'
import { Link } from 'react-router-dom';
import withContext from '../../withContext';

const Login = (context) => {
    const handleChange = (e) => {
        e({[e.target.name] : e.target.value, error: ""});
    }
    
    let error;
    const login = (e) => {
        e.preventDefault();
        let username, password;
        if(!username || !password){
            return ({error: "Fill all Fields!!!"});
        }
        context.login(username, password).then((loggedIn) => {
            if(!loggedIn){
                return {error: "Invalid Credentails"}
            }
        })
    }
  return !context.user ?(
    <div>
        <div>
            <div className="container">
                <h4>Login</h4>
            </div>
        </div>
        <br />
        <form action="submit" onSubmit={login}>
            <div>
                <div className="field">
                    <label>Email :</label>
                    <input 
                    className='input'
                    type="email"
                    name='username'
                    onChange={handleChange} />
                </div>
                <div className="field">
                    <label>Password :</label>
                    <input 
                    className='input'
                    type="password" 
                    name='password'
                    onChange={handleChange}/>
                </div>
                {error && (
                    <div className="error_text">{error}</div>
                )}
                <div className="clearfield">
                    <button className='btn'>Submit</button>
                </div>
            </div>
        </form>
    </div>
  ) : (
    <Link to="/products" />
  );
}

export default Login