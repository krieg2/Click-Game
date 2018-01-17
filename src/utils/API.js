import axios from "axios";

export default {
  getTrending: function(limit, offset) {

  	let url = "https://thawing-headland-90979.herokuapp.com/api/giphy/trending";
  	let queries = "?limit=" + limit
  	    queries += "&offset=" + offset;
    url = url + queries;

  	console.log(url);
    return axios.get(url);
  }
};
