import React from 'react'
import style from '../Style.js'
import {Text, ActivityIndicator, ListView} from 'react-native'
import axios from 'axios'

export default class List extends React.Component{

    static navigationOptions = ({navigation}) => {
        return {
            //title: `Météo/${navigation.state.params.city}`
        }
    }

    constructor (props) {
        super(props);
        this.state = {
            city:'Montpellier',//this.props.navigation.state.params.city,
            report:null
        }
        this.fetchWeather()
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
                    renderRow={(row) => <Text>{row.main.temp}</Text>}
                />
            );
        }
    }

}