import axios from 'axios';

const MAINURL = 'https://newsapi.org/v2'

export const homeDataFetch = async () => {
    const { data } = await axios.get(`${MAINURL}/top-headlines?country=us&category=business&apiKey=91e7911312fa4cf8b79ab97c11559ecb`);
    const { articles } = data;
    return articles;
}

export const swallStreetFetch = async () => {
    const { data } = await axios.get('https://newsapi.org/v2/everything?domains=wsj.com&apiKey=91e7911312fa4cf8b79ab97c11559ecb');
    const { articles } = data;
    return articles;
};



