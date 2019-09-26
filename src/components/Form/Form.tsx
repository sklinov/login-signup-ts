import React, { Component } from 'react'
import { SignUp } from '../SignUp/SignUp'
import { Login } from '../Login/Login'
import { FormSwitcher } from '../FormSwitcher/FormSwitcher'
import { Row, Col } from 'antd';

interface Labels {
    header: string,
    buttonLabel: string
}

interface FormProps {
    
}

interface FormState {
    showLogin: boolean
}


export default class Form extends Component<FormProps, FormState> {

    state:FormState = {showLogin:true}
    
    loginLabels:Labels = {
        header: 'Are you here for the first time?',
        buttonLabel: 'Sign Up'
    }

    signUpLabels:Labels = {
        header: 'Already registered?',
        buttonLabel: 'Log In'
    }

    switchForm = (): void => {
        this.setState( {showLogin: !this.state.showLogin})
    }

    render() {
        const labels:Labels = this.state.showLogin ? this.loginLabels : this.signUpLabels;

        return (
            <div>
                <Row type="flex" justify="space-around">
                    <Col span={8}>
                        { this.state.showLogin ? <Login /> : <SignUp /> }
                        <FormSwitcher labels={labels} onSwitch={this.switchForm}/>
                    </Col>
                </Row>
            </div>
        )
    }
}
