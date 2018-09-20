import React, { Component } from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './styles'

export default class HouseCell extends Component {

    static defaultProps = {
        house: null,
        onHousePress: () => {},
        selected: null
    }

    render() {
        const { house, selected } = this.props
        const name = house ? house.nombre : '-'
        const isSelected = selected && selected.id && house.id ? true : false
        const backgroundColor = isSelected ? 'lime' : 'green'
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onHousePress(house) }
                style={ [styles.cellContainer, { backgroundColor: backgroundColor }] }>
                <Text>{name}</Text>
            </TouchableOpacity>
        )
    }
}
