import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, hp, Icons, wp } from '../common/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function CommonHeader(props) {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={()=> props.navigation.goBack()}>
      <AntDesign style={{marginRight:-wp(5)}} name={Icons.ArrowBack} size={25} color={Colors.BLACK} /> 
      </TouchableOpacity> 
      <Text style={style.text}>{props.title}</Text>
      <View />
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        width:wp(100),
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:wp(5)
    },
    text: {
        fontSize:16,
        fontWeight:'700',
        color:Colors.BLACK 
    }
})