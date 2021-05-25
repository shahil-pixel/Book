import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Header} from 'react-native-elements'

const MyHeader = props=>{
return(
    <Header
    centerComponent = {{text:props.title,style:{color:'cyan',fontSize:20,fontWeight:'bold'}}}
    backgroundColor = 'coral'
    />
 )
}

export default MyHeader

