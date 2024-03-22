import axios from 'axios';
const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/photos'
})
const getPhotos = (page, q='') => {
    return api.get(`?_page=${page}&_limit=10&q=${q}`)
}
export default getPhotos