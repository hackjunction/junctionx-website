import api from '../../lib/api';

export default class ApiPosts {
  // get a list of posts
  // NOTE should be api as well but the request is pending

  static getEvent() {
    return api.get('/event');
  }
  static getTracks() {
    return api.get('/tracks');
  }
  static getPartners() {
    return api.get('/partners');
  }
  static getSections() {
    return api.get('/sections');
  }
  static getSchedule() {
    return api.get('/schedule');
  }
}
