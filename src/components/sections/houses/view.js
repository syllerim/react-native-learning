import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import * as api from '../../../api/'

export default class extends Component {

    constructor(props) {
        super(props)

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

    _onHouseTapped(house) {
        Alert.alert('Casa: ', house.nombre)
    }

    _renderItem({ item }) {
        return <HouseCell house={item} onHousePress = {v=> this._onHouseTapped(v) }/>
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.housesList}
                    renderItem={ value => this._renderItem(value)}
                    keyExtractor={ (item, i) => 'cell' + item.id }
                />
            </View>
        )
    }
}

class HouseCell extends Component {

    static defaultProps = {
        house: null,
        onHousePress: () => {}
    }

    render() {
        const { house } = this.props
        const name = house ? house.nombre : '-'
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onHousePress(house) }
                style={ styles.cell }>
                <Text>{name}</Text>
            </TouchableOpacity>
        )
    }
}