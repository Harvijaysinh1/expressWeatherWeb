const async = require("hbs/lib/async");

const btn=document.getElementById('btn')
const cityName=document.getElementById('cityName')
const city_name=document.getElementById('city_name')

const getInfo=async (event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
    if(cityVal===""){
        city_name.innerText=`Plz write name before search`
        
    }else
    try {
        let url=`http://localhost:301/${cityVal}`;
        const response=await
        
    } catch (error) {
        city_name.innerText=`Plz write name proparly`
        console.log(error);
        
    }

    
    

}

btn.addEventListener('click',getInfo);

