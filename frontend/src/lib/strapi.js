import axios from 'axios';

const strapiUrl = import.meta.env.STRAPI_URL;

export async function fetchArticles() {
    const response = await axios.get(`${strapiUrl}/api/articles?populate=*`);
    return response.data.data;
}

export async function fetchArticle(slug) {
    const response = await axios.get(`${strapiUrl}/api/articles?filters[slug][$eq]=${slug}&populate=*`);
    return response.data.data[0];
}