import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'

import tran from '../../../assets/images/tran.png'
import bra from '../../../assets/images/bra.png'
import hist from '../../../assets/images/hist.png'
import not from '../../../assets/images/not.png'
import udemy from '../../../assets/images/udemy.png'
import card from '../../../assets/images/card.png'
import card2 from '../../../assets/images/card2.png'
import avatar from '../../../assets/images/avatar.png'
import proAvatar from '../../../assets/images/proAvatar.png'


const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const HomeScreen = () => {
  const navigation=useNavigation();
  useLayoutEffect(()=>{
    navigation.setOptions({
      headerShown:false,
    })
  }, [])
  return (
      
        <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
            
          <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
          
          <View style={styles.head}>
              <View style={styles.nav}>
                <View style={{borderRadius:25,borderColor:"white",borderWidth:2,width:45,height:45,justifyContent:"center",alignItems:'center'}}><Image source={proAvatar} style={{width:'101%',height:'101%',borderRadius:25}} /></View>
                <TouchableOpacity style={{width:45,height:45,justifyContent:'center',alignItems:'center', borderColor:"white",borderWidth:0,borderRadius:17}}>
                  <Image source={not} style={{width:22,height:24}} />
                </TouchableOpacity>
              </View>
              <View style={styles.money}>
                <Text style={{textAlign: 'center',fontSize: 13,color:'#AD9CDB'}}>Available Balance</Text>
                <Text style={{textAlign: 'center',fontWeight: 'bold',fontSize: 40,color:'#FFFFFF'}}>$11.547.54</Text>
              </View>
          </View>
          
          <SafeAreaView style={{ position: 'absolute', elevation: 3,zIndex: 3,flex:1,width:'100%',height:110,top:screenHeight/4.3 }}>
                
                <View style={{width:'100%',height:50,alignItems: 'center',justifyContent:'center',height:'100%'}}>
                  <View style={styles.menu}>
                  <TouchableOpacity>
                    <View style={styles.flex}>
                      
                    
                    <Text>Top Up</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.flex}>
                    
                    <Image source={tran} style={{width:30,height:30}} />
                    <Text>Transfer</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.flex}>
                    
                    <Image source={bra} style={{width:30,height:30}} />
                    <Text>Braclet</Text>
                    
                    </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                    <View style={styles.flex}>
                    
                    <Image source={hist} style={{width:30,height:30}} />
                    <Text>History</Text>
                    
                    </View>
                    </TouchableOpacity>
                    
                  </View>
                </View>
                
          </SafeAreaView>
          
          <View style={styles.body}>
          
            <View style={{marginTop:70,width:'100%',marginBottom:10}}>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>Members</Text>
                <View>
                  <TouchableOpacity>
                  <Text>View All</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:"row",marginTop:10}}>
                <View style={{alignItems:"center",marginRight:18}}>
                <Image source={avatar} style={{width:45,height:45,borderRadius:10}} />
                <Text>Hena</Text>
                </View>
                <View style={{alignItems:"center",marginRight:18}}>
                <Image source={avatar} style={{width:45,height:45,borderRadius:10}} />
                <Text>Hena</Text>
                </View>

                <View style={{alignItems:"center",marginRight:18}}>
                  <View style={{width:45,height:45,borderRadius:10, backgroundColor:'rgba(142, 147, 153, 0.24)',alignItems:"center",justifyContent:"center",padding:0}}>
                    <Text style={{fontSize:35,margin:0,padding:0,textAlignVertical:'bottom',textAlign:'center',lineHeight:47}}>+</Text>
                  </View>
                  
                
                
                </View>
              </View>
            </View>


            <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>Transaction</Text>
                <View>
                  <TouchableOpacity>
                  <Text>Today</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{flexDirection:'column',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <TouchableOpacity style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between', backgroundColor:'#F8F8F8',paddingLeft:25,paddingRight:25,height:70,marginTop:10,borderRadius:20}}>
                <Image source={udemy} style={{width:20}} />
                <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Udemy</Text>
                <Text>payment</Text>
                </View>
                <Text>-$165.00</Text>
                </TouchableOpacity>


                <TouchableOpacity style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between', backgroundColor:'#F8F8F8',paddingLeft:25,paddingRight:25,height:70,marginTop:10,borderRadius:20}}>
                <Image source={udemy} style={{width:20}} />
                <View style={{flex:1,paddingLeft:20,paddingRight:20}}>
                <Text style={{fontWeight:'bold',fontSize:20}}>Amazon</Text>
                <Text>payment</Text>
                </View>
                <Text>-$165.00</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexDirection:'row',width:'100%',alignItems:'center',justifyContent:'space-between'}}>
                <Text style={{fontSize:30,fontWeight:'bold'}}>Promo & Discount</Text>
                <View>
                  <TouchableOpacity>
                  <Text>See More</Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View>
              <SafeAreaView >
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <Image source={card} style={{width:300,marginRight:10}} />
      <Image source={card2} style={{width:300}} />
      </ScrollView>
    </SafeAreaView>
                
              </View>
            
          </View>
          </ScrollView>
          </SafeAreaView>
        </LinearGradient>
        
      

      
    
    
  )
}
const styles = StyleSheet.create({
  scrollView: {
    width:screenWidth,
    
    height:screenHeight,
  },
  flex:{alignItems: 'center',
  justifyContent:'center',},
  menu:{
    
    paddingLeft:25,
    paddingRight:25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    backgroundColor:'#FFFFFF',
    width:'87%',height:'100%',
    borderRadius:20,
    shadowColor: "#000000",
    shadowOffset: {
    width: 0,
    height: 8,
},
shadowOpacity:  0.21,
shadowRadius: 8.19,
elevation: 11
  },
  linearGradient: {
    flex:1
    
  },
  SafeAreaView:{
    flex:1
  },
  nav:{
    flex:1.5,
    paddingLeft:30,
    paddingRight:30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  money:{
    
    flex:2.5
  },
head:{
  zIndex: 2,
  height:screenHeight / 3.2,
flex:1
},
body:{
  paddingtop:10,
  paddingLeft:25,
  paddingRight:25,
  zIndex: 2,
  backgroundColor:'#FBFBFB',
  borderTopLeftRadius:45,
  borderTopRightRadius:45,
  flex:2,
  minHeight: screenHeight/1.3,
  
  
  }
})

export default HomeScreen