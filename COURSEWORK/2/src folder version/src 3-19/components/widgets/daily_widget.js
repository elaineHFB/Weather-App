// import preact
import { h, render, Component } from 'preact';

function Dwidget(props){

    return (
        //Creates the widget which shows the temperature for parts of the day for the next 7 days including today
        <div> 
            {/* {console.log(props)} /* Debug */}
            <div><span>Day of the week</span>   <span>min_temp</span>*C  <span>max_temp</span>*C <span>desciption</span>  <span>humidity</span>%  <span>wind_speed</span>mph <span>wind_direction</span>*   <span>gust</span>m/s <span>cloudiness</span>%  </div>
            <div><span>{getDayList()[0]}</span>   <span>{Math.round(props.data['list'][0]['temp']['min'])}</span>*C  <span>{Math.round(props.data['list'][0]['temp']['max'])}</span>*C <span>{props.data['list'][0]['weather'][0]['description']}</span>  <span>{props.data['list'][0]['humidity']}</span>%  <span>{props.data['list'][0]['speed']}</span>mph <span>{props.data['list'][0]['deg']}</span>*   <span>{props.data['list'][0]['gust']}</span>m/s <span>{props.data['list'][0]['clouds']}</span>%  </div>
            <div><span>{getDayList()[1]}</span>   <span>{Math.round(props.data['list'][1]['temp']['min'])}</span>*C  <span>{Math.round(props.data['list'][1]['temp']['max'])}</span>*C <span>{props.data['list'][1]['weather'][0]['description']}</span>  <span>{props.data['list'][1]['humidity']}</span>%  <span>{props.data['list'][1]['speed']}</span>mph <span>{props.data['list'][1]['deg']}</span>*   <span>{props.data['list'][1]['gust']}</span>m/s <span>{props.data['list'][1]['clouds']}</span>%  </div>
            <div><span>{getDayList()[2]}</span>   <span>{Math.round(props.data['list'][2]['temp']['min'])}</span>*C  <span>{Math.round(props.data['list'][2]['temp']['max'])}</span>*C <span>{props.data['list'][2]['weather'][0]['description']}</span>  <span>{props.data['list'][2]['humidity']}</span>%  <span>{props.data['list'][2]['speed']}</span>mph <span>{props.data['list'][2]['deg']}</span>*   <span>{props.data['list'][2]['gust']}</span>m/s <span>{props.data['list'][2]['clouds']}</span>%  </div>
            <div><span>{getDayList()[3]}</span>   <span>{Math.round(props.data['list'][3]['temp']['min'])}</span>*C  <span>{Math.round(props.data['list'][3]['temp']['max'])}</span>*C <span>{props.data['list'][3]['weather'][0]['description']}</span>  <span>{props.data['list'][3]['humidity']}</span>%  <span>{props.data['list'][3]['speed']}</span>mph <span>{props.data['list'][3]['deg']}</span>*   <span>{props.data['list'][3]['gust']}</span>m/s <span>{props.data['list'][3]['clouds']}</span>%  </div>
            <div><span>{getDayList()[4]}</span>   <span>{Math.round(props.data['list'][4]['temp']['min'])}</span>*C  <span>{Math.round(props.data['list'][4]['temp']['max'])}</span>*C <span>{props.data['list'][4]['weather'][0]['description']}</span>  <span>{props.data['list'][4]['humidity']}</span>%  <span>{props.data['list'][4]['speed']}</span>mph <span>{props.data['list'][4]['deg']}</span>*   <span>{props.data['list'][4]['gust']}</span>m/s <span>{props.data['list'][4]['clouds']}</span>%  </div>
            <div><span>{getDayList()[5]}</span>   <span>{Math.round(props.data['list'][5]['temp']['min'])}</span>*C  <span>{Math.round(props.data['list'][5]['temp']['max'])}</span>*C <span>{props.data['list'][5]['weather'][0]['description']}</span>  <span>{props.data['list'][5]['humidity']}</span>%  <span>{props.data['list'][5]['speed']}</span>mph <span>{props.data['list'][5]['deg']}</span>*   <span>{props.data['list'][5]['gust']}</span>m/s <span>{props.data['list'][5]['clouds']}</span>%  </div>
            <div><span>{getDayList()[6]}</span>   <span>{Math.round(props.data['list'][6]['temp']['min'])}</span>*C  <span>{Math.round(props.data['list'][6]['temp']['max'])}</span>*C <span>{props.data['list'][6]['weather'][0]['description']}</span>  <span>{props.data['list'][6]['humidity']}</span>%  <span>{props.data['list'][6]['speed']}</span>mph <span>{props.data['list'][6]['deg']}</span>*   <span>{props.data['list'][6]['gust']}</span>m/s <span>{props.data['list'][6]['clouds']}</span>%  </div>
        </div>

    )

    function getDayList(){
        // Creates a list of the days in the week starting from the current Day as today
        // Used in the daily forcast

        var Day_of_location = props.date.split('-')[2] //gets day of the location 
        //console.log(Day_of_location)

        const Days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Satursday', 'Sunday']
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



