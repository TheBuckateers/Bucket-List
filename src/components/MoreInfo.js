import { Component } from "react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
// import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
// import Form from "react-bootstrap/Form";
// import Card from "react-bootstrap/Card";
import Spinner from "../components/UI/Spinner";
import axios from 'axios';
import {
  getAdvisoryByCode,
  getCountryEnviro,
  getMealsByArea,
  getCountryPics,
} from "../helpers/DataHelpers";

import Pollution from "../components/Pollution.js";
import BucketListModal from "../components/BucketListModal";
import Advisory from "../components/UI/Advisory.js";


const SERVER = process.env.REACT_APP_BACKEND_SERVER;

// import "./MoreInfo.css";
class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      showModal: false,
      isLoading: false,
      country: this.props.location.state.country,
      countryAdvisory: {},
      countryPollution: {},
      countryWeather: {},
      countryMeals: {},
      countryPics: {},
    };
  }

  // shows the notes modal
  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  // closes the notes modal
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  }

  // adds a note when the note modal is open
  handleAdd = async (note) => {
    try {
      let response = await axios.post(`${SERVER}/bucketList`, note);
      console.log('are we there yet?');
      console.log(response.data);
      this.setState({
        notes: [...this.state.notes, response.data],
      })
    }
    catch (err) {
      console.log(err);
    }
  }


  componentDidMount = async () => {
    const { country } = this.state;
    this.setState({ isLoading: true });
    // Stores the country code to a const to use in other parts of function
    try {
      const countryCode = country.alpha2Code;
      // calls helper function to get advisory for country by code
      const advisory = await getAdvisoryByCode(countryCode);
      this.setState({ countryAdvisory: advisory[countryCode] });
    } catch (err) {
      console.log("Advisory: ", err.message);
    }

    // calls helper function to get meals available for this country region. Comes from the country object property of 'demonym'
    try {
      const region = country.demonym;
      // calls helper function to get list of all meals by region of country
      const regionMeals = await getMealsByArea(region);
      this.setState({ countryMeals: regionMeals });
    } catch (err) {
      console.log("Meals: ", err.message);
    }

    // calls helper function to get pollution/weather info
    // result has a current object which contains a pollution and a weather object which each contains the data related to that subject. ie. <variable>.current.weather or .pollution
    try {
      const enviro = await getCountryEnviro(
        country.latlng[0],
        country.latlng[1]
      );
      // Stores advisory to state - countryAdvisory
      // Stores pollution to state - countryPollution
      // Stores weather to state - countryWeather
      this.setState({
        countryPollution: enviro.current.pollution,
        countryWeather: enviro.current.weather,
      });
    } catch (err) {
      console.log("Environment data: ", err.message);
    }

    //calls helper to get pics for the country selected
    try {
      const searchCountry = encodeURI(country.name);
      const countryPics = await getCountryPics(searchCountry);
      this.setState({ countryPics: countryPics });
    } catch (err) {
      console.log("Pics Error: ", err.message);
    }

    // Series of logs just to ensure data is working and for review. To comment out or remove from code before deploy
    console.log("Country: ", country);
    console.log("Advisory ", this.state.countryAdvisory);
    console.log("Pollution: ", this.state.countryPollution);
    console.log("Weather: ", this.state.countryWeather);
    console.log("Meals: ", this.state.countryMeals);
    console.log("Pics: ", this.state.countryPics);
    this.setState({ isLoading: false });
  };

  

  render() {
    let carouselItems;
    if (this.state.countryPics.length) {
      carouselItems = this.state.countryPics.map((item, index) => {
        return (
          <Carousel.Item key={index} interval={10000} className="carousel">
            <img
              className="d-block w-100"
              src={item.url_small}
              alt={item.description}
              height="700"
              width="500"
            />
            <Carousel.Caption>
              <h3>{this.state.country.name}</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              <br />
            </Carousel.Caption>
            <p>Photo by: {item.photo_firstName + " " + item.photo_lastName}</p>
          </Carousel.Item>
        );
      });
    }

    return (
      <>
        <h3>Hello!</h3>
        <Container>
          <Carousel>
            {this.state.isLoading ? <Spinner /> : carouselItems}
          </Carousel>
        </Container>
        <Container>
          {/* Icons for overlays or  modals*/}
          <h2>This is where the country details icons are located</h2>
        </Container>
        {/* Notes Modal*/}

          <Pollution  
            countryPollution={this.state.countryPollution}
            country={this.state.country}
          />

          <Advisory 
            countryAdvisory={this.state.countryAdvisory} 
          />
              
        <Button
          onClick={this.handleShowModal}
          variant="info"
        >
          Want to Add This Country to Your Bucket List?
        </Button>
        <BucketListModal
          // country={this.state.country}
          showModal={this.state.showModal}
          closeModal={this.handleCloseModal}
          handleAdd={this.handleAdd}
        />
    </>

//         {this.state.isLoading ? (
//           <Spinner />
//         ) : (
//           <div className="mt-3">
//             <Container>
//               <Carousel>{carouselItems}</Carousel>
//             </Container>
//             <Container>
//               {/* Icons for overlays or  modals*/}
//               <h2>This is where the country details icons are located</h2>
//             </Container>
//             {/* Notes Modal*/}
//             <Card>
//               <Card.Header as="h5">Notes</Card.Header>
//               <Card.Body>
//                 <Card.Text>{this.state.notes}</Card.Text>
//                 <Button variant="info" onClick={this.handleShowModal}>
//                   Add Note
//                 </Button>
//                 <Button
//                   variant="secondary"
//                   // onClick={() => this.handleUpdate()}
//                 >
//                   Edit Note
//                 </Button>
//                 <Button
//                   variant="danger"
//                   // onClick={() => this.handleDelete()}
//                 >
//                   Delete Note
//                 </Button>
//               </Card.Body>
//             </Card>
//           </div>
//         )}
        
  
    );
  }
}

export default MoreInfo;
