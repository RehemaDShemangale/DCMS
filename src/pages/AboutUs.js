import React, { Component} from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import { Text } from 'galio-framework'
import {Entypo,AntDesign, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView,TouchableOpacity } from 'react-native-gesture-handler';


export default class Darasa extends Component{

  static navigationOptions={
    headerShown: false
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
        <Text style={{color:'rgba(88, 189, 255,5)',fontWeight:'bold',fontSize:20,marginLeft:30}}>About Us</Text>

      </View>

      <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal:10,paddingTop:10,}}
      >
        <View style={{paddingTop:30,paddingHorizontal:10,backgroundColor:'rgba(204, 220, 255,0.2)',borderRadius:10,paddingBottom:10,borderWidth:0.2,
        borderColor:'rgba(31, 31, 46,5)'}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>Utangulizi</Text>
          <Text style={{marginTop:15}}>
          Darasa CMS is a Master class focused on fully utilisation of Multimedia which is the combination of: texts, graphics, audios, videos, animations, and simulations. These multimedia are accessed digitally in all formats to do with the modern multimedia learning world, which also allows direct interaction amongst users such as between Students and Instructors (Teachers).
          </Text>
          <Text style={{marginTop:10}}>In an education and corporate world, simplification and user friendliness is the most attractive means of building ones capacity. Should you use Darasa CMS, you will save both, time and money as you won’t need to read long texts before understanding what you are studying by use of multimedia. You won’t need to have a stand-alone (offline) container for your learning materials, but with our Cloud-based system, you will be able to access it anywhere and anytime.
          </Text>

        </View>


        <View style={{paddingTop:30,paddingHorizontal:10,marginTop:10,backgroundColor:'rgba(204, 220, 255,0.2)',borderRadius:10,paddingBottom:10,borderWidth:0.2,
        borderColor:'rgba(31, 31, 46,5)'}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>Dira</Text>
          <Text style={{marginTop:15}}>
          Kuwa msanifu bora wa maudhui ya masomo katika mfumo wa “multimedia” na kuhamasisha kila mtu hasa wasiokuwa na uwezo wa kifedha juu ya matumizi ya Teknolojia kwa urahisi ili kupata masomo kwenye mfumo wa “multimedia” kwa mmoja mmoja au shule kwa ujumla
          </Text>

        </View>

        <View style={{paddingTop:30,paddingHorizontal:10,marginTop:10,backgroundColor:'rgba(204, 220, 255,0.2)',borderRadius:10,paddingBottom:10,borderWidth:0.2,
        borderColor:'rgba(31, 31, 46,5)'}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>Dhima yetu</Text>
          <Text style={{marginTop:15}}>
                    Kujenga jamii yenye elimu halisi na bora
          </Text>


        </View>

        <View style={{paddingTop:30,paddingHorizontal:10,marginTop:10,backgroundColor:'rgba(204, 220, 255,0.2)',borderWidth:0.2,
        borderColor:'rgba(31, 31, 46,5)',borderRadius:10,paddingBottom:10}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>Wadau wetu</Text>
          <Text style={{marginTop:15}}>
                <Octicons
                  name="primitive-dot"
                  color="black"  size={10}
                />     Tanzania Volunteers for Development Trust
          </Text>
          <Text style={{marginTop:5}}>
                <Octicons
                  name="primitive-dot"
                  color="black"  size={10}
                />     TYD Innovation Incubator
          </Text>
          <Text style={{marginTop:5}}>
                <Octicons
                  name="primitive-dot"
                  color="black"  size={10}
                />     Techniques Audio/Visual Ltd
          </Text>

        </View>

        <View
         style={{height:20}}
        />



      </ScrollView>
         



    </View>

    
  );
}
  }
  

