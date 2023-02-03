import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, hp, wp } from '../common/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'

export default function HomeHeader(props) {
  return (
    <View style={style.container}>
      <TouchableOpacity>
      <Ionicons name='menu-outline' size={30} color={Colors.BLACK} />  
      </TouchableOpacity>
      <Text style={style.text}>{props.title}</Text>
      <TouchableOpacity onPress={()=> props.onSearchPress()}>
      <AntDesign name='search1' size={20} color={Colors.BLACK} />
      </TouchableOpacity>
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