import axios from 'axios';

export const openCoins = () => {
  // Opens the URL in the same tab
  window.open('https://coins.cocowah.com', '_self');
};

export const joinWaitlist = async (email: string) => {
  try {
    // const serverUrl = `https://coins-server.onrender.com`;
    const serverUrl = `http://localhost:8080`;
    const url = `${serverUrl}/api/otp/addtowaitinglist`;
    const response = await axios.post(url, { email });
    // Handle the response here (e.g., show a success message)
    console.log(response.data); // Example: logging the response
  } catch (error) {
    // Handle any errors here (e.g., show an error message)
    console.error('Error joining waitlist:', error);
  }
};

