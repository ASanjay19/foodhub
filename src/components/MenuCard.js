import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, hp, wp } from '../common/constants'
import { Images } from '../common/utils'

export default function MenuCard(props) {
  const {name,description,image} = props.item;
  return (
    <TouchableOpacity style={styles.container} onPress={()=> props.onPress()}> 
      <Image source={image} style={styles.image}/>
      <View style={styles.textContainer}>
      <Text style={styles.mainText}>{name}</Text>
      <Text style={styles.subText}>{description}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
    width:wp(45),
    backgroundColor:Colors.WHITE,
    borderRadius:20,
    elevation:4,
    marginHorizontal:wp(2),
    marginVertical:hp(1)
  },
  image:{
    height:hp(20),
    width:wp(45),
    borderTopRightRadius:20,
    borderTopLeftRadius:20
  },
  textContainer:{
    paddingHorizontal:wp(2),
    paddingVertical:hp(2)
  },
   mainText:{
     fontSize:15,
     fontWeight:'700',
     color:Colors.BLACK
   },
   subText:{
    fontSize:11,
    fontWeight:'500',
    marginTop:hp(1)
   }
})