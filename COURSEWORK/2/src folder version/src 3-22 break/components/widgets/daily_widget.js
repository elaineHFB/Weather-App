// import preact
import { h, render, Component } from 'preact';
import style_DHwidget from './style_DHwidget'

function Dwidget(props){

    return (
        //Creates the widget which shows the temperature for parts of the day for the next 7 days including today
        //
        <div class ={style_DHwidget.DwidgetBody}> 
            {/* {console.log(props)} /* Debug */}
            <div>
                <span>Day</span>   
                <span>Min <sup>°</sup>C</span>  
                <span>Max<sup>°</sup>C</span>
                <span>Weather</span>  
                <span>Humidity%</span>  
                <span>Speed(mph)</span> 
                <span>WD<sup>°</sup></span>   
                <span>gust(m/s)</span> 
                <span>cloudiness%</span>  
            </div>
            <div>
                <span>{getDayList()[0]}</span>   
                <span>{Math.round(props.data['list'][0]['temp']['min'])}<sup>°</sup>C</span>  
                <span>{Math.round(props.data['list'][0]['temp']['max'])}<sup>°</sup>C</span> 
                <span>{props.data['list'][0]['weather'][0]['description']}</span>  
                <span>{props.data['list'][0]['humidity']}%</span>  
                <span>{props.data['list'][0]['speed']}mph</span> 
                <span>{props.data['list'][0]['deg']}<sup>°</sup></span>   
                <span>{props.data['list'][0]['gust']}m/s</span> 
                <span>{props.data['list'][0]['clouds']}%</span>  
            </div>
            <div>
                <span>{getDayList()[1]}</span>   
                <span>{Math.round(props.data['list'][1]['temp']['min'])}<sup>°</sup>C</span>  
                <span>{Math.round(props.data['list'][1]['temp']['max'])}<sup>°</sup>C</span> 
                <span>{props.data['list'][1]['weather'][0]['description']}</span>  
                <span>{props.data['list'][1]['humidity']}%</span>  
                <span>{props.data['list'][1]['speed']}mph</span> 
                <span>{props.data['list'][1]['deg']}<sup>°</sup></span>   
                <span>{props.data['list'][1]['gust']}m/s</span> 
                <span>{props.data['list'][1]['clouds']}%</span>  
            </div>
            <div>
                <span>{getDayList()[2]}</span>   
                <span>{Math.round(props.data['list'][2]['temp']['min'])}<sup>°</sup>C</span>  
                <span>{Math.round(props.data['list'][2]['temp']['max'])}<sup>°</sup>C</span> 
                <span>{props.data['list'][2]['weather'][0]['description']}</span>  
                <span>{props.data['list'][2]['humidity']}%</span>  
                <span>{props.data['list'][2]['speed']}mph</span> 
                <span>{props.data['list'][2]['deg']}<sup>°</sup></span>   
                <span>{props.data['list'][2]['gust']}m/s</span>
                <span>{props.data['list'][2]['clouds']}%</span>  
            </div>
            <div>
                <span>{getDayList()[3]}</span>   
                <span>{Math.round(props.data['list'][3]['temp']['min'])}<sup>°</sup>C</span>  
                <span>{Math.round(props.data['list'][3]['temp']['max'])}<sup>°</sup>C</span> 
                <span>{props.data['list'][3]['weather'][0]['description']}</span>  
                <span>{props.data['list'][3]['humidity']}%</span>  
                <span>{props.data['list'][3]['speed']}mph</span> 
                <span>{props.data['list'][3]['deg']}<sup>°</sup></span>   
                <span>{props.data['list'][3]['gust']}m/s</span>
                <span>{props.data['list'][3]['clouds']}%</span>  
            </div>
            <div>
                <span>{getDayList()[4]}</span>   
                <span>{Math.round(props.data['list'][4]['temp']['min'])}<sup>°</sup>C</span>  
                <span>{Math.round(props.data['list'][4]['temp']['max'])}<sup>°</sup>C</span> 
                <span>{props.data['list'][4]['weather'][0]['description']}</span>  
                <span>{props.data['list'][4]['humidity']}%</span>  
                <span>{props.data['list'][4]['speed']}mph</span> 
                <span>{props.data['list'][4]['deg']}<sup>°</sup></span>   
                <span>{props.data['list'][4]['gust']}m/s</span>
                <span>{props.data['list'][4]['clouds']}%</span>  
            </div>
            <div>
                <span>{getDayList()[5]}</span>   
                <span>{Math.round(props.data['list'][5]['temp']['min'])}<sup>°</sup>C</span>  
                <span>{Math.round(props.data['list'][5]['temp']['max'])}<sup>°</sup>C</span> 
                <span>{props.data['list'][5]['weather'][0]['description']}</span>  
                <span>{props.data['list'][5]['humidity']}%</span>  
                <span>{props.data['list'][5]['speed']}mph</span> 
                <span>{props.data['list'][5]['deg']}<sup>°</sup></span>   
                <span>{props.data['list'][5]['gust']}m/s</span> 
                <span>{props.data['list'][5]['clouds']}%</span>  
            </div>
            <div>
                <span>{getDayList()[6]}</span>   
                <span>{Math.round(props.data['list'][6]['temp']['min'])}<sup>°</sup>C</span>  
                <span>{Math.round(props.data['list'][6]['temp']['max'])}<sup>°</sup>C</span> 
                <span>{props.data['list'][6]['weather'][0]['description']}</span>  
                <span>{props.data['list'][6]['humidity']}%</span>  
                <span>{props.data['list'][6]['speed']}mph</span> 
                <span>{props.data['list'][6]['deg']}<sup>°</sup></span>   
                <span>{props.data['list'][6]['gust']}m/s</span>
                <span>{props.data['list'][6]['clouds']}%</span>  
            </div>
        </div>

    )

    function getDayList(){
        // Creates a list of the days in the week starting from the current Day as today
        // Used in the daily forcast

        var Day_of_location = props.date.split('-')[2] //gets day of the location 
        //console.log(Day_of_location)

        const Days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Saty', 'Sun']
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



