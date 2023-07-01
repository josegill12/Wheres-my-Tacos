const settings = {
  async: true,
  crossDomain: true,
  url: "https://local-business-data.p.rapidapi.com/search-nearby?query=taco%20trucks&lat=39.66146&lng=-104.77723&limit=20&language=en&region=us",
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "759bd9df5emshc146382ccd6b4d0p1fb03ajsn91c47f56cdb0",
    "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});
