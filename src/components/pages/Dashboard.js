import React, { Component } from 'react'
import Heading from '../layout/Heading'

class Dashboard extends Component {
  render() {
    return (
      <React.Fragment>
        <Heading 
          btnTxt="Add"
          btnNavLink="/"
          iconTxt="fas fa-plus"
          pageHeader="Dashboard"
          pageSubHeader="The most relevant information is available right here."
        />
        <div className="row">
            <div className="col-md-12">
                <div className="card">
                    <div className="card-body">
                        <h4 className="mt-0 header-title">Responsive tables</h4>
                        <p className="text-muted m-b-30">
                          Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code> to make them scroll horizontally on small devices (under 768px).
                        </p>
                        <div className="table-responsive">
                            Dashboard Page
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard
