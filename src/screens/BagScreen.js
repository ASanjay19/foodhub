import { View, Text, StyleSheet, FlatList, Touchable, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import CommonHeader from '../components/CommonHeader'
import { Colors, hp, Strings, wp } from '../common/constants'
import BagListItem from '../components/BagListItem'
import { CofeeListData } from '../common/server'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromBag } from '../redux/actions/BagActions'

export default function BagScreen(props) {
  const [list, setList] = React.useState([]);
  const [total,setTotal] = React.useState('$0.0')
  const { bagData } = useSelector(state => state.bag);
 const dispatch = useDispatch();

  React.useEffect(()=>{
   calculateTotalAmount()
  },[bagData]);

  const calculateTotalAmount=()=> {
      let total=0;
     bagData.length>0 && bagData.forEach((val)=>{
        let n=Number(val.amount.substring(1))
        total += n;
      })
    setTotal(`$ ${total.toFixed(2)}`)
  }

  const removeBag=(item)=> {
    dispatch(removeFromBag(item))
  }

  return (
    <View style={styles.container}>
      <CommonHeader title={Strings.BAG} navigation={props.navigation} />
      <FlatList
        contentContainerStyle={{ alignItems: 'center' }}
        showsVerticalScrollIndicator={false}
        data={bagData}
        renderItem={({ item }) => <BagListItem onRemove={()=> removeBag(item)} onPress={() => props.navigation.navigate('CofeeDetails',{item})} item={item} />}
        keyExtractor={item => item.id}
        ListFooterComponent={() => {
          return (
            <View style={styles.footerContainer}>
              {
                bagData.length > 0 ?
                  <View>
                    <View style={{ alignItems: 'flex-end', marginRight: wp(5), marginTop: hp(2) }}>
                      {
                        bagData.map((val)=>{
                          return  <Text>{val.amount}</Text>
                        })
                      }
                      <Text style={{ fontSize: 16, color: Colors.BLACK, fontWeight: '700', top: 2 }}>{total}</Text>
                    </View>
                    <TouchableOpacity style={styles.botton} onPress={()=> alert(`order placed with amount of ${total}`)}>
                      <Text style={{ color: Colors.WHITE }}>Secure Checkout</Text>
                    </TouchableOpacity>
                  </View> : null
              }

            </View>
          )
        }
        }
        ListEmptyComponent={() => {
          return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: hp(40) }}>
              <Text>No Items are Added</Text>
              <Text onPress={() => props.navigation.navigate('Cofee')} style={{ color: Colors.BLUE }}>Click to add</Text>
            </View>
          )
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  footerContainer: {
    marginBottom: hp(10),
    width: wp(100)
  },
  botton: {
    width: wp(80),
    height: hp(5),
    backgroundColor: Colors.SECONDARY,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    marginTop: hp(2)
  }
})