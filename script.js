const key="dd1bdb5745504f8ebf8145338240507"
async function fetchWeatherDetails(){
    let city='Chandigarh'
    const url = `http://api.weatherapi.com/v1/current.json?key=${key}&q=${city}`;

    const response=await fetch(url);
    const data= await response.json();
    console.log(data);
    let newpara = document.createElement('p');
    newpara.textContent= `${data?.current?.temp_c.toFixed(2)} °C`;
    document.body.appendChild(newpara);
}