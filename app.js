const settings = {
  async: true,
  crossDomain: true,
  url: "https://local-business-data.p.rapidapi.com/search?query=taco%20trucks%20in%2080013%2CUSA&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=us",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "759bd9df5emshc146382ccd6b4d0p1fb03ajsn91c47f56cdb0",
    "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
