
import React, { Component} from 'react';
import { View, Image} from 'react-native';
import { Text } from 'galio-framework'
import {Entypo,AntDesign} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';


export default class courses extends Component{

  static navigationOptions={
    headerShown: false
}

    render(){
      return (

    <View style={{flex:1,backgroundColor:'white'}}>
      <View style={{backgroundColor:'#dfe4ea',alignItems:'center',flexDirection:'row',paddingHorizontal:15,paddingTop:40,paddingBottom:3,shadowColor: "#000",shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
        
      <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
        <AntDesign
            name="arrowleft"
            color="rgba(88, 189, 255,5)"
            size={20}
        />
        </TouchableOpacity>
        
        <Text style={{color:'rgba(88, 189, 255,5)',fontWeight:'bold',fontSize:20,marginLeft:30}}>Courses</Text>

      </View>

      <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal:10,paddingTop:10,}}
      >

          <View style={{backgroundColor:'#f1f2f6',borderRadius:5,marginBottom:15,height:255,alignItems:'center'}}>
            <Image source={require('./assets/swahil.jpg')} style={{height:250,width:400}} />
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
      
      </ScrollView>
        




    </View>

    
  );
}
  }
  

