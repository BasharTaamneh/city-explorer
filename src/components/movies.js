import react from 'react'
import Card from 'react-bootstrap/Card'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/esm/Button';
class Movies extends react.Component {

    render() {

        return (

            <>
                <div className='cardMoviesData'>

                    {
                        this.props.showlocdata
                        &&
                        this.props.MoviesData.map((item, idx) => {
                            return (
                                <Card key={idx} style={{ width: '16rem' }}>
                                    <Card.Body >
                                        <Card.Img src={item.src}/><hr/>
                                        <Card.Text> Movie name: {item.title}</Card.Text>
                                
                                    </Card.Body>
                                </Card>
                                
                            )
                        })
                    }
                </div>
                {<a href=".header"> <Button onClick={this.props.hidelocdata} variant="primary">Close </Button></a>}
               
            </>
        )
    }
}
export default Movies