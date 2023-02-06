import axios from "axios";

const instance = axios.create({
    baseURL: "https://profile-cms-production.up.railway.app/api"
});

export default instance;