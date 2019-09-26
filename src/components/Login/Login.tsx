import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Typography, Form, Input, Button } from 'antd';


const { Title } = Typography;

interface Props {
}

interface State {
    email: string,
    password: string
}

export class Login extends Component<Props, State> {
    constructor(props: Props) {
        super(props)
        this.state = { 
                        email: '',
                        password: ''
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
                <Title level={2}>Log In</Title>
                <Form  className='login-form'>
                    <Form.Item>
                        <Input size='large' placeholder='E-mail used during registration' name='email' onChange={this.handleChange}/>
                    </Form.Item>
                    <Form.Item>
                        <Input size='large' type='password' placeholder='Password' name='password' onChange={this.handleChange} />
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

export default connect(mapStateToProps, mapDispatchToProps)(Login)
