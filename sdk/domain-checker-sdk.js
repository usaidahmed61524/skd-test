const axios = require("axios");

class signInWithDomainAndTokenId {
  constructor(apiBaseUrl) {
    this.apiBaseUrl = apiBaseUrl;
  }
// user check
  async validateUser(username, id) {
    username = username.toLowerCase();
    try {
      const apiEndpoint = "https://mangotreeapi.com/api/findUser";

      const requestBody = {
        domain: username,
        id: Number(id),
      };
      const response = axios.post(apiEndpoint, requestBody);
      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = signInWithDomainAndTokenId;
