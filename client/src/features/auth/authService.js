import axios from 'axios';

const API_URL = '/api/users/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if(response.data) {
    localStorage.setItem('user', JSON.stringify(response.data));
  }

  return response.data;
}

const authService = {
  register
}

export default authService;


// This file is just to make http request, send data back and save it in local storage
