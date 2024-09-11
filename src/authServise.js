import axios from 'axios';

const authUrl = 'https://restful-booker.herokuapp.com/auth';

export const authenticate = async (username, password) => {
  try {
    const response = await axios.post(authUrl, {
      username: username,
      password: password
    });
    return response.data;
  } catch (error) {
    console.error('Error during authentication', error);
    throw error;
  }
};
