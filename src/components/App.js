import React, { Component } from 'react';
import { StatusBar } from 'react-native'
import { Router, Scene, Actions, Stack } from 'react-native-router-flux'
import { Houses, Characters } from './sections/'
import { configureAxios } from '../api/'
import * as api from './../api/'

export default class App extends Component {

    componentWillMount() {
        api.configureAxios()

        StatusBar.setBarStyle('light-content')

    }

    render() {
        return (
            <Router>
                <Stack key="root">
                    <Scene key="houses" component={Houses} title="Casas" initial={true} hideNavBar={true}/>
                    <Scene key="characters" component={Characters} title="Personajes" initial={false}/>
                </Stack>
            </Router>
        )
    }
}