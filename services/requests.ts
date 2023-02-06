import api from "../services/api";

export const posts = async() => (await api.get("/posts"));