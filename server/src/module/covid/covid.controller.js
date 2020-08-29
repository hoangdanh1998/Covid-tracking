import axios from 'axios';
import constant from '../../config/constants';
import HTTPStatus from 'http-status';
export const getAllCovidCountry = async (req, res) => {
  const url = constant.apiPublicURL;
  console.log(url);
  const countries = await axios.get(url).then((response) => {
    return response.data;
  });
  return res.status(HTTPStatus.OK).json(countries);
};
