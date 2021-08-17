import react from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
import  './main.css';

class Main extends react.Component {

    render() {

        return (

            <>
                <div className='cardData'>
                    {
                        this.props.showlocdata
                        &&
                        <Card  style={{ width: '28rem' }}>
                        <Card.Img   src={this.props.mapData} />
                        <Card.Body>
                            <Card.Title>{this.props.city}</Card.Title>
                            <Card.Text>
                            Longitude: {this.props.lon}<br/>Latitude: {this.props.lat}
                            </Card.Text>
                            <Button onClick={this.props.hidelocdata} variant="primary">Close </Button>
                        </Card.Body>
                    </Card>

                    }
                </div>
            </>
        )
    }
}
export default Main