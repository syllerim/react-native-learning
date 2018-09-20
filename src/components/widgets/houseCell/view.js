import React, { Component } from 'react'
import { TouchableOpacity, Image } from 'react-native'
import styles from './styles'

export default class HouseCell extends Component {

    static defaultProps = {
        house: null,
        onHousePress: () => {}
    }

    render() {
        const { house } = this.props
        
        return (
            <TouchableOpacity 
                onPress={ () => this.props.onHousePress(house) }
                style={styles.cellContainer}>
                <Image
                    source={{ uri: house.image_dir }}
                    style={{width: '100%', height: '100%'}}
                    resizeMode={'cover'}
                />
            </TouchableOpacity>
        )
    }
}
