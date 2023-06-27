// import preact
import { h, render, Component } from 'preact'; 
import style_DHwidget from './style_DHwidget'

function hWidget(props) {
    const index = [0,1,2,3,4];
    return (
        <div class={style_DHwidget.DwidgetBody}>
        <table >
            <thead>
                <tr class={style_DHwidget.title}>
                    <th>Time</th>   
                    <th>Temp(<sup>°</sup>C)</th>  
                    <th>Weather</th>  
                    <th>Humidity(%)</th>
                    <th>Speed(mph)</th>  
                    <th>WD<sup>°</sup></th>  
                    <th>Gust(m/s)</th> 
                    <th>Cloudiness(%)</th>  
                    <th>Visibility(mi)</th>
                </tr>
            </thead>
            <tbody>
            {index.map((index) => (
                <tr key={index} class={style_DHwidget.title}>
                    <td>{props.data['list'][index]['dt_txt'].split(' ')[1]}</td>
                    <td>{Math.round(props.data['list'][index]['main']['temp'])}<sup>°</sup>C</td>
                    <td><img src={`http://openweathermap.org/img/wn/${props.data['list'][index]['weather'][0]['icon']}.png`} alt={props.data['list'][index]['weather'][0]['description']}/></td>
                    <td>{props.data['list'][index]['main']['humidity']}%</td> 
                    <td>{props.data['list'][index]['wind']['speed']}mph</td> 
                    <td>{props.data['list'][index]['wind']['deg']}<sup>°</sup></td>   
                    <td>{props.data['list'][index]['wind']['gust']}m/s</td> 
                    <td>{props.data['list'][index]['clouds']['all']}%</td>
                    <td>{props.data['list'][index]['visibility']/1000/1.6 + "mi"}</td>
                </tr>
            ))}
            </tbody>
        </table></div>
    );
}

export default hWidget;