import React from 'react'
import {TextInput, Image, View} from 'react-native'
import {Button} from 'nachos-ui'
import style from '../Style.js'
import {StackNavigator} from 'react-navigation'
import List from './List.js'

class Search extends React.Component{

    static navigationOptions = {
        title:'Chercher une ville',
        tabBarIcon:() => {
            return (
                <Image 
                    style={{width:40, height:40}}
                    source={require('../icons/home.png')}
                />
            );
        }
    }

    constructor(props){
        super(props);
        this.state = {
            city : 'Montpellier'
        }
    }

    setCity(city){
        this.setState({city});
    }

    submit(){
        this.props.navigation.navigate('Result',{city:this.state.city})
    }

    render(){
        return(
            <View style={style.container}>
                <TextInput
                    underlineColorAndroid='transparent'
                    onChangeText={(text) => this.setCity(text)}
                    style={style.input}
                    value={this.state.city}
                />
                <Button 
                    style={style.button} 
                    onPress={() => this.submit()}> 
                    Rechercher
                </Button>
            </View> 
        );
    }
}

const navigationOptions = {
    headerStyle : style.header,
    headerTitleStyle: style.headerTitle
}

export default StackNavigator({
    Search:{
        screen:Search,
        navigationOptions
    },
    Result:{
        screen:List,
        navigationOptions
    }
})

