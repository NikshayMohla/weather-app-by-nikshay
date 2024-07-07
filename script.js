const userTab = document.querySelector("[data-userWeather]");
const searchTab = document.querySelector("[data-searchWeather]");
const userContainer = document.querySelector(".weather-container");

const grantAccessContainer = document.querySelector(".grant-location-container");
const searchForm = document.querySelector("[data-searchForm]");
const loadingScreen = document.querySelector(".loading-container");
const userInfoContainer = document.querySelector(".user-info-container");



let currentTab=userTab;
const key="dd1bdb5745504f8ebf8145338240507";
currentTab.classList.add("current-tab");

function switchTab(clickedTab){
    if(clickedTab != currentTab){
        currentTab.classList.remove("current-tab");
        currentTab = clickedTab;
        currentTab.classList.add("current-tab");
    }
}

userTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(userTab);
});

searchTab.addEventListener("click", () => {
    //pass clicked tab as input paramter
    switchTab(searchTab);
});






function renderWeatherInfo(data) {
    let newPara = document.createElement('p');
    newPara.textContent = `${data?.current?.temp_c.toFixed(2)} °C`

    document.body.appendChild(newPara);
}


async function fetchWeatherDetails() {

    try {
        let city = "chandigarh";

        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`);
        const data = await response.json();
    
        console.log("Weather data:-> " , data);

        renderWeatherInfo(data);
    }
    catch(err) {
        //handle the error here
    }

}


// function getLocation(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition(showPosition);
//     }
//     else console.log("Please provide location access");
// }

// function showPosition(position)
// {
//     let lat=position.coords.latitude;
//     let long=position.coords.longitude;

//     console.log(lat);
//     console.log(long);
// }




function switchTab(clickedTab) {

    apiErrorContainer.classList.remove("active");
  
    if (clickedTab !== currentTab) {
      currentTab.classList.remove("current-tab");
      currentTab = clickedTab;
      currentTab.classList.add("current-tab");
  
      if (!searchForm.classList.contains("active")) {
        userInfoContainer.classList.remove("active");
        grantAccessContainer.classList.remove("active");
        searchForm.classList.add("active");
      } 
      else {
        searchForm.classList.remove("active");
        userInfoContainer.classList.remove("active");
        //getFromSessionStorage();
      }
  
      // console.log("Current Tab", currentTab);
    }
  }
  