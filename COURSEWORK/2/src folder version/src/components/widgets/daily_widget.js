// import preact
import { h, render, Component } from 'preact';
import style_DHwidget from './style_DHwidget'
function Dwidget(props){
   const items = [getDayList()[0],getDayList()[1],getDayList()[2],getDayList()[3],getDayList()[4],getDayList()[5],getDayList()[6]];
  
    return (
        <div class={style_DHwidget.DwidgetBody}>
        <table >
            <thead>
                <tr class={style_DHwidget.title}>
                    <th>Day</th>   
                    <th>Min(<sup>°</sup>C)</th>  
                    <th>Max(<sup>°</sup>C)</th>
                    <th>Weather</th>  
                    <th>Humidity(%)</th>  
                    <th>Speed(mph)</th> 
                    <th>WD<sup>°</sup></th>   
                    <th>Gust(m/s)</th> 
                    <th>Cloudiness(%)</th>  
                </tr>
            </thead>
            <tbody>
            {items.map((items,index) => (
                <tr key={index} class={style_DHwidget.title}>
                    <td>{items}</td>
                    <td>{Math.round(props.data['list'][index]['temp']['min'])}<sup>°</sup>C</td>
                    <td>{Math.round(props.data['list'][index]['temp']['max'])}<sup>°</sup>C</td> 
                    <td><img src={`http://openweathermap.org/img/wn/${props.data['list'][index]['weather'][0]['icon']}.png`} alt={props.data['list'][index]['weather'][0]['description']}/></td>  
                    <td>{props.data['list'][index]['humidity']}%</td>  
                    <td>{props.data['list'][index]['speed']}mph</td> 
                    <td>{props.data['list'][index]['deg']}<sup>°</sup></td>   
                    <td>{props.data['list'][index]['gust']}m/s</td> 
                    <td>{props.data['list'][index]['clouds']}%</td>  
                </tr>
            ))}
            </tbody>
        </table></div>
    );
    function getDayList(){
        // Creates a list of the days in the week starting from the current Day as today
        // Used in the daily forcast

        var Day_of_location = props.date.split('-')[2] //gets day of the location 
        //console.log(Day_of_location)

        const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        var d=new Date(); //get the dt of my location
        
        //console.log(d.getDate())
        var Different = Day_of_location - d.getDate() //calculate the different
        var Today = d.getDay()

        Today += Different //adjust the different
        
        if(Today > 6){ //if the day is greater and 7 start from the beginning
            Today -= 6
        }

        var Current_days = []
        Current_days[0] = 'Today'
        for(let i = 1; i <= 7; i++){
            if (Today == 7){
                Today = 0
            }
            Current_days[i] = Days[Today]
            Today += 1
        }
        return Current_days
    }
}

export default Dwidget;



