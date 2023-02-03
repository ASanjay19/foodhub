import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors, hp, wp } from '../common/constants'
import { Images } from '../common/utils'
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function BagListItem(props) {
    const {name,description,amount,image} = props.item;
  return (
    <TouchableOpacity onPress={()=> props.onPress()} style={styles.container}>
      <View style={styles.rightContainer}>  
      <Image resizeMode='contain' source={image} style={styles.image}/>
       <View style={{justifyContent:'space-evenly',marginLeft:wp(3)}}>
        <View>
        <Text style={styles.boldText}>{name}</Text>
        <Text style={styles.smallText}>{description}</Text>
        </View>
        <Text style={styles.amount}>{amount}</Text>
       </View>
       <View>
       </View>
      </View>
      <TouchableOpacity style={styles.close} onPress={()=> props.onRemove()}>
      <AntDesign name='closesquare' size={30} color={Colors.ADDCOLOR}/> 
      </TouchableOpacity>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container:{
     height:hp(15),
     marginTop:hp(2),
     flexDirection:'row',
     alignItems:'center',
     justifyContent:'space-between',
     width:wp(90),
     backgroundColor:Colors.WHITE,
     borderRadius:20
  },
  image:{
    height:hp(15),
    width:hp(15),
    borderTopLeftRadius:20,
    borderBottomLeftRadius:20
  },
  rightContainer:{
    flexDirection:'row',
  },
  boldText:{
    fontSize:16,
    fontWeight:'bold',
    color:Colors.BLACK
  },
  amount:{
    fontSize:16,
    fontWeight:'bold',
    color:Colors.SECONDARY
  },
  smallText:{
    fontSize:12
  },
  close:{
    position:'absolute',
    bottom:hp(1),
    right:-wp(3)
  }
})