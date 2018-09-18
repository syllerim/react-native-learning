import React, { Component } from 'react'
import { View, Text, Button, FlatList } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import * as api from '../../../api/'

export default class extends Component {

    constructor(props) {
        super(props)
        this.goToCharacters = this.goToCharacters.bind(this)

        this.state = {
            housesList: []
        }
    }

    componentWillMount() {
        this._fetchHousesList()
    }

    _fetchHousesList() {
        api.fetchHouses().then( response => { 
            console.log("Response fetchHouses", response)
            if (response && response.data && response.data.records) {
                this.setState({ housesList: response.data.records })
            }
        }).catch( error => {
            console.log("Error Response fetchHouses", error)
            this.setState({ housesList: [] })
        })
    }

    goToCharacters() {
        Actions.characters({ title: "Personajes" })
    }

    _renderItem({ item, index }) {
        console.log("_renderItem item: ", item)
        console.log("_renderItem index: ", index)
        return(
            <View style={{height: 120, boderWidth: 1, borderColor: 'blue', alignItems: 'center', justifyContent: 'center'}}>
                <Text>{item.nombre}</Text>
            </View>
        )
    }

    render() {
        console.log("Response fetchHouses", this.state.housesList)
        return (
            <View style={styles.list}>
                <FlatList 
                    data={this.state.housesList}
                    renderItem={ data => this._renderItem(data)}
                    keyExtractor={ (item, i) => 'cell' + item.id }
                />

                <Text style={styles.text}>CASAS</Text>
                <Button title={'Pulsar para ir a caracteres'}
                    color={'red'}
                    onPress={ this.goToCharacters }
                />
            </View>
        )
    }
}