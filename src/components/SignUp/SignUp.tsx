import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Form, Input, Button } from 'antd';
const { Title } = Typography;

interface Props {
    
}
interface State {
    email: string,
    password: string,
    confirmPassword: string,
    name: string
}

export class SignUp extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { 
                        email: '',
                        password: '',
                        confirmPassword: '',
                        name: ''
                    }
    }

    handleChange = (e:React.FormEvent<HTMLInputElement>):void => {
        e.preventDefault()
        const { name, value } = e.currentTarget;
        this.setState({ [name] : value } as Pick<State, keyof State> );
    }

    render() {
        return (
            <div>
               <Title level={2}>Sign Up</Title>
                <Form  className='login-form'>
                    <Form.Item>
                        <Input size='large' placeholder='Enter your email' name='email' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' placeholder='Enter your password' type='password' name='password' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' placeholder='Confirm password' type='password' name='confirmPassword' onChange={this.handleChange} />
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' placeholder='Enter your name' name='name' onChange={this.handleChange} />
                    </Form.Item>
        
                    <Form.Item>
                        <Button size='large' type='primary' block>
                            Log In
                        </Button>
                    </Form.Item>
                </Form> 
            </div>
        )
    }
}

const mapStateToProps = () => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
