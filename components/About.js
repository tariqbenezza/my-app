import React from 'react';
import {Text, View, ActivityIndicator, Image} from 'react-native';
import {Button} from 'nachos-ui'
import style from '../Style.js';

export default class About extends React.Component{

    static navigationOptions = {
        tabBarIcon:() => {
            return (
                <Image 
                    style={{width:40, height:40}}
                    source={require('../icons/user.png')}
                />
            );
        }
    }

    search(){
        this.props.navigation.navigate('Search');
    }

    render(){
        return(
            <View style={style.container}>
                <Text style={style.title}>
                    À propos de l'application
                </Text>
                <Text>
                    Dolor enim fugiat cupidatat magna eiusmod cillum sint Lorem esse culpa. Mollit in anim ipsum nulla et anim cupidatat occaecat in veniam pariatur aliquip mollit sunt. Eiusmod cillum veniam eiusmod sit nisi quis. Occaecat duis sint deserunt eiusmod ea ea officia velit tempor aliqua officia minim. Aliqua cillum do laboris ullamco laboris ullamco officia dolor non. Officia laborum quis exercitation incididunt et voluptate ipsum.
                </Text>
                <Button 
                    style={style.button} 
                    onPress={() => this.search()} 
                >
                    Rechercher une ville
                </Button>
            </View>
        )
    }

}