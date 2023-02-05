import axios from 'axios';
const KEY = 'AIzaSyCJAGM-urqGv7lVtwateXM4egTvdJXHt5I';
export default axios.create({
    baseURL:'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
});

