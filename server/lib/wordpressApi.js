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

export const getPartners = year => {
  return wordpressApiClient
    .get('/posts?_embed&categories=3?per_page=100&author=' + EVENT_ID)
    .then(partners => partners.data)
    .then(partners => {
      return partners.map(partner => {
        return {
          name: partner.title.rendered,
          logo: partner.acf.logo,
          url: partner.acf.url,
          year: partner.acf.year,
          priority: partner.acf.priority
        };
      });
    })
    .then(partners => {
      if (year) {
        return partners.filter(partner => partner.year === year);
      } else {
        return partners;
      }
    });
};

export const getTracks = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=2?per_page=100&author=' + EVENT_ID)
    .then(tracks => tracks.data)
    .then(tracks => {
      return tracks.map(track => {
        return {
          title: track.title.rendered,
          content: track.content.rendered,
          image: track.acf.image,
          challenges: track.acf.challenges
            ? track.acf.challenges.map(challenge => {
                return {
                  title: challenge.post_title,
                  content: challenge.post_content,
                  id: challenge.ID
                };
              })
            : [],
          main_partners: track.main_partners,
          partners: track.partners,
          slug: track.slug
        };
      });
    });
};
