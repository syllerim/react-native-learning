import React, { Component } from 'react';
import { View, Text } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'

export default class App extends Component {
    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="houses" component={Houses} title="Casas" initial={true}/>
                    <Scene key="characters" component={Characters} title="Personajes" initial={false}/>
                </Stack>
            </Router>
        )
    }
}