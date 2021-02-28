import React, { useState } from 'react'
import axios from 'axios';
import DisplayWether  from './DisplayWether';
export default function Weather() {
    const [form, setForm] = useState({
        city: "",
        country: ""
    })
    const [wetherResponseData , setWetherData] = useState([]);
    const apiKey = 'b80f51e64d35120e5e320ceb4d5c244a';
    async function weatherData(e) {
        e.preventDefault();
        if (form.city == "") {
            alert('Entry City');
        } else {
           const data = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${form.city}&appid=${apiKey}`).then(response => {
                console.log(response.data);
                setWetherData({data : response.data})
                console.log(wetherResponseData);
            })
        }
    }
    const changeHandler = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name === 'city') {
            setForm({ ...form, city: value })
        }
        if (name === 'country') {
            setForm({ ...form, country: value })
        }
        console.log(form.city, form.country);
    }
    return (
        <div className="weather-card row">
            <div className="col">
                <form >
                    <label htmlFor="city">
                        City 
                    </label>
                    <input type="text" name="city" id="city" placeholder="City" onChange={(e) => changeHandler(e)} />
                    <button onClick={(e) => weatherData(e)} >Get Wether Report</button>
                </form> 
                {
                    wetherResponseData.data != undefined ? 
                    <DisplayWether data={wetherResponseData.data} /> : null
                }
            </div>
                                   
        </div>
    )
}
