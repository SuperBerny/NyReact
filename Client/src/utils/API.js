import axios from "axios";

export default {
   //Get Articles
   getArticles: function() {
      axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?82567486a00947b88aba882d1178d0fe")
      .then(function(response){
         console.log(response);
      })
      .catch(function(error) {
         console.log(error);
      });
   }
};