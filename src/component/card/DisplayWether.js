import React from 'react';

 function DisplayWether(props) {
    const {data} = props;
    console.log(data);
    return (
        <div className="row">
            <div className="col-2 card p-5 m-5">
            {data.name}  {Math.floor(data.main.temp - 273.15)}&deg;
            </div>
            <div className="col-2 card p-5 m-5">
            Max Temp  {Math.floor(data.main.temp_max - 273.15)}&deg;
            </div>
            <div className="col-2 card p-5 m-5">
            Min Temp  {Math.floor(data.main.temp_min - 273.15)}&deg;
            </div>
            <div className="col-2 card p-5 m-5">
            {data.name}  {Math.floor(data.main.feels_like - 273.15)}&deg;
            </div>
            <div className="col-2 card p-5 m-5">
            Max Temp  {Math.floor(data.main.temp_max - 273.15)}&deg;
            </div>
            <div className="col-2 card p-5 m-5">
            Min Temp  {Math.floor(data.main.temp_min - 273.15)}&deg;
            </div>  
        </div>

        
    )
}

export default DisplayWether;
