
import React, { Component} from 'react';
import { View, Image} from 'react-native';
import { Text } from 'galio-framework'
import {Entypo,AntDesign} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight } from 'react-native-gesture-handler';
import { connect } from "react-redux";
import * as actions from '../../actions';
import Color from "../constants/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

class courses extends Component{

  static navigationOptions={
    headerShown: false
}

focus=()=>{
  this.setState({log:"unlog"})

}

constructor(props) {
  super(props);
  this.state = {
    log: "unlog",
  }
}

Enrolled =()=>{
  if (this.state.log=="uneroll"){
    return(

    <View>
    <View style={{backgroundColor:'#f1f2f6',borderRadius:5,marginBottom:15,height:255,alignItems:'center'}}>
      <Image source={require('../../assets/user-13.jpg')} style={{height:250,width:400}} />
    </View>

    <Text style={{color:'rgba(88, 189, 255,5)',marginTop:15,paddingHorizontal:5,fontSize:17,marginBottom:10}}>Course Name:  KISWAHILI KWA WAANDISHI WA HABARI</Text>
    <Text style={{marginTop:15,marginBottom:10,paddingHorizontal:5,fontSize:14}}>Ni kwa ajili yakuwafanya waandishi wa Habari waweze kutumia Kiswahili Fasihi. </Text>
    <Text style={{marginTop:10,paddingHorizontal:5,fontSize:16,marginBottom:20,marginTop:20}}>Lessons</Text>

    <TouchableOpacity onPress={()=>this.props.navigation.navigate ('Lessons')}>
    <View style={{borderColor:'rgba(88, 189, 255,10)',borderWidth:2,marginTop:20, borderRadius:5,paddingHorizontal:10,paddingTop:10,paddingBottom:15}}>
          <Text style={{color:'rgba(88, 189, 255,5)',fontSize:14,marginTop:10,marginBottom:10}}>Post on 2020-04-06 07:26:34</Text>
          <Text style={{marginTop:15,fontSize:14,fontWeight:'bold',marginBottom:10}}>1. Aina Za Maneno</Text>
          <Text style={{marginTop:15,fontSize:14}}>kufahamu maana ya</Text>
          <Text>neno, nomino, kiwakilishi, kivumishi, kitenzi, kielezi, kiunganishi, kihisishi. </Text>
    </View>
    </TouchableOpacity>
    <View style={{height:50}} />
    </View>

    );

  }
  else if(this.state.log=="uneroll") {

    return(

      <View>
      <View style={{backgroundColor:'#f1f2f6',borderRadius:5,marginBottom:15,height:255,alignItems:'center'}}>
        <Image source={require('../../assets/user-13.jpg')} style={{height:250,width:400}} />
      </View>
  
      <Text style={{color:'rgba(88, 189, 255,5)',marginTop:15,paddingHorizontal:5,fontSize:17,marginBottom:10}}>Course Name:  KISWAHILI KWA WAANDISHI WA HABARI</Text>
      <Text style={{marginTop:15,marginBottom:10,paddingHorizontal:5,fontSize:14}}>Ni kwa ajili yakuwafanya waandishi wa Habari waweze kutumia Kiswahili Fasihi. </Text>
      <Text style={{marginTop:10,paddingHorizontal:5,fontSize:16,marginBottom:20,marginTop:20}}>Lessons</Text>
  
      <View style={{borderColor:'rgba(88, 189, 255,10)',borderWidth:2,marginTop:20, borderRadius:5,paddingHorizontal:10,paddingTop:10,paddingBottom:15}}>
            <Text style={{color:'rgba(88, 189, 255,5)',fontSize:14,marginTop:10,marginBottom:10}}>Post on 2020-04-06 07:26:34</Text>
            <Text style={{marginTop:15,fontSize:14,fontWeight:'bold',marginBottom:10}}>1. Aina Za Maneno</Text>
            <Text style={{marginTop:15,fontSize:14}}>kufahamu maana ya</Text>
            <Text>neno, nomino, kiwakilishi, kivumishi, kitenzi, kielezi, kiunganishi, kihisishi. </Text>
      </View>
      <TouchableOpacity>
      <Text style={{backgroundColor:'#1e90ff',color:'white',textAlign:'center',textAlignVertical:'center',marginTop:10,height:40,borderRadius:10}}>ENROLL</Text>
      </TouchableOpacity>
      <TouchableOpacity>
      <Text style={{backgroundColor:'#1e90ff',color:'white',textAlign:'center',textAlignVertical:'center',marginTop:10,height:40,borderRadius:10}}>ENROLL</Text>
      </TouchableOpacity>
      <View style={{height:50}} />
      </View>
  
    );

  }

  else{
    let id=this.props.navigation.state.params.id;
    let proId=this.props.navigation.state.params.proId;
    let course=this.props.app.Courses[proId];
    //console.log("id",course[id])
    //console.log("id",id)
      return(

          <View>
      
          <Text 
            style={{
              color:Color.primary,
              marginTop:15,
              paddingHorizontal:5,
              fontSize:RFPercentage(2.7),
              marginBottom:10
            }}
          >Course Name: {course[id].title}</Text>
          <Text 
            style={{
              marginTop:10,
              paddingHorizontal:5,
              fontSize:RFPercentage(2.5),
              marginBottom:20,
              marginTop:20
            }}>Lessons</Text>
      
          <TouchableOpacity
              onPress={()=>this.props.navigation.navigate('LogIn')}
          >
            <Text style={{backgroundColor:'#1e90ff',color:'white',textAlign:'center',textAlignVertical:'center',marginTop:10,height:40,borderRadius:10}}>LOGIN TO ENROLL</Text>
          </TouchableOpacity>
          </View>
      
        );
     }
      

}

    render(){
      return (

    <View style={{flex:1,backgroundColor:'white'}}>
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
          }}
        >Course</Text>

      </View>

      <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal:10,paddingTop:10,}}
      >

         {this.Enrolled()}
      
      </ScrollView>
        




    </View>

    
  );
}
  }
  
  const mapStateToProps = (state) => ({
    app: state.app
  });
  export default connect(mapStateToProps,actions)(courses);
