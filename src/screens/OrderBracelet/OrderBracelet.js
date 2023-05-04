import { View, Text,Image,StyleSheet,Pressable,shadow, TouchableWithoutFeedback, ScrollView} from 'react-native'
import React ,{useState} from 'react'
import bracelet1 from '../../../assets/images/bracelet1.png'
import bracelet2 from '../../../assets/images/bracelet2.png'
//import RadioForm from 'react-native-simple-radio-button'
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context'
import { SelectList } from 'react-native-dropdown-select-list'
import SelectDropdown from 'react-native-select-dropdown'
import CustomButton from '../../components/CustomButton/CustomButton'
import { useNavigation } from '@react-navigation/native';
const colors = [
    '#E20522',
    '#000000',
    '#F4A1DD',
    '#52EB85',
    
  ];
  
  const CIRCLE_SIZE = 40;
  const CIRCLE_RING_SIZE = 2;
   let index =1;

  const categories1 =[
    {key:'1', value:'Poslik Office'},
    {key:'2', value:'Home delivery'},
  ];
  
  const categories2 =[
    {key:'1', value:'Cash on delivery'},
    {key:'2', value:'Pay online now'},
  ];
  
    



const OrderBracelet = () => {

    const navigation = useNavigation();

    const onContinuePressed = () => {
    
      navigation.navigate("Forget ¨Password");
  
    }

    
    const [selectedItem,setSelectedItem] = useState(null)

    const [category,setCategory]=useState('Poslik Office')
    const [bcategory2,setCategory2]=useState('Cash on delivery')

    const [isImageClicked, setIsImageClicked] = useState(false);

   

    const handleImageClick = () => {
      setIsImageClicked(!isImageClicked);
    };

    const selectedData = [

        {value : 'bracelet1 ', imageLink : require('../../../assets/images/bracelet1.png')},
        {value : 'bracelet2 ', imageLink : require('../../../assets/images/bracelet2.png')},

    ]


    const [value, setValue] = useState(0);

   




  return (
   

      
    
      
      
      <SafeAreaView style={Styles.ViewContainer}>
      <ScrollView style={{width:'100%',height:'500%',zIndex:-1,flex:1}}>
      <View style={{flex:1,justifyContent:'center',alignItems:'center',minHeight:700}}>
      <View style={{justifyContent: "center",flexDirection:'column',alignItems:"center",width:"90%",flex:2}}>
      
       <Text style={{fontSize: 20, color: '#394452',height:30,alignSelf:'flex-start'}}>Choose the type you prefer</Text> 
      
       <View style={Styles.radioImageRow} >
        {selectedData.map(item => {
            return(
                  <Pressable  key ={item.value}  onPress ={()=> setSelectedItem(item.value)} style={[Styles.imageMain , selectedItem == item.value && Styles.selectedImageMain]}>
                    <Image source={item.imageLink} stylte={Styles.imageStyle}/>
  

                       
                       
                  </Pressable>

            )

        })}  

    
    </View>
    </View>
   
    <View style={{justifyContent: "flex-start",flexDirection:'column',width:"90%",flex:0.8}}>

    <Text style={{fontSize: 20, color: '#394452',height:60,paddingTop:30}}>Choose the color</Text> 
   
          <View style={[Styles.group]}>
            {colors.map((item, index) => {
              const isActive = value === index;
              return (
                <View key={item}>
                  <TouchableWithoutFeedback
                    onPress={() => {
                      setValue(index);
                    }}>
                    <View
                      style={[
                        Styles.circle,
                        isActive && { borderColor: item },
                      ]}>
                      <View
                        style={[Styles.circleInside, { backgroundColor: item }]}
                      />
                    </View>
                  </TouchableWithoutFeedback>
                </View>
              );
            })}
          </View>
         
        
      
    </View>

    <View style={{justifyContent: "flex-start",flexDirection:'column',width:"90%",flex:1}}>

    <Text style={{fontSize: 20, color: '#394452',height:60}}>Choose your delivery method</Text> 
   
    <View >
    
       <SelectList
       setSelected={setCategory}
       data={categories2}
       placeholder={"Select Category"}
       defaultOption={{key:'1', value:'Cash on delivery'}}
       search={false}


       
       />
    </View>
   
    </View>

    <View style={{justifyContent: "flex-start",flexDirection:'column',width:"90%",flex:1}}>

    <Text style={{fontSize: 20, color: '#394452',height:60}}>Choose your payment method</Text> 

    <View>
       <SelectList
       setSelected={setCategory}
       data={categories1}
       placeholder={"Select Category"}
       defaultOption={{key:'1', value:'Cash on delivery'}}
       search={false}


       
       />

    </View>
    
    </View>
    <View style={{width:'60%' ,paddingBottom:20,paddingTop:10}}>
    <CustomButton  text="Continue " onPress={onContinuePressed}/>

    </View>
             
    
    </View>
    </ScrollView>
    </SafeAreaView>
    
    
   
  )
}
const Styles = StyleSheet.create({

    ViewContainer:{
       flex: 1,
       justifyContent: 'center', 
       alignItems: 'center',
       


    },

    logo: {
      
        height:'100%',
        
    
        
        
       
    },
    imgcontainer:{

    justifyContent:'space-evenly',
    alignItems:'flex-start',
    flexDirection: 'row',
    width:'90%',
    height:160,
    paddingTop:20,
   
},

    radioImageRow :{

        flexDirection:'row',
        //marginVertical:20,
      
        justifyContent:'space-evenly',
        alignItems:'flex-start',
        width:'90%',
        height:160,
        paddingTop:20,
        
       
        
    },
    selectedImageMain: {
      borderWidth: 2,
      borderColor: 'red',
      shadowColor: 'red',
      shadowOffset: {
        width: 0,
        height: 0,
      },
      shadowOpacity: 0.5,
      shadowRadius: 2,
    },

    imageStyle:{

        width: '100%',
        height: '100%',
       
        



    },

    imageMain:{

        marginHorizontal:20,
        width: '48%',
        height: 180,
        borderRadius: 8,
        overflow: 'hidden',
        marginBottom: 10,
        
       

    },
    

    group: {
       
        
        flexDirection: 'row',
        paddingTop:20,
        
       
      
         
       
       

        
        
      },
      circle: {
        width: CIRCLE_SIZE + CIRCLE_RING_SIZE * 4,
        height: CIRCLE_SIZE + CIRCLE_RING_SIZE * 4,
        
        
        borderWidth: CIRCLE_RING_SIZE,
        borderColor: 'transparent',
        marginRight: 8,
        marginBottom: 12,
      },
      circleInside: {
        width: CIRCLE_SIZE,
        height: CIRCLE_SIZE,
        borderRadius: 1,
        position: 'absolute',
        top: CIRCLE_RING_SIZE,
        left: CIRCLE_RING_SIZE,
      },

     
   



    
    
  });
export default OrderBracelet