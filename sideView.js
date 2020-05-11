import React, { Component} from 'react';
import { Text, View,Image } from 'react-native';
import {Entypo,AntDesign} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';


export default class sideMenu extends Component{

  render(){
    
  return (

  <View style={{flex:1}}>

    <TouchableWithoutFeedback onPress={this.props.close}>
       <View
          style={{flex:1,backgroundColor:'rgba(0,0,0,0.5)'}}
       />
      </TouchableWithoutFeedback > 
       <View style={{backgroundColor: 'white',paddingTop:30,position:'absolute',top:0,bottom:0,left:0,width:"60%"}}>
      
     <Image
          source={require('./assets/darasa_logo.png')} style={{width:"90%",height:"25%",alignSelf:'center', resizeMode:'stretch'}} 
     /> 
     <TouchableWithoutFeedback onPress={this.props.close}>
     <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",
           paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderTopWidth:0.4,borderColor:'#ced6e0'}} >  
         <Text style={{color:"rgba(0, 102, 255,0.8)"}} >   Home </Text>
         <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this.props.Forum}> 
      <View style={{ flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}} >  
         <Text style={{color:"rgba(0, 102, 255,0.8)"}}>   Forum </Text>
         <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this.props.about}>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}}>
         <Text style={{color:"rgba(0, 102, 255,0.8)"}}>   About Us </Text>
         <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this.props.contacts}>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}}>
        <Text style={{color:"rgba(0, 102, 255,0.8)"}}>   Contacts </Text>
        <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this.props.Logout}>
      <View style={{ flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}}>
        <Text style={{color:"rgba(0, 102, 255,0.8)"}}>   Logout </Text>
        <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

    </View>
   </View>
 

  );
}
  }

