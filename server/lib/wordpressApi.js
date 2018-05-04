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
        header1: event[0].acf.header1,
        content1: event[0].acf.content1,
        header2: event[0].acf.header2,
        content2: event[0].acf.content2,
        start_date: event[0].acf.start_date,
        end_date: event[0].acf.end_date,
        address: event[0].acf.address,
        city: event[0].acf.city,
        country: event[0].acf.country,
        coordinates: event[0].acf.coordinates,
        email: event[0].acf.email,
        external: event[0].acf.external,
        external_url: event[0].acf.external_url
      };
    });
};

export const getPartners = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=4&per_page=100&author=' + EVENT_ID)
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
    .get('/posts?_embed&categories=3&per_page=100&author=' + EVENT_ID)
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
export const getContentSections = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=5&author=' + EVENT_ID)
    .then(contentSections => contentSections.data)
    .then(contentSections => {
      return contentSections.map(section => {
        return {
          name: section.title.rendered,
          content: section.content.rendered,
          header: section.acf.header,
          image: section.acf.image,
          link_text: section.acf.link_text,
          link_url: section.acf.link_url,
          slug: section.slug
        };
      });
    });
};
export const getScheduleEvents = () => {
  return wordpressApiClient
    .get('/posts?_embed&categories=6&author=' + EVENT_ID)
    .then(scheduleEvents => scheduleEvents.data)
    .then(scheduleEvents => {
      return scheduleEvents.map(scheduleEvent => {
        return {
          name: scheduleEvent.title.rendered,
          description: scheduleEvent.content.rendered,
          date: scheduleEvent.acf.date,
          time: scheduleEvent.acf.time,
          suffix: scheduleEvent.acf.suffix
        };
      });
    });
};
