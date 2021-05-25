import React from 'react';
import {AppTabNavigator} from './AppTabNavigator';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {CustomSideBarMenu} from './CustomSideBarMenu';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{
        screen:AppTabNavigator
    },

 },
  {
      containedComponent:CustomSideBarMenu
  },
 { 

    initialRouteName:'Home'
})

