import axios from 'axios';
import { WORDPRESS_BASE_URL, EVENT_ID } from '../config';

const wordpressApiClient = axios.create({
  baseURL: `${WORDPRESS_BASE_URL}/wp-json/wp/v2`,
  timeout: 50000
});

wordpressApiClient.interceptors.request.use(config => {
  return config;
});

export const getPosts = () => wordpressApiClient.get('/posts?per_page=100&author=' + EVENT_ID);

export const getEvent = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=2&author=' + EVENT_ID)
    .then(event => event.data)
    .then(event => {
      return {
        name: event[0].title.rendered,
        description: event[0].acf.description,
        start_date: event[0].acf.end_date,
        end_date: event[0].acf.end_date,
        location: event[0].acf.location,
        coordinates: event[0].acf.coordinates
      };
    });
};

export const getPartners = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=4?per_page=100&author=' + EVENT_ID)
    .then(partners => partners.data)
    .then(partners => {
      return partners.map(partner => {
        return {
          name: partner.title.rendered,
          logo: partner.acf.logo,
          url: partner.acf.url,
          priority: partner.acf.priority
        };
      });
    });
};

export const getTracks = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=3?per_page=100&author=' + EVENT_ID)
    .then(tracks => tracks.data)
    .then(tracks => {
      return tracks.map(track => {
        return {
          title: track.title.rendered,
          content: track.content.rendered,
          image: track.acf.image,
          partners: track.partners,
          slug: track.slug
        };
      });
    });
};
