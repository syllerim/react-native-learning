import React, { Component } from 'react';
import { View, Text } from 'react-native'

// This class you can name it as you want

export default class App extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            backgroundColor: 'blue', 
            height: 300
        }
    }

    // Before the component is render
    componentWillMount() {
        this.state({ backgroundColor: 'lime', title: 'Value changed before rendering' })
    }

    // After 5 secs the component will be render with red
    componentDidMount() {
        setTimeout( () => {
            this.state({ backgroundColor: 'red', title: 'Value changed before rendering' })
        }, 5000)
    }
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: 'red' }}>
                <View style={{ flex: 1, backgroundColor: 'green' }}></View>
                <View style={{ flex: 1, backgroundColor: 'yellow' }}></View>
            </View>
        )
    }
}