import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'

export default class extends Component {

    constructor(props) {
        super(props)
        this.goToCharacters = this.goToCharacters.bind(this)
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