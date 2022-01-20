import axios from 'axios';

const teslaNotices = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=91e7911312fa4cf8b79ab97c11559ecb';

export const getTeslaNoticesFetch = async () => {
    const { data } = await axios.get(teslaNotices);
    return data.articles;
};



