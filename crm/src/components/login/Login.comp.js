import React from 'react'
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import '../../pages/entry/entry.style.css'

export const LoginForm = ({ handleOnChange, handleOnSubmit,formSwitcher, email, pass}) => {
  return (
    <div>
        <Container className='form'>
            <Row className='px-3'>
                <Col>
                <h1 className='text-info text-center'>Member Login</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnSubmit}>
                    <Form.Group>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control 
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter Email"
                        required
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                        type="password"
                        name="password"
                        value={pass}
                        onChange={handleOnChange}
                        placeholder="Enter Password"
                        required
                        />
                    </Form.Group>
                    
                    <Button type="submit" className='mt-2'>Login</Button>
                </Form>
                <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href='#!' onClick={() => formSwitcher('reset')} className='text-decoration-none text-info'>Forget Password?</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

LoginForm.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    handleOnSubmit: propTypes.func.isRequired,
    formSwitcher : propTypes.func.isRequired,
    email :propTypes.string.isRequired,
    pass:propTypes.string.isRequired,
}

