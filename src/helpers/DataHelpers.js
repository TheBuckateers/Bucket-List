import axios from "axios";

// Return countries
export const getCountries = async () => {
  try {
    const result = await axios.get(
      `${process.env.REACT_APP_BACKEND_SERVER}/country`
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// Return advisory by the country code specified
export const getAdvisoryByCode = async (code) => {
  try {
    const result = await axios(
      `${process.env.REACT_APP_BACKEND_SERVER}/advisory/${code}`
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// Return all advisories for all countries - Not being USED!
export const getAdvisoryAll = async () => {
  try {
    const result = await axios(
      `${process.env.REACT_APP_BACKEND_SERVER}/advisory`
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// Return enviro & weather for the country lat/lon passed in in object returned is a current property that has pollution object & weather object.
export const getCountryEnviro = async (lat, lon) => {
  try {
    const result = await axios(
      `${process.env.REACT_APP_BACKEND_SERVER}/enviro/?lat=${lat}&lon=${lon}`
    );
    return result.data.data;
  } catch (err) {
    console.log(err);
  }
};

// Return meals that are available by the country selected region. Many will not return any meals as only a few are available from the API being used by the backend. The area needs to be passed in (region) i.e. french, american, dutch, indian etc. This is in the country object use the demonym property. 3 properties in each object:
// idMeal
// strMeal
// strMealThumb
export const getMealsByArea = async (area) => {
  try {
    const result = await axios(
      `${process.env.REACT_APP_BACKEND_SERVER}/food/areas/${area}`
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};

// Return just one meal searched by ID provided.
export const getMealById = async (id) => {
  try {
    const result = await axios(
      `${process.env.REACT_APP_BACKEND_SERVER}/food/${id}`
    );
    return result.data;
  } catch (err) {
    console.log(err);
  }
};
