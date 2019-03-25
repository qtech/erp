import React, { Component } from 'react'
import { Redirect, Switch } from 'react-router-dom'
import Header from './Header';
import Sidebar from './Sidebar';
import { ProtectedRoute } from '../Auth/ProtectedRoute';
import Dashboard from '../pages/Dashboard'
import Users from '../pages/Users/Users'
import '../../scss/style.scss'

class Main extends Component {    
  render() {
    return (
        <div>
            {/* <!-- Begin page --> */}
            <div id="wrapper">
                <Header {...this.props} />
                <Sidebar/>
                {/* <!-- ============================================================== -->
                <!-- Start right Content here -->
                <!-- ============================================================== -->  */}
                <div className="content-page">
                    {/* <!-- Start content --> */}
                    <div className="content">
                        <div className="container-fluid">
                            <div className="page-title-box">      
                            <Switch>
                                <ProtectedRoute path="/admin/dashboard" component={Dashboard}/>
                                <ProtectedRoute path="/admin/users" component={Users}/>     

                                <Redirect from="/admin" to="/admin/dashboard"/>
                            </Switch>                                                          
                            </div>
                            {/* <!-- end row --> */}
                        </div>
                        {/* <!-- container-fluid --> */}
                    </div>
                    {/* <!-- content --> */}
                </div>        
            </div>
            {/* <!-- END wrapper --> */}
        </div>
    )
  }
}

export default Main
