import React, { Component} from 'react';
import { Text, Image,View,TextInput,TouchableOpacity,ActivityIndicator,Dimensions, Alert} from 'react-native';
import {AntDesign, } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import Color from "../constants/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import axios from 'axios';
import { connect } from "react-redux";
import * as actions from '../../actions';

class LogIn extends Component{
  static navigationOptions={
    headerShown: false
}
  
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      name: false,
      pass: false,
      load:false,
    }
  }

  login=()=>{
    if(this.state.email == "" || this.state.password == ""){
      Alert.alert("","Please fill empty field")
    }
    else{
      this.setState({load:true});
         axios.get('https://darasa.uti.ac.tz/mobileapp/Ingia.php',
           {
            params: {
              email:this.state.email,
              password:this.state.password
            }
           })
           .then(res => {
              this.setState({load:false});
             console.log("success",res.data)
              let data=res.data;

              let fail="fail";
              if(data == 1){
                    Alert.alert("","Wrong Email/Password ");
              }
              else{
                Alert.alert("","You have successful login");
                console.log("data",data);
                let Ndata=data[0];
                let NWdata={
                  id:Ndata.id,
                  email:Ndata.email,
                  proId:Ndata.program_id
                }
                this.props.updateUser(NWdata);
                this.props.navigation.navigate("Home");
              }
             
           })
           .catch(function (error) {
            console.log("error",error);
          });
    }
  }

  showLog() {
      if(this.state.load == false){
        return(
          <TouchableOpacity
              onPress={this.login}
          > 
            <View
                style={{
                  alignItems:'center',
                  justifyContent:'center',
                  backgroundColor:Color.primary,
                  height:Dimensions.get('screen').width/10,
                  marginTop:30,
                  borderRadius:5,
                  width:Dimensions.get('screen').width/1.1
                }}
            >
              <Text 
                style={{
                  //paddingHorizontal:,
                  color:'white',
                  fontSize:RFPercentage(3),
                }}>LOGIN</Text>
              </View>
          </TouchableOpacity> 
        )
      }
      else{
        return(
          <ActivityIndicator size="large" color={Color.primary}/>
        )
      }
    
  }
  render(){
    
  return (

    <View style={{flex:1,backgroundColor:'#f1f2f0'}}>
      <View style={{backgroundColor:'#dfe4ea',alignItems:'center',flexDirection:'row',paddingHorizontal:15,paddingTop:40,paddingBottom:3,shadowColor: "#000",shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
      <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
        <AntDesign
            name="arrowleft"
            color={Color.primary}
            size={25}
        />
       </TouchableOpacity> 
        <Text 
          style={{
            color:Color.primary,
            fontWeight:'bold',
            fontSize:RFPercentage(3),
            marginLeft:30
          }}>Login</Text>

      </View>
      <View style={{alignItems:'center',paddingHorizontal:20,marginTop:20}}>

          <TextInput
            style={{color:Color.primary,width:'100%',fontSize:RFPercentage(2.4),height:Dimensions.get('screen').width/10,marginTop:20,marginHorizontal:15,paddingHorizontal:10,borderColor:'black',borderWidth:0.5,borderRadius:5}}
            onChangeText={(text) => this.setState({email: text})}
            //onFocus={this.focus}
            
            
            placeholder={"E-mail" }     
          />
           


          <TextInput
            style={{color:Color.primary,width:'100%',height:Dimensions.get('screen').width/10,marginTop:20,marginBottom:15,
            marginHorizontal:15,fontSize:RFPercentage(2.4),paddingHorizontal:10,borderColor:'black',borderWidth:0.5,borderRadius:5}}
            onChangeText={(text) => this.setState({password:text})}
            //onFocus={this.focus}
            keyboardType=''
            placeholder="Password"  
            secureTextEntry ={true}     
          />
            
          {this.showLog()}



          </View>



        </View>

    
  );
}
  }
  const mapStateToProps = (state) => ({
    app: state.app
  });
export default connect(mapStateToProps,actions)(LogIn);