const settings = {
  async: true,
  crossDomain: true,
  url: "https://local-business-data.p.rapidapi.com/search-nearby?query=taco%20trucks&lat=39.66146&lng=-104.77723&limit=20&language=en&region=us",
  method: "GET",
  headers: {
    Authorization: "Bearer API_KEY",
    accept: application / json,
  },
};

$.ajax(settings).done(function (response) {
  console.log(response);
});

document.addEventListener("DOMContentLoaded", function () {
  // Fetch hours of operation
  fetch("your_hours_api_endpoint")
    .then((response) => response.json())
    .then((data) => {
      const hoursElement = document.getElementById("hours");
      hoursElement.textContent = data.hours;
    });

  // Fetch menu items
  fetch("your_menu_api_endpoint")
    .then((response) => response.json())
    .then((data) => {
      const menuElement = document.getElementById("menu");
      data.menuItems.forEach((item) => {
        const listItem = document.createElement("li");
        listItem.textContent = item;
        menuElement.appendChild(listItem);
      });
    });
});
