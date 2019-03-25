import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import auth from '../Auth/Authentication';
 
class Login extends Component {
  render() {
    return (
        <div>            
            <div className="wrapper-page">
                <div className="card overflow-hidden account-card mx-3">
                    <div className="bg-primary p-4 text-white text-center position-relative">
                        <h4 className="font-20 m-b-5">Welcome Back !</h4>
                        <p className="text-white-50 mb-4">Sign in to continue to Veltrix.</p>
                        <Link to="/" className="logo logo-admin">
                            <img src="assets/images/logo-sm.png" height="24" alt="logo"/>
                        </Link>
                    </div>
                    <div className="account-card-content">
                        <form className="form-horizontal m-t-30" action="https://themesbrand.com/veltrix/layouts/vertical/index.html">
                            <div className="form-group">
                                <label htmlFor="username">Username</label>
                                <input type="text" className="form-control" id="username" placeholder="Enter username"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="userpassword">Password</label>
                                <input type="password" className="form-control" id="userpassword" placeholder="Enter password"/>
                            </div>
                            <div className="form-group row m-t-20">
                                <div className="col-sm-6">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customControlInline"/>
                                        <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                                    </div>
                                </div>
                                <div className="col-sm-6 text-right">
                                    <button className="btn btn-primary w-md waves-effect waves-light" onClick={ () => {
                                        auth.login( () => {
                                            this.props.history.push("/admin");
                                        });                                        
                                    }}>Log In</button>
                                </div>
                            </div>
                            <div className="form-group m-t-10 mb-0 row">
                                <div className="col-12 m-t-20">
                                    <Link to="/admin">
                                        <i className="mdi mdi-lock"></i> 
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>
                        </form>
                    </div>                    
                </div>
                <div className="m-t-40 text-center">
                    <p>Don't have an account ? <a href="pages-register.html" className="font-500 text-primary">Signup now</a></p>
                    <p>© 2019 Veltrix. Crafted with <i className="mdi mdi-heart text-danger"></i> by Themesbrand</p>
                </div>
            </div>
      </div>
    )
  }
}

export default Login
