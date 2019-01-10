import axios from 'axios';


class AuthenticationService {

    constructor() {
        this.baseUrl = "http://localhost:8000/api-token-auth/";
    }

    login = async (username, password, callback) => {
        const headers = {
            'Content-Type': 'application/json',
        }
        const data = {
            username: username,
            password: password,
        }
        try {
            const response = await axios.post(this.baseUrl, data, { headers: headers });
            this.setToken(response.data.token);
            callback(response);
        } catch(error) {
            console.error(error);
        }
    }

    logout() {
        localStorage.removeItem('jwtToken');
    }

    isLoggedIn() {
        return this.getToken() !== null;
    }

    setToken(idToken) {
        localStorage.setItem('jwtToken', idToken);
    }

    getToken() {
        return localStorage.getItem('jwtToken');
    }

    // getAuthHeader

}


export default AuthenticationService;
