import React,{useState,useLayoutEffect,useCallback,useRef,useEffect} from 'react';
import {StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar} from 'react-native';
import Slider from "@react-native-community/slider";
import { useNavigation,useRoute } from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import ListItem from '../../components/ListItem/ListItem'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Takos from '../../../assets/images/Tacos.png';
import  CustomButton  from "../../components/CustomButton/CustomButton";
import ModalLimits from '../../components/ModalLimits/ModalLimits';
import arrow from '../../../assets/images/icons/ArrowBack.png'
import { API_BASE_URL } from '@env';
const takos = require('../../../assets/images/Tacos.png');
import {updateLimits} from '../../api/user_api'
  

  const BACKGROUND_COLOR = '#FAFBFF';
  //const TASKS = data.map((item, index) => ({ title:item.shopTitle,product:item.product,image:item.image, index }));
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const Limits = () => {
    const navigation=useNavigation();
    const route = useRoute();
    const { bracelet } = route.params;
    const [Bracelet,setBracelet]=useState();
    const [TASKS, setTASKS] = useState([]);
    useEffect(() => {
      if(bracelet){
       
      setBracelet(bracelet);
      console.log(bracelet);   
      const output = bracelet.restriction.map(item => ({
        shopTitle: item.restrictedshop.chain_name,
        product: item.restrictedProducts.map(product => product.name),
        productid: item.restrictedProducts.map(product => product._id),
        image: API_BASE_URL+"/uploads/"+item.restrictedshop.chain_image,
        idShop: item.restrictedshop._id,
        
    }))
    const newTasks  = output.map((item, index) => ({
      title: item.shopTitle,
      product: item.product,
      image: item.image, 
      idShops:item.idShop,
      productid:item.productid,
      index
    }));
    setTasks(newTasks);  // directly set the tasks
    
      return () => {
      }
  }}, [bracelet])
  useEffect(() => {
}, [TASKS]);
    const addShop = (newShop) => {
      setTasks(oldTasks => {
        // Get the highest current index
        const currentIndex = oldTasks.length > 0 ? Math.max(...oldTasks.map(task => task.index)) : -1;
        // Use current index + 1 for new task
        newShop.index = currentIndex + 1;
        return [...oldTasks, newShop];
      });
  };
    useLayoutEffect(()=>{
      navigation.setOptions({
        headerShown:true,
        headerTransparent:true,
        headerTitleAlign: 'center',
        headerTitleStyle: { alignSelf:'center',color: 'white' ,height:'100%',
        fontSize: 27,fontWeight:'100'},
          
        headerLeft: () => (
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              borderColor: 'white',
              borderWidth: 1,
              marginLeft: 10,
              marginRight:30,
              marginBottom:37,
              marginTop:37,
              justifyContent: 'center',
              alignItems: 'center',
              
            }}
            onPress={() => navigation.goBack()}
          >
            <Image
              source={arrow}
              style={{ width: '60%', height: '60%' }}
            />
          </TouchableOpacity>
        ),headerStyle: {
          
          height:'auto'
          
        
        
  
          
    
          },
      })
    }, [])
    const[Visible,setVisible]=useState(false);
    const[Data,setData]=useState([])
    const [tasks, setTasks] = useState(TASKS);
    const handleSubmit = async () => {
      console.log(tasks);
      try {
        const requestBody = {
          braceletId: bracelet._id, // Replace with the actual ID of the bracelet
          limits: tasks.map((task) => ({
            idShops: task.idShops,
            productid: task.productid,
          })),
        };
        console.log(requestBody)
    
        await updateLimits(requestBody);
        console.log('Limits updated successfully');
      } catch (error) {
        console.error('Error updating limits:', error);
      }
      // Call any other necessary functions or APIs to handle the submission
    };
    const onDismiss = useCallback((task) => {
      setTasks((tasks) => tasks.filter((item) => item.index !== task.index));
    }, []);
  
    const scrollRef = useRef(null);


    const [range, setRange] = useState('50');
    const [sliding, setSliding] = useState('Inactive');
    return (
        <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
          <View style={{}}>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}></Text>
            
        </View>   
          <ScrollView style={styles.scrollView}  showsVerticalScrollIndicator={false}>
          
           
     

          
      <SafeAreaView style={styles.body}>
    
        <View style={{flex: 1,height:90}}>
        <Text style={{fontWeight:'600',fontSize:15}}>Limit Per payment</Text>
        
            <View style={{flexDirection:'row',paddingTop:20}}>
            <Slider
  style={{ flex: 1 }}
  minimumValue={0}
  maximumValue={100}
  minimumTrackTintColor="tomato"
  maximumTrackTintColor="#000"
  thumbTintColor="red"
  value={Math.round(range)}
  onValueChange={(value) => setRange(Math.round(value))}
/>
<View style={{ borderWidth: 2, borderColor: 'black', width: 60, borderRadius: 5, alignItems: 'center', justifyContent: 'center' }}>
  <Text>
    <Text>{Math.round(range)}</Text>
    <Text>D</Text>
  </Text>
</View>
            
            </View>
        </View>
        <View style={{flex: 5,minHeight:300}}>
            <View style={{flexDirection:'row',justifyContent:'space-between'}}>
                <Text style={{fontSize:24,fontWeight:'bold',color:'black'}}>Limits</Text>
                <TouchableOpacity onPress={() => setVisible(true)}><Text style={{paddingTop:10}}>Add</Text></TouchableOpacity>
                <ModalLimits
                  isVisible={Visible}
                  onClose={() => setVisible(false)}
                  addShop={addShop}  // pass the function here
                  />
               
              
            </View>
            
            {tasks.map((task) => (
          <ListItem
            simultaneousHandlers={scrollRef}
            key={task.index}
            task={task}
            onDismiss={onDismiss}
          />
        ))}
        </View>
          
        


        
        
        
        <View >
         


        </View>
      
      
      
      
            
          </SafeAreaView>
          </ScrollView>
          <View style={{width:'100%',backgroundColor:'white',paddingLeft:50,paddingRight:50}}>
            
            <CustomButton text='Save Changes' onPress={handleSubmit}></CustomButton>
          </View>
          
          </SafeAreaView>
        </LinearGradient>
       
        
    );
}

const styles = StyleSheet.create({
    scrollView: {
        width:screenWidth,
        color:'black',
        height:screenHeight,
        flex:1,
      },
      flex:{alignItems: 'center',
      justifyContent:'center',},
      
      linearGradient: {
        flex:1
        
      },
      SafeAreaView:{
        flex:1
      },
     
     
    
    body:{
      
      paddingLeft:20,
      paddingRight:20,
      backgroundColor:'#FBFBFB',
      borderTopLeftRadius:45,
      borderTopRightRadius:45,
      flex:1,
      minHeight:screenHeight-77,
      
      width:'100%'
      
      
      },
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    stepIndicator: {
      marginVertical: 50,
      position:"absolute",
      width:screenWidth,
      top:-70,
      
      
    },
    page: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    stepLabel: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#999999',
    },
    stepLabelSelected: {
      fontSize: 12,
      textAlign: 'center',
      fontWeight: '500',
      color: '#E20522',
    },
      slide: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 22,
      fontWeight: '600',
      color:'black',
      paddingTop:10
      
    },
    input: {
      height: 40,
      width: '80%',
      borderColor: 'gray',
      borderWidth: 1,
      paddingHorizontal: 16,
      marginBottom: 16,
    },
  });
  export default () => {
    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Limits />
      </GestureHandlerRootView>
    );
  };



  
