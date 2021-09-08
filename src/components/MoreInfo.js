import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import Spinner from "../components/UI/Spinner";
import axios from "axios";
import {
  getAdvisoryByCode,
  getCountryEnviro,
  getMealsByArea,
  getCountryPics,
} from "../helpers/DataHelpers";

import Pollution from "../components/Pollution.js";
import BucketListModal from "../components/BucketListModal";
import Weather from "../components/Weather";
import Advisory from "../components/UI/Advisory.js";
import MealsDisplay from "./MealsDisplay";

import "./MoreInfo.css";

const SERVER = process.env.REACT_APP_BACKEND_SERVER;

class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      buckets: [],
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

  // shows the buckets modal
  handleShowModal = () => {
    this.setState({
      showModal: true,
    });
  };

  // closes the buckets modal
  handleCloseModal = () => {
    this.setState({
      showModal: false,
    });
  };

  // adds a country to the bucketlist when the note modal is open
  handleAdd = async (bucket) => {
    try {
      let response = await axios.post(`${SERVER}/bucketList`, bucket);
      this.setState({
        buckets: [...this.state.buckets, response.data],
      });
    } catch (err) {
      console.log("handleAdd err:", err);
    }
  };

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
      // has to encode country name a this could have spaces
      const encodedCountry = encodeURI(country.name);
      const countryPics = await getCountryPics(encodedCountry);
      this.setState({ countryPics: countryPics });
    } catch (err) {
      console.log("Pics Error: ", err.message);
    }
    this.setState({ isLoading: false });

    // Series of logs just to ensure data is working and for review. To comment out or remove from code before deploy
    // console.log("Country: ", country);
    // console.log("Advisory ", this.state.countryAdvisory);
    // console.log("Advisory 2: ", this.state.countryAdvisory.advisory.message);
    // console.log("Pollution: ", this.state.countryPollution);
    // console.log("Weather: ", this.state.countryWeather);
    // console.log("Meals: ", this.state.countryMeals);
    // console.log("Pics: ", this.state.countryPics);
  };

  render() {
    const { isAuthenticated } = this.props.auth0;
    let carouselItems;
    if (this.state.countryPics.length) {
      carouselItems = this.state.countryPics.map((item, index) => {
        return (
          //           <Carousel.Item key={index} interval={10000} className="carousel">

          <Carousel.Item key={index} interval={3000} fluid>
            <img
              className="d-block w-100"
              style={{ objectFit: "contain" }}
              width={600}
              height={800}
              src={item.url_small}
              alt={item.description}
            />
            <Carousel.Caption>
              <h3>{this.state.country.name}</h3>
              <p>
                Photo by: {item.photo_firstName + " " + item.photo_lastName}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      });
    }

    return (
      <>
        <Container className="mt-3">
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <>
              <Carousel>{carouselItems}</Carousel>
              <Container className="d-flex justify-content-center">
                {/* Icons for overlays or modals*/}
                {isAuthenticated ? (
                  <Button
                    className="mt-2 mb-2"
                    onClick={this.handleShowModal}
                    variant="info"
                  >
                    Add Country to Your Bucket List
                  </Button>
                ) : (
                  <h4 className="border p-2 mt-2 mb-2 text-center bg-warning border border-dark rounded">
                    Login to add {this.state.country.name} to your Bucket List
                  </h4>
                )}
                {/* <h2>This is where the country details icons are located</h2> */}
              </Container>
              <Weather
                countryWeather={this.state.countryWeather}
                country={this.state.country}
              />
              <Pollution
                countryPollution={this.state.countryPollution}
                country={this.state.country}
              />
              <Advisory countryAdvisory={this.state.countryAdvisory} />

              {this.state.countryMeals.length ? (
                <MealsDisplay
                  meals={this.state.countryMeals}
                  countryName={this.state.country.name}
                />
              ) : (
                ""
              )}
            </>
          )}
        </Container>

        <BucketListModal
          country={this.state.country}
          showModal={this.state.showModal}
          closeModal={this.handleCloseModal}
          handleAdd={this.handleAdd}
        />
      </>
    );
  }
}

export default withAuth0(MoreInfo);
