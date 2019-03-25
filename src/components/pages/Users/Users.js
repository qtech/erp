import React, { Component } from 'react'
import Heading from '../../layout/Heading'

class Users extends Component {
  render() {
    return (
      <React.Fragment>
            <Heading
                btnTxt="Add"
                btnNavLink="/"
                iconTxt="fas fa-plus"
                pageHeader="Users List"
                pageSubHeader="List of all users in the system and their relevant information."
            />
            <div className="row">
                <div className="col-lg-12">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="mt-0 header-title">Responsive tables</h4>
                            <p className="text-muted m-b-30">Create responsive tables by wrapping any <code>.table</code> in <code>.table-responsive</code> to make them scroll horizontally on small devices (under 768px).</p>
                            <div className="table-responsive">
                                <table className="table mb-0">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>Table heading</th>
                                            <th>Table heading</th>
                                            <th>Table heading</th>
                                            <th>Table heading</th>
                                            <th>Table heading</th>
                                            <th>Table heading</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                            <td>Table cell</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </React.Fragment>
    )
  }
}

export default Users
