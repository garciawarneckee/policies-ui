import axios from 'axios';

function withSecurityHeaders() {
  const token = localStorage.getItem('authToken');
  return (token) ? { 'Authorization': 'Bearer ' + token.toString() } : null;
}

const headers = withSecurityHeaders();

const customAxios = axios.create({ headers: headers });

export default customAxios;
