import React from 'react'
import propTypes from 'prop-types'
import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import '../../pages/entry/entry.style.css'

export const ResetPassword = ({ handleOnChange, handleOnResetSubmit,formSwitcher, email}) => {
  return (
    <div>
        <Container className='form'>
            <Row className='px-3'>
                <Col>
                <h1 className='text-info text-center'>Reset Password</h1>
                <hr/>
                <Form autoComplete='off' onSubmit={handleOnResetSubmit}>
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
                   
                    
                    <Button type="submit" className='mt-2'>Reset</Button>
                </Form>
                <hr/>
                </Col>
            </Row>

            <Row>
                <Col>
                    <a href='#!' onClick={() => formSwitcher('login')} className='text-decoration-none text-info'>Login Now?</a>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

ResetPassword.propTypes = {
    handleOnChange: propTypes.func.isRequired,
    handleOnResetSubmit: propTypes.func.isRequired,
    formSwitcher:propTypes.func.isRequired,
    email:propTypes.string.isRequired,
}

