export function withSecurityHeaders() {
  const token = localStorage.getItem('authToken');
  return (token) ? { 'Authorization': 'Bearer ' + token.toString() } : null;
}
