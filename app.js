$searchQuery = $("#truckNameInput");
const settings = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "759bd9df5emshc146382ccd6b4d0p1fb03ajsn91c47f56cdb0",
    "X-RapidAPI-Host": "local-business-data.p.rapidapi.com",
  },
};

function runAPIs() {
  const api1Url =
    "https://local-business-data.p.rapidapi.com/search?query=taco%20trucks%20in%2080013%2CUSA&limit=20&lat=37.359428&lng=-121.925337&zoom=13&language=en&region=us";
  fetch(api1Url, settings)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const results = data.data.filter((tacoObj) => {
        console.log(tacoObj.name);
        console.log($searchQuery.val());
        return tacoObj.name
          .toLowerCase()
          .includes($searchQuery.val().toLowerCase());
      });
      console.log("API 1 Response:", results);
    })
    .catch((error) => {
      console.error("API 1 Error:", error);
    });
}
const container = document.getElementById("imageContainer");
image.src =
  "https://tacodelvalle.com/wp-content/uploads/2021/08/IMG_1609-3-1024x850.jpg";
function handleButtonClick(params) {
  const truckName = document.getElementById("truckNameInput").value;
  console.log("Truck Name:", truckName);
  runAPIs();
}
