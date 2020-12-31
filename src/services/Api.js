import axios from 'axios';

class Api {
  basePath = "https://lightweight-scala-app.herokuapp.com/api/v1";

  resultConfig = (token) => {
    const config = { headers: {} };

    if( !!token ) {
      config.headers["Authorization"] = `Bearer ${token}`;
    };

    return config
  }

  get = async (path) => {
    const res = await axios.get(`${this.basePath}/${path}`);

    return res.data;
  };

  post = async (path, data, params = {}) => {
    const { token } = params;
    const config = this.resultConfig(token);

    const res = await axios.post(
      `${this.basePath}/${path}`, 
      data, 
      config
    );

    return res.data;
  };

  put = async (path, data, params = {}) => {
    const { token } = params;
    const config = this.resultConfig(token);
    
    const res = await axios.put(
      `${this.basePath}/${path}`, 
      data,
      config
    );

    return res.data;
  };


  delete = async (path, params = { }) => {
    const { token } = params;
    const config = this.resultConfig(token);

    const res = await axios.delete(`${this.basePath}/${path}`, config);

    return res.data;
  };
};

export default new Api();