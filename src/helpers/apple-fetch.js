import axios from 'axios'

const MAINURL = `https://newsapi.org/v2/everything?q=apple&from=2021-11-03&to=2021-11-03&sortBy=popularity&apiKey=91e7911312fa4cf8b79ab97c11559ecb`;
const MAINURL2 = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=91e7911312fa4cf8b79ab97c11559ecb';

export const appleNoticesFetch = async () => {
    const { data } = await axios.get(`${MAINURL}`);
    const { articles } = data;
    return articles;
};

export const techCrunchFetch = async () => {
    const { data } = await axios.get(`${MAINURL2}`);
    const { articles } = data;
    return articles;
}