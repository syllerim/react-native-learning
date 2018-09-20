import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import styles from './styles'
import * as api from '../../../api/'
import { HouseCell} from './../../widgets/'

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
        //Alert.alert('Casa: ', house.nombre)
        thi.setState({ selected: house })
    }

    _renderItem({ item }) {
        return <HouseCell 
                    house={item} 
                    onHousePress = {v=> this._onHouseTapped(v)}
                    selected={this.state.seleted} 
                    backgroundColor={'blue'}
                    selectedBackgroundColor={'red'}/>
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList 
                    data={this.state.housesList}
                    renderItem={ value => this._renderItem(value)}
                    keyExtractor={ (item, i) => 'cell' + item.id }
                    extraData={this.state}
                    numColumns={2}
                    style={{paddingTop: 40}}
                />
            </View>
        )
    }
}
