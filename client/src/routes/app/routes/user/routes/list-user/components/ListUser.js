import React, { Component } from 'react';
import { connect } from 'react-redux';
import QueueAnim from 'rc-queue-anim';

//Material UI Component
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn, TableFooter} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';

//Material Icon
import FilterListIcon from 'material-ui/svg-icons/action/lock';

class ListUser extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openDialog: false,
        }
    }


    handleChangePassword = () => {
        this.setState({ 
            openDialog: true,
        });
    }

    handleDialogClose = () => {
        this.setState({ openDialog: false });
    }

    render() {
        const actions = [
            <RaisedButton
              label="Cancel"
              primary={true}
              style={{ marginRight: 10 }}
              onClick={this.handleDialogClose}
            />,
            <RaisedButton
              label="Submit"
              secondary
              onClick={this.handleDialogClose}
            />,
        ];
        return (
            <div className="col-md-12" style={{marginTop: '2%'}}>
                <div className="box-default">
                    <div className="box-body" style={{height: '100%'}}>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h5 style={{color: '#0C90CF', fontWeight: 'bold'}}>MY INFORMATION</h5>
                            <div>
                                <RaisedButton
                                    label="CHANGE PASSWORD"
                                    labelPosition="after"
                                    icon={<FilterListIcon />}
                                    primary
                                    onClick={this.handleChangePassword}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-3 col-md-6">
                                <div className="box box-default">
                                    <div className="box-body">
                                        <div className="icon-box ibox-small ibox-plain">
                                            <div className="ibox-icon">
                                                <a href="javascript:;"><i className="material-icons">monetization_on</i></a>
                                            </div>
                                            <h3>BALANCE</h3>
                                            <p>2600 Kcoin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="box box-default">
                                    <div className="box-body">
                                        <div className="icon-box ibox-small ibox-plain">
                                            <div className="ibox-icon">
                                                <a href="javascript:;"><i className="material-icons">arrow_downward</i></a>
                                            </div>
                                            <h3>KCOIN IN</h3>
                                            <p>1000 Kcoin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="box box-default">
                                    <div className="box-body">
                                        <div className="icon-box ibox-small ibox-plain">
                                            <div className="ibox-icon">
                                                <a href="javascript:;"><i className="material-icons">arrow_upward</i></a>
                                            </div>
                                            <h3>KCOIN OUT</h3>
                                            <p>500 Kcoin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-xl-3 col-md-6">
                                <div className="box box-default">
                                    <div className="box-body">
                                        <div className="icon-box ibox-small ibox-plain">
                                            <div className="ibox-icon">
                                                <a href="javascript:;"><i className="material-icons">attach_money</i></a>
                                            </div>
                                            <h3>SALARY</h3>
                                            <p>500 Kcoin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="box-body" style={{height: '100%'}}>
                        <h5 style={{color: '#0C90CF', fontWeight: 'bold'}}>KCOIN OUT NEARLY</h5>
                        <Table fixedHeader={true}>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>Transaction ID</TableHeaderColumn>
                                    <TableHeaderColumn>Dest Address</TableHeaderColumn>
                                    <TableHeaderColumn>Kcoin Amount</TableHeaderColumn>
                                    <TableHeaderColumn>Description</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableRowColumn>1</TableRowColumn>
                                    <TableRowColumn>f45802bd527b6425a3a25cbc73ce324fefa9c6445cfe053e0f1412ff796b77f0</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin Out</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>2</TableRowColumn>
                                    <TableRowColumn>f45802bd527b6425a3a25cbc73ce324fefa9c6445cfe053e0f1412ff796b77f0</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin Out</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>3</TableRowColumn>
                                    <TableRowColumn>f45802bd527b6425a3a25cbc73ce324fefa9c6445cfe053e0f1412ff796b77f0</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin Out</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>4</TableRowColumn>
                                    <TableRowColumn>f45802bd527b6425a3a25cbc73ce324fefa9c6445cfe053e0f1412ff796b77f0</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin Out</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>f45802bd527b6425a3a25cbc73ce324fefa9c6445cfe053e0f1412ff796b77f0</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin Out</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <div className="box-body" style={{height: '100%'}}>
                        <h5 style={{color: '#0C90CF', fontWeight: 'bold'}}>KCOIN IN NEARLY</h5>
                        <Table fixedHeader={true}>
                            <TableHeader>
                                <TableRow>
                                    <TableHeaderColumn>Transaction ID</TableHeaderColumn>
                                    <TableHeaderColumn>Source Address</TableHeaderColumn>
                                    <TableHeaderColumn>Kcoin Amount</TableHeaderColumn>
                                    <TableHeaderColumn>Description</TableHeaderColumn>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <TableRow>
                                    <TableRowColumn>1</TableRowColumn>
                                    <TableRowColumn>6445cfe053e0f1412ff796b77f0f45802bd527b6425a3a25cbc73ce324fefa9c</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin In</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>2</TableRowColumn>
                                    <TableRowColumn>6445cfe053e0f1412ff796b77f0f45802bd527b6425a3a25cbc73ce324fefa9c</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin In</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>3</TableRowColumn>
                                    <TableRowColumn>6445cfe053e0f1412ff796b77f0f45802bd527b6425a3a25cbc73ce324fefa9c</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin In</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>4</TableRowColumn>
                                    <TableRowColumn>6445cfe053e0f1412ff796b77f0f45802bd527b6425a3a25cbc73ce324fefa9c</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin In</TableRowColumn>
                                </TableRow>
                                <TableRow>
                                    <TableRowColumn>5</TableRowColumn>
                                    <TableRowColumn>6445cfe053e0f1412ff796b77f0f45802bd527b6425a3a25cbc73ce324fefa9c</TableRowColumn>
                                    <TableRowColumn>100</TableRowColumn>
                                    <TableRowColumn>Kcoin In</TableRowColumn>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </div>

                    <Dialog
                        title="Change Password"
                        open={this.state.openDialog}
                        onRequestClose={this.handleDialogClose}
                        actions={actions}
                    >
                        <TextField
                            hintText="Current Password"
                            floatingLabelText="Current Password"
                            type="password"
                            fullWidth={true}
                        />

                        <TextField
                            hintText="New Password"
                            floatingLabelText="New Password"
                            type="password"
                            fullWidth={true}
                        />

                        <TextField
                            hintText="Confirm New Password"
                            floatingLabelText="Confirm New Password"
                            type="password"
                            fullWidth={true}
                        />
                    </Dialog>

                </div>
            </div>    
        )
    }
}

export default ListUser;