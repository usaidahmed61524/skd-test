const axios = require("axios");

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



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

// module.exports = signInWithDomainAndTokenId;


new signInWithDomainAndTokenId();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`SDK is running on port ${PORT}`);
});
