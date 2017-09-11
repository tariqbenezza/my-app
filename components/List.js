import React from 'react'
import style from '../Style.js'
import {Text, ActivityIndicator, ListView, Image} from 'react-native'
import axios from 'axios'
import WeatherRow from './Row.js'

export default class List extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            title: `Météo/${navigation.state.params.city}`,
            tabBarIcon:() => {
                return (
                    <Image 
                        style={{width:40, height:40}}
                        source={require('../icons/home.png')}
                    />
                );
            }
        }
    }

    constructor (props) {
        super(props);
        this.state = {
            city:this.props.navigation.state.params.city,
            report:null
        }
        setTimeout(() => {
            this.fetchWeather()
        },1000)
        
    }

    fetchWeather (){
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${this.state.city},fr&units=metric&appid=`)
        .then((response) => {
            this.setState({
                report:response.data
            })
        });
    }

    render(){
        if(this.state.report === null){
            return(
                <ActivityIndicator color={style.color} size="large"/>
            )
        }
        else {
            const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
            return(
                <ListView
                    dataSource={ds.cloneWithRows(this.state.report.list)}
                    renderRow={(row, j, k) => <WeatherRow day={row} index={parseInt(k, 10)}/>}
                />
            );
        }
    }

}