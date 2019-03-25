import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Sidebar extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isOpen:false
      }
    }

    showDropDown = (e) => {
        e.preventDefault();
        this.setState( prevState => ({
            isOpen:!prevState.isOpen
        }))
    }
    

  render() {
    const liDropDownClass = this.state.isOpen ? 'active' : '';
    const ulDropDownClass = this.state.isOpen ? ' in' : '';

    return (        
        <React.Fragment>
            {/* <!-- ========== Left Sidebar Start ========== --> */}
            <div className="left side-menu">
                <div className="slimscroll-menu" id="remove-scroll">
                    {/* <!--- Sidemenu --> */}
                    <div id="sidebar-menu">
                        {/* <!-- Left Menu Start --> */}
                        <ul className="metismenu" id="side-menu">
                            <li className="menu-title">Main</li>
                            <li>
                                <NavLink to="/admin/dashboard" className="waves-effect">
                                    <i className="ti-home"></i>
                                    <span className="badge badge-primary badge-pill float-right">2</span>
                                    <span>Dashboard</span></NavLink>
                            </li>
                            <li className={liDropDownClass}>
                                <a href="/" onClick={(e) => this.showDropDown(e)} className="waves-effect">
                                    <i className="ti-email"></i>
                                    <span> Email
                                            <span className="float-right menu-arrow">
                                            <i className="mdi mdi-chevron-right"></i>
                                        </span>
                                    </span>
                                </a>
                                <ul className={'submenu collapse' + ulDropDownClass}>
                                    <li><a href="email-inbox.html">Inbox</a></li>
                                    <li><a href="email-read.html">Email Read</a></li>
                                    <li><a href="email-compose.html">Email Compose</a></li>
                                </ul>
                            </li>
                            <li>
                                <NavLink to="/admin/users" className="waves-effect">
                                    <i className="ti-calendar"></i>
                                    <span>Users</span>
                                </NavLink>
                            </li>                            
                        </ul>
                    </div>
                    {/* <!-- Sidebar --> */}
                    <div className="clearfix"></div>
                </div>
                {/* <!-- Sidebar -left --> */}
            </div>

            {/* <!-- Left Sidebar End -->*/}
        </React.Fragment>
    )
  }
}

export default Sidebar
