import api from './Api';

export const TOKEN_KEY = "";
export const USERNAME = "";
export const login = (user) => api.post('User/Login', user)
export const isAuthenticated = () => api.get('/')//localStorage.getItem(TOKEN_KEY) !== null;
export const getToken = () => localStorage.getItem(TOKEN_KEY);
export const getUsername = () => localStorage.getItem(USERNAME);
export const saveData = data => {
  localStorage.setItem(TOKEN_KEY, data.token);
  localStorage.setItem(USERNAME, data.username)
};
export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  localStorage.removeItem(USERNAME);
};