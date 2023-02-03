import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, hp, wp } from '../common/constants'
import { Images } from '../common/utils'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function CoffeeListItem(props) {
    const {name,description,amount,image} = props.item;
  return (
    <View  style={styles.container}>
      <View style={styles.rightContainer}>  
      <Image resizeMode='contain' source={image} style={styles.image}/>
       <View style={{justifyContent:'space-evenly',marginLeft:wp(3)}}>
        <View>
        <Text style={styles.boldText}>{name}</Text>
        <Text style={styles.smallText}>{description}</Text>
        </View>
        <Text style={styles.boldText}>{amount}</Text>
       </View>
       <View>
       </View>
      </View>
      <TouchableOpacity onPress={()=> props.onPress()}>
      <AntDesign name='plussquare' size={30} color={Colors.ADDCOLOR}/> 
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
     height:hp(15),
     marginTop:hp(2),
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     width:wp(90)
  },
  image:{
    height:hp(15),
    width:hp(15),
    borderRadius:20
  },
  rightContainer:{
    flexDirection:'row',
  },
  boldText:{
    fontSize:16,
    fontWeight:'bold',
    color:Colors.BLACK
  },
  smallText:{
    fontSize:12
  }
})