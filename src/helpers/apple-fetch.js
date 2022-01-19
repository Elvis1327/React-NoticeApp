import axios from 'axios'

const appleNotice = `https://newsapi.org/v2/everything?q=apple&from=2022-01-17&to=2022-01-17&sortBy=popularity&apiKey=91e7911312fa4cf8b79ab97c11559ecb`;

export const appleNoticesFetch = async () => {
    const { data } = await axios.get(`${appleNotice}`);
    const { articles } = data;
    return articles;
};
