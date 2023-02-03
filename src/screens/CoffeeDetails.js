import { View, Text, StyleSheet, Image, ImageBackground, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { Images } from '../common/utils'
import { Colors, hp, Icons, wp } from '../common/constants'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {useDispatch, useSelector} from 'react-redux';
import {addToFavorite,removeFromFavorite} from '../redux/actions/FavoriteActions'
import { addToBag } from '../redux/actions/BagActions'
export default function CoffeeDetails(props) {
    const [isAdded,setIsAdded] = React.useState(false);
    const {item} = props.route.params;
     const dispatch = useDispatch();

     const favorite = useSelector(state => state.favorite)

     React.useEffect(()=>{
       checkIsAddToFav()
     },[favorite])

     const checkIsAddToFav=()=>{
      let temAr=favorite.FavoriteData.filter((val)=> val.id == item.id);

      if(temAr.length >0){
        setIsAdded(true)
      }else{
        setIsAdded(false)
      }
     }

     const handleAddFavorite=()=>{
      if(isAdded){
        dispatch(removeFromFavorite(item))
      }else{
        dispatch(addToFavorite(item));
      }  
     }

     const handleAddToBag=()=>{
        dispatch(addToBag(item))
        alert('Item Added to bag')
     }

    return (
        <View style={Style.Container}>
            <ImageBackground resizeMode='cover' style={Style.image} source={item.image}>
                <TouchableOpacity onPress={()=> props.navigation.goBack()}>
                <AntDesign style={{ padding: 15 }} name={Icons.ArrowBack} size={25} color={Colors.WHITE} />
                </TouchableOpacity>
            </ImageBackground>

            <View style={Style.subContainer}>
                <Text style={Style.mainText}>{item.name}</Text>
                <View style={Style.ratingContainer}>
                    <FontAwesome name='star' size={25} color={Colors.RATINGCOLOR} />
                    <FontAwesome name='star' size={25} color={Colors.RATINGCOLOR} />
                    <FontAwesome name='star' size={25} color={Colors.RATINGCOLOR} />
                    <FontAwesome name='star' size={25} color={Colors.RATINGCOLOR} />
                    <FontAwesome name='star' size={25} color={Colors.RATINGCOLOR} />
                </View>
                <Text style={Style.disText}>Description</Text>
                <Text style={Style.fullDistext}>Espresso coffe drink with a small amount of
                    milk,usuallyy foamed. In Italian, macchiato
                    means “stained” or “spotted so the literal
                    translation of caffe macchiato is “stained” or
                    “marked coffee”</Text>
                <View style={Style.bottomContainer}>
                    <View>
                        <Text style={Style.priceText}>Price</Text>
                        <Text style={Style.amountText}>{item.amount}</Text>
                    </View>
                    <TouchableOpacity style={Style.bagButton} onPress={()=> handleAddToBag()}>
                        <Text style={{ color: Colors.WHITE }}>Add To Bag</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity onPress={()=> handleAddFavorite()} style={Style.FavoriteContainer}>
                    <AntDesign style={{ padding: 15 }} name={'heart'} size={20} color={ isAdded ? Colors.ADDCOLOR : Colors.GRAY} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
const Style = StyleSheet.create({
    Container: {
        flex: 1,
    },
    image: {
        width: wp(100),
        height: hp(50),
    },
    subContainer: {
        width: wp(100),
        height: hp(60),
        backgroundColor: Colors.WHITE,
        top: -hp(10),
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: hp(2),
        paddingVertical: hp(5),
        paddingHorizontal: wp(5)
    },
    ratingContainer: {
        flexDirection: 'row',
        width: wp(40),
        justifyContent: 'space-between',
        marginTop: hp(1)
    },
    mainText: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Colors.BLACK
    },
    disText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors.BLACK,
        marginTop: hp(4)
    },
    fullDistext: {
        marginTop: hp(1),
        fontSize: 14,
    },
    bottomContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: hp(10)
    },
    priceContainer: {

    },
    priceText: {
        fontSize: 12
    },
    amountText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: Colors.BLACK
    },
    bagButton: {
        backgroundColor: Colors.SECONDARY,
        paddingHorizontal: wp(10),
        paddingVertical: hp(1),
        borderRadius: hp(1)
    },
    FavoriteContainer: {
        width: 50,
        height: 50,
        borderRadius: 30,
        backgroundColor: Colors.WHITE,
        position: 'absolute',
        top: -hp(3),
        elevation: 7,
        right: wp(6)
    }
})