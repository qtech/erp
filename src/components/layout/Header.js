import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import auth from '../Auth/Authentication'

class Header extends Component {
    logout = (e) => {
        e.preventDefault();
        auth.logout( () => {
            this.props.history.push("/login");
        });
    }

  render() {
    return (
        <React.Fragment>        
            {/* <!-- Top Bar Start --> */}
            <div className="topbar">
                {/* <!-- LOGO --> */}
                <div className="topbar-left">
                    <Link to="/admin" className="logo">
                        <span>
                            <img src="/assets/images/logo-light.png" alt="" height="18" />
                        </span>
                        <i>
                            <img src="/assets/images/logo-sm.png" alt="" height="22" />
                        </i>
                    </Link>
                </div>
                <nav className="navbar-custom">
                    <ul className="navbar-right d-flex list-inline float-right mb-0">
                        <li className="dropdown notification-list">
                            <Link className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" to="/admin" role="button" aria-haspopup="false" aria-expanded="false">
                                <i className="mdi mdi-bell-outline noti-icon"></i>
                                <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
                            </Link>
                            <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                                {/* <!-- item--> */}
                                <h6 className="dropdown-item-text">Notifications (258)</h6>
                                <div className="slimscroll notification-item-list">
                                    {/* <!-- item--> */}
                                    <Link to="/admin" className="dropdown-item notify-item active">
                                        <div className="notify-icon bg-success">
                                            <i className="mdi mdi-cart-outline"></i>
                                        </div>
                                        <p className="notify-details">Your order is placed
                                            <span className="text-muted">
                                            Dummy text of the printing and typesetting industry.
                                            </span>
                                        </p>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li className="dropdown notification-list">
                            <div className="dropdown notification-list nav-pro-img">
                                <Link className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown"
                                    to="/admin" role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="/assets/images/users/user-4.jpg" alt="user" className="rounded-circle" />
                                </Link>
                                <div className="dropdown-menu dropdown-menu-right profile-dropdown">
                                    {/* <!-- item--> */}
                                    <Link className="dropdown-item" to="/admin">
                                        <i className="mdi mdi-account-circle m-r-5"></i> Profile
                                        </Link>
                                    <Link className="dropdown-item" to="/admin">
                                        <i className="mdi mdi-wallet m-r-5"></i> My Wallet
                                        </Link>
                                    <Link className="dropdown-item d-block" to="/admin">
                                        <span className="badge badge-success float-right">11</span>
                                        <i className="mdi mdi-settings m-r-5"></i> Settings
                                        </Link>
                                    <Link className="dropdown-item" to="/admin">
                                        <i className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen
                                        </Link>
                                    <div className="dropdown-divider"></div>
                                    <a onClick={this.logout} className="dropdown-item text-danger" href="index.html">
                                        <i className="mdi mdi-power text-danger"></i>Logout
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
            {   /* <!-- Top Bar End --> */}        
        </React.Fragment>
    )
  }
}

export default Header
