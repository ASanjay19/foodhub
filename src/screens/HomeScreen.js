import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
import HomeHeader from '../components/HomeHeader'
import { hp, Strings } from '../common/constants'
import MenuCard from '../components/MenuCard'
import { MenuData } from '../common/server'

export default function HomeScreen(props) {

  const onHandlePress = ()=>{
   props.navigation.navigate('Cofee')
  }

  return (
    <View style={styles.container}>
      <HomeHeader title={Strings.MENU} onSearchPress={()=>props.navigation.navigate('Cofee')}/>
      <FlatList
      contentContainerStyle={{justifyContent:'center'}}
      showsVerticalScrollIndicator={false}
      data={MenuData}
      renderItem={({item})=> <MenuCard onPress={()=>onHandlePress()} item={item}/>}
      keyExtractor={item => item.id}
      numColumns={2}
      ListFooterComponent={()=> <View style={{height:hp(6)}}/>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1
    }
})