// import preact
import { h, render, Component } from 'preact'; 


function hWidget(props) {
    return (
        //creates widget which holds the information for the next 5 hours
        //temp, humidity, windspeed, wind direction, cloudiness, visibility, sunrise, suset
        <div>
            {/* {console.log(props)} /* Debug */}
            <div><span>time</span>   <span>temp</span>*C <span>desciption</span>  <span>humidity</span>%  <span>wind_speed</span>mph <span>wind_direction</span>*   <span>gust</span>m/s <span>cloudiness</span>%  </div>
            <div><span>{props.data['list'][0]['dt_txt'].split(' ')[1]}</span>   <span>{Math.round(props.data['list'][0]['main']['temp'])}</span>*C <span>{props.data['list'][0]['weather'][0]['description']}</span>  <span>{props.data['list'][0]['main']['humidity']}</span>%  <span>{props.data['list'][0]['wind']['speed']}</span>mph <span>{props.data['list'][0]['wind']['deg']}</span>*   <span>{props.data['list'][0]['wind']['gust']}</span>m/s <span>{props.data['list'][0]['clouds']['all']}</span>%   <span>{props.data['list'][0]['visibilty']}</span></div>
            <div><span>{props.data['list'][1]['dt_txt'].split(' ')[1]}</span>   <span>{Math.round(props.data['list'][1]['main']['temp'])}</span>*C <span>{props.data['list'][1]['weather'][0]['description']}</span>  <span>{props.data['list'][1]['main']['humidity']}</span>%  <span>{props.data['list'][1]['wind']['speed']}</span>mph <span>{props.data['list'][1]['wind']['deg']}</span>*   <span>{props.data['list'][1]['wind']['gust']}</span>m/s <span>{props.data['list'][1]['clouds']['all']}</span>%   <span>{props.data['list'][1]['visibilty']}</span></div>
            <div><span>{props.data['list'][2]['dt_txt'].split(' ')[1]}</span>   <span>{Math.round(props.data['list'][2]['main']['temp'])}</span>*C <span>{props.data['list'][2]['weather'][0]['description']}</span>  <span>{props.data['list'][2]['main']['humidity']}</span>%  <span>{props.data['list'][2]['wind']['speed']}</span>mph <span>{props.data['list'][2]['wind']['deg']}</span>*   <span>{props.data['list'][2]['wind']['gust']}</span>m/s <span>{props.data['list'][2]['clouds']['all']}</span>%   <span>{props.data['list'][2]['visibilty']}</span></div>
            <div><span>{props.data['list'][3]['dt_txt'].split(' ')[1]}</span>   <span>{Math.round(props.data['list'][3]['main']['temp'])}</span>*C <span>{props.data['list'][3]['weather'][0]['description']}</span>  <span>{props.data['list'][3]['main']['humidity']}</span>%  <span>{props.data['list'][3]['wind']['speed']}</span>mph <span>{props.data['list'][3]['wind']['deg']}</span>*   <span>{props.data['list'][3]['wind']['gust']}</span>m/s <span>{props.data['list'][3]['clouds']['all']}</span>%   <span>{props.data['list'][3]['visibilty']}</span></div>
            <div><span>{props.data['list'][4]['dt_txt'].split(' ')[1]}</span>   <span>{Math.round(props.data['list'][4]['main']['temp'])}</span>*C <span>{props.data['list'][4]['weather'][0]['description']}</span>  <span>{props.data['list'][4]['main']['humidity']}</span>%  <span>{props.data['list'][4]['wind']['speed']}</span>mph <span>{props.data['list'][4]['wind']['deg']}</span>*   <span>{props.data['list'][4]['wind']['gust']}</span>m/s <span>{props.data['list'][4]['clouds']['all']}</span>%   <span>{props.data['list'][4]['visibilty']}</span></div>
        </div>
    )
}

export default hWidget;