import React from 'react'
import Form from '../../components/form'
import Container from '../../components/container/container';
import {setUser} from '../../infra/local-storage'

// function Login() {
//     return (
//         <Container>
//             <Form title='Login' text='Entre com seu e-mail e senha.'>
//                 <Form.Label htmlFor='email'>Email:</Form.Label>
//                 <Form.Input type='email' id='email' placeholder='Email' required/>
//                 <Form.Label htmlFor='password'>Senha:</Form.Label>
//                 <Form.Input type='password' id='password' placeholder='Senha' minLength={6} required/>
//                 <Form.Button disabled>Enviar</Form.Button>
//                 <Form.Link href='#' id='link'>Criar uma conta</Form.Link>
//             </Form>
//         </Container>
//     )   
// }

class Login extends React.Component {
    constructor() {
        super()
        this.state = {
            disabled: true
        }
        this.email = React.createRef()
        this.password = React.createRef()
    }
    onDisabledButton = () => {
        const inputEmail =  this.email.current
        const inputPassword = this.password.current

        if(inputEmail.hasError() || inputPassword.hasError()){
            this.setState({
                disabled: true
            }) 
        } else {
            this.setState({
                disabled: false
            })
        }
    }
    handleSubmit = (e) => {
        e.preventDefault()
        const inputEmail = this.email.current
        const inputPassword = this.password.current
        const user = {
            email: inputEmail.getValue(),
            password: inputPassword.getValue()
        }
        setUser(user)
        this.props.history.push('/')
    }
    render() {
        return (
            <Container>
                <Form title='Login' text='Entre com seu e-mail e senha.' onSubmit={this.handleSubmit}>
                    <Form.Label htmlFor='email'>Email:</Form.Label>
                    <Form.Input ref={this.email} type='email' id='email' placeholder='Email' onChange={this.onDisabledButton} required/>
                    <Form.Label htmlFor='password'>Senha:</Form.Label>
                    <Form.Input ref={this.password} type='password' id='password' placeholder='Senha' minLength={6} onChange={this.onDisabledButton} required/>
                    <Form.Button disabled={this.state.disabled}>Enviar</Form.Button>
                    <Form.Link href='/conta' id='link'>Criar uma conta</Form.Link>
                </Form>
            </Container>
        )
    }
}

export default Login