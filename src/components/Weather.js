import react from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';

class Weather extends react.Component {

    render() {

        return (

            <>
                <div className='cardWetherData'>

                    {
                        this.props.showlocdata
                        &&
                        this.props.WeatherData.map((item, idx) => {
                            return (
                                <Card key={idx} style={{ width: '28rem' }}>
                                    <Card.Body className={`card${idx}`}>
                                        <Card.Text>Date: {item.date}</Card.Text>
                                        <hr/>
                                        <Card.Text> Wether Description: {item.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            )
                        })
                    }
                </div>
            </>
        )
    }
}
export default Weather