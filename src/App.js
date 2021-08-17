import react from 'react'
import Form from './components/form'
import Header from './components/Header'
import Main from './components/main'
import Foter from './components/Foter'
import axios from 'axios';

class App extends react.Component {

  constructor(props) {
    super(props);
    this.state = {

      city: {},
      cityData: [],
      mapData:[],
      showlocdata: false

    }
  }

  getlocation = async (e) => {
    e.preventDefault();

    await this.setState({
       
      city: e.target.city.value ,
  
    });

    console.log('city is= ', this.state.city);

    let locURL = `https://eu1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&q=${this.state.city}&format=json`;

    let data = await axios.get(locURL)

    await  this.setState({
      cityData: data.data[0]
    })
    console.log('citydata is= ', this.state.cityData);


    let mapURL = `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_LOCATIONIQ_KEY}&center=${this.state.cityData.lat},${this.state.cityData.lon}&zoom=17&size=600x600&format=png&maptype=%3CMapType%3E&markers=icon:large-green-cutout|${this.state.cityData.lat},${this.state.cityData.lon}`;

    await this.setState({
      mapData: mapURL
    })
    console.log('mapData is= ', this.state.mapData);
    
    this.setState({
      showlocdata: true
    })
  }

  hidelocdata=()=>{
    this.setState({
      showlocdata: false
    })
  }

  
  render() {
    return (
      <>
        <div className='body'>
          <Header />
          <Form getlocation={this.getlocation} />
          <Main mapData={this.state.mapData} hidelocdata={this.hidelocdata} city={this.state.city} showlocdata={this.state.showlocdata} lat={this.state.cityData.lat} lon={this.state.cityData.lon} />
          <Foter/>
        </div>
      </>
    )
  }
}
export default App