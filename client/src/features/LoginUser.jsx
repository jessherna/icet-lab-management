import { Container, Form, Button } from 'react-bootstrap';
import { useState } from 'react';

const LoginUser = () => {
    const [alias, setAlias] = useState('');

    const handleAliasChange = (event) => {
        setAlias(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };

    return (
        <Container className="login-container">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="login-form-group" controlId="formAlias">
                    <Form.Label className="login-form-label">Welcome to the ICET Lab Management App</Form.Label>
                    <Form.Control className="login-form-control" type="text" placeholder="Please enter your name" value={alias} onChange={handleAliasChange} />
                </Form.Group>
                <Button className="login-button" variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    );
}

export default LoginUser;