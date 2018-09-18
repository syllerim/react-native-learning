import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import * as api from '../../../api/'

export default class extends Component {

    constructor(props) {
        super(props)
        this.goToCharacters = this.goToCharacters.bind(this)
    }

    componentWillMount() {
        this.fetchHousesList()
    }

    fetchHousesList() {
        api.fetchHouses().then( response => { 
            console.log("Response fetchHouses", response)
        }).catch( error => {
            console.log("Error Response fetchHouses", error)
        })
    }

    goToCharacters() {
        Actions.characters({ title: "Personajes" })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>CASAS</Text>
                <Button title={'Pulsar para ir a caracteres'}
                    color={'red'}
                    onPress={ this.goToCharacters }/>
            </View>
        )
    }
}