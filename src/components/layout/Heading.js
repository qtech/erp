import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Heading extends Component {
  render() {
    return (
        <React.Fragment>
            <div className="row align-items-center heading-component">
                <div className="col-sm-6">
                    <h4 className="page-title">{this.props.pageHeader}</h4>
                    <small>{this.props.pageSubHeader}</small>
                </div>
                <div className="col-sm-6">
                    <div className="float-right d-none d-md-block">
                        <div className="dropdown">
                            <NavLink to={this.props.btnNavLink} className="btn btn-primary waves-effect waves-light">
                                <i className={this.props.iconTxt}></i> {this.props.btnTxt}
                            </NavLink>                                                       
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
  }
}

export default Heading
