import React, { Component} from 'react';
import { Text, View,Image } from 'react-native';
import {Entypo,AntDesign} from '@expo/vector-icons';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import * as actions from '../../actions';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import Color from "../constants/colors"


class sideMenu extends Component{
  
  showLog=()=>{
    if(this.props.app.UserId ==""){
      return(
        <TouchableWithoutFeedback onPress={this.props.Login}>
          <View style={{ flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}}>
            <Text style={{color:Color.primary,fontSize:RFPercentage(2.5)}}>   Login</Text>
            <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
    else{
      return(
        <TouchableWithoutFeedback onPress={this.props.Logout}>
          <View style={{ flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}}>
            <Text style={{color:Color.primary,fontSize:RFPercentage(2.5)}}>   Logout </Text>
            <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
          </View>
        </TouchableWithoutFeedback>
      )
    }
  }

  render(){
    
  return (

  <View style={{flex:1}}>

    <TouchableWithoutFeedback onPress={this.props.close}>
       <View
          style={{flex:1,backgroundColor:'blue'}}
       />
    </TouchableWithoutFeedback > 
    <View style={{backgroundColor: 'white',paddingTop:30,position:'absolute',top:0,bottom:0,left:0,width:"60%"}}>
      
     <Image
          source={require('../../assets/darasa_logo.png')} style={{width:"90%",height:"25%",alignSelf:'center', resizeMode:'stretch'}} 
     /> 
     <TouchableWithoutFeedback onPress={this.props.close}>
     <View style={{ marginTop:30, flexDirection:"row", justifyContent:"space-between",
           paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderTopWidth:0.4,borderColor:'#ced6e0'}} >  
         <Text style={{color:Color.primary,fontSize:RFPercentage(2.5)}} >   Home </Text>
         <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this.props.Forum}> 
      <View style={{ flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}} >  
         <Text style={{color:Color.primary,fontSize:RFPercentage(2.5)}}>   Forum </Text>
         <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this.props.about}>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}}>
         <Text style={{color:Color.primary,fontSize:RFPercentage(2.5)}}>   About Us </Text>
         <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      <TouchableWithoutFeedback onPress={this.props.contacts}>
      <View style={{flexDirection:"row", justifyContent:"space-between",paddingHorizontal:10,width:"100%",height:50,alignItems:'center',borderBottomWidth:0.4,borderColor:'#ced6e0'}}>
        <Text style={{color:Color.primary,fontSize:RFPercentage(2.5)}}>   Contacts </Text>
        <Entypo name="chevron-thin-right" color="rgba(177, 190, 205,20)"  size={15} />
      </View>
      </TouchableWithoutFeedback>

      {this.showLog()}

    </View>
   </View>
 

  );
}
  }

  const mapStateToProps = (state) => ({
    app: state.app
  });
  export default connect(mapStateToProps,actions)(sideMenu);