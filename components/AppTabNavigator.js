import React, { Component } from 'react';
import {View,Text,Image} from 'react-native';
import {CreateBottomTabNavigator} from 'react-navigation-tabs';
import DonateScreen from '../screens/BookDonateScreen';
import RequestScreen from '../screens/BookRequestScreen';

export const AppTabNavigator = CreateBottomTabNavigator({
    donateBooks:{
        screen:DonateScreen,
        navigationOptions:{
            tabBarIcon:<Image source ={require("../assets/bookDonate.png")}
                        style ={{width:20,height:20}}/>,
            tabBarLabel:"Donate Books"
        }
    },
    requestBooks:{
        screen:RequestScreen,
        navigationOptions:{
            tabBarIcon:<Image source ={require("../assets/bookRequest.png")}
                        style ={{width:20,height:20}}/>,
            tabBarLabel:"Request Books"
        }
    }
})
