import axios from "axios";

export default {
  getTrending: function() {
    return axios.get("https://thawing-headland-90979.herokuapp.com/api/giphy/trending");
  }
};
