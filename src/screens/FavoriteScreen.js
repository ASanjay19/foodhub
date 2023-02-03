import { View, Text,StyleSheet,FlatList } from 'react-native'
import React from 'react'
import {useSelector} from 'react-redux';
import { Colors, hp, Strings } from '../common/constants'
import MenuCard from '../components/MenuCard'
import { MenuData } from '../common/server'
import CommonHeader from '../components/CommonHeader'
export default function FavoriteScreen(props) {
   const favorite = useSelector(state => state.favorite)

  console.log('favorite',favorite)
  return (
    <View style={styles.container}>
       <CommonHeader title={Strings.FAVORITE} navigation={props.navigation}/>
      <FlatList
      contentContainerStyle={{justifyContent:'center'}}
      showsVerticalScrollIndicator={false}
      data={favorite.FavoriteData}
      renderItem={({item})=> <MenuCard onPress={()=> props.navigation.navigate('CofeeDetails',{item})} item={item}/>}
      keyExtractor={item => item.id}
      numColumns={2}
      ListFooterComponent={()=> <View style={{height:hp(6)}}/>}
      ListEmptyComponent={()=>{
        return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center',marginTop:hp(40)}}>
          <Text>No Favorites are Added</Text>
          <Text onPress={()=> props.navigation.navigate('Cofee')} style={{color:Colors.BLUE}}>Click to add</Text>
        </View>  
        )
      }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      flex:1
  }
})