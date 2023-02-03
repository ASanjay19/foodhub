import { View, Text, ImageBackground, StyleSheet, TouchableOpacity, TextInput, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Images } from '../common/utils'
import { Colors, hp, Icons, wp } from '../common/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { CofeeFilters, CofeeListData } from '../common/server'
import CoffeeListItem from '../components/CoffeeListItem'
export default function CofeeScreen(props) {
    const [selectedFilter, setSelectedFilter] = React.useState('All');
    const [list,setList] = React.useState([]);

    React.useEffect(()=>{
      setTimeout(()=>{
       setList(CofeeListData)
      },500)
    },[])

    const onHandleSelectFilter = (val) => {
        if(val != 'All'){
       let temp =  CofeeListData.filter((item)=> item.category == val);
        setList(temp)
    }else{
        setList(CofeeListData)
    }
        setSelectedFilter(val)
    }


 const onSearchItem = (val) => {
    let temp = []
     CofeeListData.forEach((item)=>{
        if(item.name.includes(val)){
           temp.push(item)
        }
     })
     setList(temp)  
 }

    return (
        <View style={styles.container}>
            <ImageBackground style={styles.image} source={Images.Cofee3}>
            <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                <AntDesign style={{ padding: 15 }} name={Icons.ArrowBack} size={25} color={Colors.WHITE} />
                </TouchableOpacity>
                <View style={styles.conffeeTextContainer}>
                    <Text style={styles.boldText}>COFFEE</Text>
                    <Text style={styles.semiBoldText}>It's Great <Text style={styles.boldText}>Day For</Text></Text>
                    <Text style={styles.boldText}>Coffee</Text>
                </View>
            </ImageBackground>

            <View style={styles.subContainer}>
                <View style={styles.filterContainer}>
                    {
                        CofeeFilters.map((val) => {
                            return (
                                <TouchableOpacity onPress={() => onHandleSelectFilter(val)}>
                                    <Text style={selectedFilter == val && styles.filterText}>{val}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>

                     <View style={styles.textInput}>
                            <AntDesign name='search1' size={15} style={{ marginRight: 10 }} />
                            <TextInput onChangeText={(val)=> onSearchItem(val)} placeholder='Search your coffee' />
                     </View>
                     
                    <FlatList
                        contentContainerStyle={{alignItems:'center'}}
                        showsVerticalScrollIndicator={false}
                        data={list}
                        renderItem={({ item }) => <CoffeeListItem onPress={()=> props.navigation.navigate('CofeeDetails',{item})} item={item} />}
                        keyExtractor={item => item.id}
                        ListFooterComponent={()=> <View style={{height:hp(20)}}/>}
                    />

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,  
      backgroundColor:Colors.WHITE
    },
    image: {
        width: wp(100),
        height: hp(40),
    },
    subContainer: {
        width: wp(100),
        backgroundColor: Colors.WHITE,
        top:-hp(10),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: hp(2),
    },
    conffeeTextContainer: {
        top: hp(5),
        left: wp(60)
    },
    boldText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Colors.WHITE
    },
    semiBoldText: {
        fontSize: 16,
        fontWeight: '500',
        color: Colors.WHITE
    },
    filterContainer: {
        marginTop: hp(2),
        marginHorizontal: wp(10),
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    filterText: {
        color: Colors.BLACK,
        fontWeight: '800'
    },
    textInput: {
        width: wp(80),
        height: hp(5),
        borderWidth: 1,
        borderRadius: 20,
        paddingLeft: 20,
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: Colors.GRAY,
        alignSelf:'center',
        marginTop:hp(2),
        marginBottom:hp(1)
    }
})