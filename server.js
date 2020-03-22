//Include the node module
var Twitter = require('twitter');

//Get this data from your twitter apps dashboard
var client = new Twitter({
    "consumer_key": "YOUR_CONSUMER_KEY",
    "consumer_secret": "YOUR_CONSUMER_SECRET",
    "access_token_key": "YOUR_ACCESS_TOKEN",
    "access_token_secret": "YOUR_ACCESS_TOKEN_SECRET",
});

//Add members to list via slug/list name 
client.post('lists/members/create_all', {
  owner_screen_name: "YOUR HANDLE",
  slug: 'LIST_NAME_HERE',
  screen_name: "HANDLE1,HANDL2,...",
},  function(error, response) {
  if(error) throw error;
  console.log(response);  // Raw response object.
});

