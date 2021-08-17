import react from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class form extends react.Component {



    render() {
        return (
            <div className='form'>
                <Form onSubmit={this.props.getlocation}>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control name='city' type="text" placeholder="city name" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Explore!
                    </Button>

                </Form>

            </div>
        )
    }
}
export default form