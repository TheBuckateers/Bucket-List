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

// Return all advisories for all countries
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
