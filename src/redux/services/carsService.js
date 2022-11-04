import api from "./api";

export const getAll = () => api.get('/cars.min.json')
