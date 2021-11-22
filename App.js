import React, { useState, useEffect, useRef } from 'react';
import {
    Dimensions,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    StyledButton,
    Button,
    Picker,
    Keyboard
    
} from 'react-native';
import { AntDesign,Fontisto } from '@expo/vector-icons';
import {FloatingLabelInput} from 'react-native-floating-label-input';

//import { Button } from 'react-native-elements/dist/buttons/Button';
//import { Icon } from 'react-native-elements';
//import { useFonts } from '@use-expo/font';
//import AppLoading from 'expo-app-loading';
//import { url } from '../constants';
//import Spinner from 'react-native-loading-spinner-overlay';
//import { useBackHandler } from "@react-native-community/hooks";


const WINDOW_HEIGHT = Dimensions.get('window').height;
const WINDOW_HEIGHT2 = (Dimensions.get('window').height / 100) * 27;
const WINDOW_WIDTH = Dimensions.get('window').width;

const SLIDER_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = (Dimensions.get('window').height / 100) * 22;
const tch = (Dimensions.get('window').height / 100) * 27;

// font size
const fonta = (Dimensions.get('window').width / 100) * 5;
const fontb = (Dimensions.get('window').width / 100) * 3.9;
const ftitle = (Dimensions.get('window').width / 100) * 6;
const fontc = (Dimensions.get('window').width / 100) * 3.8;
const fontd = (Dimensions.get('window').width / 100) * 3.3;
//box height Width
const boxa = (Dimensions.get('window').height / 100) * 4;
const boxb = (Dimensions.get('window').height / 100) * 1;
const boxc = (Dimensions.get('window').height / 100) * 2;
// const boxc = (Dimensions.get('window').height / 100) * 15;
const boxd = (Dimensions.get('window').height / 100) * 55;
const boxe = (Dimensions.get('window').height / 100) * 11.5;
const boxsearch = (Dimensions.get('window').height / 100) * 6;
//margin 
const margina = (Dimensions.get('window').width / 100) * 8;

export default function PatientDeatails({}) {

  const [name, setName] = useState('');
  const [show, setShow] = useState(false);
  const [phone,setPhone] =useState('');
  const [email,setEmail]=useState('');
  const [age,setAge] = useState('');
  const [gender,setGender] = useState('');
  const [address,setAddress] = useState('');
  const [pin,setPin] = useState('');


  const nameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const ageRef = useRef();
  const genderRef = useRef();
  const addressRef = useRef();
  const pinRef = useRef();


  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(!show);
    }, 5000);
    return () => clearTimeout(timeout);
  }, [show]);
        return (
            <ScrollView>
            <View style={{ flex: 1,}}>
                    {/* checkout */}
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop:'3%'
                            
                        }}>
                        <View style={{ flexDirection: 'row', }}>
                      
                                <AntDesign
                                    style={{
                                        marginLeft: '13%',
                                        alignSelf: 'center',
                                        marginRight: '2%',
                                        marginTop:'6%',
                                        
                                      
                                    }}
                                    name="arrowleft"
                                    size={25}
                                    color="black"
                                />
                       
                            <Text style={styles.textd}>Patient Details</Text>
                        </View>

                  </View>
                    <View style={{ padding: 30, flex: 1, backgroundColor: '#fff',}}>
                    <FloatingLabelInput
                            label={'Name'}
                          //  togglePassword={show}
                            value={name}
                            hint="Name Surename"
                            returnKeyType="next"
                            
                            ref={nameRef}
                            onSubmitEditing={()=>{
                            phoneRef.current.focus();}}
                            onChangeText={value =>{ setName(value)}}
                             blurOnSubmit={false}
                          
                      />
                      
                    <View style={{marginTop:'10%'}}>
                      <FloatingLabelInput
                      label={'Mobile Number'}
                      value={phone}
                  //  staticLabel
                      keyboardType="numeric"
                      hint="1234567898"
                      ref={phoneRef}
                      returnKeyType="next"
                      onSubmitEditing ={()=>{
                          emailRef.current.focus();
                      }}
                      onChangeText={value => {
                      setPhone(value);
                    }}
                  
                    />
            </View>
            <View style={{ marginTop:'10%'}}>
                        <FloatingLabelInput
                            label={'Email'}
                            value={email}
                            returnKeyType="next"
                            ref={emailRef}
                            onSubmitEditing={()=>{
                                ageRef.current.focus();
                            }}
                            hint="example245@gmail.com"
                            onChangeText={value => setEmail(value)}
                            blurOnSubmit={false}
                        />
           </View>
           <View style={{marginTop:'10%',flexDirection:'row',justifyContent:'space-between'}}>
           <View style={{width:'45%'}}>
                        <FloatingLabelInput
                            label={'Age(Required)'}
                            value={age}
                            keyboardType='numeric'
                            hint="70"
                            ref={ageRef}
                            onSubmitEditing={()=>{
                                addressRef.current.focus();
                            }}
                            onChangeText={value => setAge(value)}
                            blurOnSubmit={false}
                            
                        />
           </View>
                        <View style={styles.genderContainer}>
                    <Picker
                        gender={gender}
                        ref={genderRef}
                        returnKeyType="next"
                        onSubmitEditing={()=>{
                            addressRef.current.focus()
                        }}
                        style={{ height: 40, width: 150,}}
                        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
                    >
                        <Picker.Item label="Gender" value="select" />
                        <Picker.Item label="Male" value="jmale" />
                        <Picker.Item label="Female" value="female" />
                        <Picker.Item label="Transgender" value="transgender"/>
                    </Picker>
                    </View>

           </View>
           <View style={{marginTop:'10%',}}>                                    
                        <FloatingLabelInput
                            label={'Address'}
                            value={address}
                            ref={addressRef}
                            onSubmitEditing={()=>{
                                pinRef.current.focus();
                            }}
                            hint="XXXXXXXXXXXXXXXXXXXXXXXX"
                            onChangeText={value => setAddress(value)}
                            blurOnSubmit={false}
                        />
           </View>
           <View style={{marginTop:'10%',}}>
                        <FloatingLabelInput                                         
                            label={'PIN CODE'}
                            value={pin}
                            keyboardType='numeric'
                            hint="123634"
                            ref={pinRef}
                            returnKeyType="next"
                            
                            onSubmitEditing={()=>{
                                Keyboard.dismiss();
                            }}
                           
                            onChangeText={value => setPin(value)}
                            blurOnSubmit={false}
                        />
           </View>
         
          <TouchableOpacity style={{marginTop:'15%',backgroundColor:'#728',height:'8%',width:'90%',borderRadius:10,alignSelf:'center'}}>
            <Text style={{color:'#fff',alignSelf:'center',fontSize:fonta,marginTop:'3%'}}>ADD PATIENT</Text>

            
            </TouchableOpacity>
                  
       </View>       
</View>
</ScrollView>

        );
    }
const styles = StyleSheet.create({
  
    textd: {
        marginLeft: 2,
        fontSize: ftitle,
       fontWeight: 'bold',
        marginBottom:'5%',
   //     fontFamily:'novaBold',
        marginTop:'9%'
      
    },
    genderContainer: {
        flex: 1,
        alignItems: "center",
        borderWidth:2,
        borderRadius:10,
        marginLeft:'2%',
        borderColor:'#567'
      }
 
});
