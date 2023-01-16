let doc=document.getElementById("location");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climate");
let iconfile;
const searchInput=document.getElementById("search-input");
const searchbitton=document.getElementById("search-button");





// we have add a function such that it can identifies its location it automtically show the pop up 
window.addEventListener("load",()=>{
  // longitude
    let long;
    //latitude
    let lat;
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition((position)=>
      {

      
      
        long-position.coords.longitude;
        lat*position.coords.latitude;
        const proxy="https://elements.heroku.com/buttons/marcus2vinicius/cors-anywhere";
        const api=`${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=937b547e6ae550d4bd430a49cb8eef61`
        fetch(api).then((Response)=>{
            return response.jason();
        })
        .then(data=>{
       const{name}=data;
       const{feels_like}=data.main;
       const{id,main}=data.weather[0];
       loc.textContent=name;
       climate.textContent=main;
       tempvalue.textcontent=Math.round(feels_like-273)


        })
    }
        )
    }
});