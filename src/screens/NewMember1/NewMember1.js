import { StyleSheet,View, Text,Image,TouchableOpacity,ScrollView,Dimensions,StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useLayoutEffect ,useState, useRef} from 'react'
import { useNavigation } from '@react-navigation/native'
import LinearGradient from 'react-native-linear-gradient'
import CustomButton from '../../components/CustomButton/CustomButton'

import Swiper from 'react-native-swiper';
import StepIndicator from 'react-native-step-indicator';
import Swipe1 from '../../components/Swipe/Swipe1/Swipe1';
import Swipe3 from '../../components/Swipe/Swipe3/Swipe3';
import Swipe2 from '../../screens/OrderBracelet2/OrderBracelet2'
import arrow from '../../../assets/images/icons/ArrowBack.png';




const PAGES = [Swipe1, Swipe2, Swipe3];




const firstIndicatorStyles = {
  stepIndicatorSize: 30,
  currentStepIndicatorSize: 40,
  separatorStrokeWidth: 3,
  currentStepStrokeWidth: 5,
  stepStrokeCurrentColor: '#E20522',
  separatorFinishedColor: '#E20522',
  separatorUnFinishedColor: '#db4256',
  stepIndicatorFinishedColor: '#E20522',
  stepIndicatorUnFinishedColor: '#db4256',
  stepIndicatorCurrentColor: '#ffffff',
  stepIndicatorLabelFontSize: 15,
  currentStepIndicatorLabelFontSize: 15,
  stepIndicatorLabelCurrentColor: '#000000',
  stepIndicatorLabelFinishedColor: '#ffffff',
  stepIndicatorLabelUnFinishedColor: 'rgba(255,255,255,0.5)',
  labelColor: '#666666',
  labelSize: 12,
  currentStepLabelColor: '#E20522',
};

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const NewMember1 = () => {
  const [userInfo, setUserInfo] = useState(new FormData());
  const userIn = (ob)=>{
    setUserInfo(ob);
    
    
  }

  

  const goToNextPage = () => {
    console.log('hhhhhh');
    setCurrentPage(currentPage + 1);
  };
  const goToPreviousPage = () => {
    setCurrentPage(currentPage - 1);
  };
  

  const [value, setValue] = useState()
  const [step, setStep] = useState(0);
  
  

  const renderViewPagerPage = (Data, props) => {
    return (
      <Data key={Data} {...props}/>
      
    );
  };
  

  const [currentPage, setCurrentPage] = React.useState(0);

  const onStepPress = (position) => {
    setCurrentPage(position);
  };

  const renderLabel = ({
    position,
    label,
    currentPosition,
  }) => {
    return (
      <Text
        style={
          position === currentPosition
            ? styles.stepLabelSelected
            : styles.stepLabel
        }
      >
        {label}
      </Text>
    );
  };

    const navigation=useNavigation();
    useLayoutEffect(() => {
      navigation.setOptions({
        headerShown: true,
        headerTransparent: true,
        headerTitleAlign: 'center',
        headerTitleStyle: {
          alignSelf: 'center',
          color: 'white',
          height: '100%',
          fontSize: 27,
          fontWeight: '100',
        },
        headerLeft: () => (
          <TouchableOpacity
            style={{
              width: 45,
              height: 45,
              borderRadius: 25,
              borderColor: 'white',
              borderWidth: 1,
              marginLeft: 10,
              marginRight: 30,
              marginBottom: 30,
              marginTop: 25,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => navigation.goBack()}
          >
            <Image source={arrow} style={{ width: '60%', height: '60%' }} />
          </TouchableOpacity>
        ),
        headerTitle: ' Add member', 
        headerStyle: {
          
          position: 'sticky',
          zIndex: 100, // Ajout de la propriété "zIndex" pour superposer le header
        },
      });
    }, []);
  
  return (
    <LinearGradient start={{x: 1, y: 0}} end={{x: 0, y: 1}} locations={[0,0.6]} colors={['#E20522', '#000000']} style={styles.linearGradient}>
          
          <SafeAreaView style={styles.SafeAreaView}>
          <StatusBar barStyle="light-content" backgroundColor={'transparent'} translucent={true} />
          <View style={{}}>
            <Text style={{textAlign: 'center',fontSize: 25,color:'#FFFFFF',paddingBottom:30,paddingTop:30}}></Text>
            
        </View>   
           
 
          
         
          

          
      <View style={styles.body}>
          
      <View style={styles.stepIndicator}>
        <StepIndicator
          stepCount={3}
          customStyles={firstIndicatorStyles}
          currentPosition={currentPage}
          labels={['Form', 'Order bracelet', 'Success']}
          renderLabel={renderLabel}
          onPress={onStepPress}
        />
      </View>

     
       
      
      {currentPage === 0 && <Swipe1 handellogin={goToNextPage} userInfo={userIn} />}
      {currentPage === 1 && <Swipe2 handellogin={goToNextPage} user={userInfo}/>}
      {currentPage === 2 && <Swipe3 />}
        
     

      
      
      
      
            
          </View>
          
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
  
  linearGradient: {
    flex:1
    
  },
  SafeAreaView:{
    flex:1
  },
 
 

body:{
  paddingtop:10,
  paddingLeft:10,
  paddingRight:10,
  zIndex: 2,
  backgroundColor:'#FBFBFB',
  borderTopLeftRadius:45,
  borderTopRightRadius:45,
  flex:2,
  minHeight: screenHeight/1.3,
  
  
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
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
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




export default NewMember1