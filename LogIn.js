import React, { Component} from 'react';
import { Text, Image,View,TextInput,TouchableOpacity} from 'react-native';
import {AntDesign, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';


export default class LogIn extends Component{
  static navigationOptions={
    headerShown: false
}

    focus=()=>{
      this.setState({name:true})
      this.setState({pass:true})

    }
  mail=()=>{
    if (this.state.name==true){
    return(
    <View style={{position:'absolute',top:9,left:20,backgroundColor:'#f1f2f0'}}>
      <Text style={{color:'rgba(0, 102, 255,0.8)'}}>Email</Text>
      </View>
    ); 
  }
  }

  pawd=()=>{
    if (this.state.pass==true){
    return(
    <View style={{position:'absolute',top:9,left:20,backgroundColor:'#f1f2f0'}}>
      <Text style={{color:'rgba(0, 102, 255,0.8)'}}>Password</Text>
      </View>
    ); 
  }
  }
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: false,
      pass: false,
    }
  }
  _onPressButton() {
    
  }
  render(){
    
  return (

    <View style={{flex:1,backgroundColor:'#f1f2f0'}}>
      <View style={{backgroundColor:'#dfe4ea',alignItems:'center',flexDirection:'row',paddingHorizontal:15,paddingTop:40,paddingBottom:3,shadowColor: "#000",shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
      <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
        <AntDesign
            name="arrowleft"
            color="rgba(88, 189, 255,5)"
            size={20}
        />
       </TouchableOpacity> 
        <Text style={{color:'rgba(88, 189, 255,5)',fontWeight:'bold',fontSize:20,marginLeft:30}}>Login</Text>

      </View>
      <View style={{alignItems:'center',alignSelf:'center',marginTop:20}}>

          <TextInput
            style={{color:'rgba(0, 102, 255,0.8)',width:370,height:40,marginTop:20,marginHorizontal:15,paddingHorizontal:10,borderColor:'black',borderWidth:0.5,borderRadius:5}}
            onChangeText={(text) => this.setState({email: text})}
            onFocus={this.focus}
            
            placeholder={"E-mail" }     
          />
            {this.mail()}


          <TextInput
            style={{color:'rgba(0, 102, 255,0.8)',width:370,height:40,marginTop:20,marginBottom:15,
            marginHorizontal:15,paddingHorizontal:10,borderColor:'black',borderWidth:0.5,borderRadius:5}}
            onChangeText={(text) => this.setState({password:text})}
            onFocus={this.focus}
            placeholder="Password"  
            secureTextEntry      
          />
             {this.pawd()}


          <Text style={{width:370,height:40,marginTop:30,marginBottom:15,textAlign:'center',backgroundColor:'rgba(0, 102, 255,0.8)'
          ,color:'white',borderRadius:5,marginHorizontal:15,textAlignVertical:'center'}}>LOGIN</Text>




          </View>



        </View>

    
  );
}
  }