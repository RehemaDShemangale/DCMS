import React, { Component} from 'react';
import { View, ImageBackground, FlatList } from 'react-native';
import { Text } from 'galio-framework'
import {Entypo,AntDesign, MaterialCommunityIcons, Octicons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TextInput ,TouchableOpacity} from 'react-native-gesture-handler';


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
        <Text style={{color:'rgba(88, 189, 255,5)',fontWeight:'bold',fontSize:20,marginLeft:30}}>Wasiliana</Text>

      </View>

      <ScrollView 
          showsVerticalScrollIndicator={false}
          style={{marginHorizontal:10,paddingTop:30,}}
      >
        <View style={{paddingTop:30,paddingHorizontal:20,backgroundColor:'rgba(204, 220, 255,0.2)',borderRadius:10,paddingBottom:20,borderWidth:0.2,
        borderColor:'rgba(31, 31, 46,5)'}}>
          <Text style={{fontWeight:'bold',fontSize:18}}>SANDUKU LA POSTA</Text>
          <Text style={{marginTop:15}}>
                Address P.O. Box 25444
          </Text>
          <Text style={{fontWeight:'bold',fontSize:18,alignItems:'center',marginTop:15}}>MAKAO MAKUU
                <Entypo
                  name="dots-two-vertical"
                  color="black"  size={18}
                />
          </Text>
          <Text style={{marginTop:15}}>Location: Dar es salaam, Tanzania</Text>
          <Text style={{fontWeight:'bold',fontSize:18,alignItems:'center',marginTop:15}}>NAMBA YA SIMU
                <Entypo
                  name="dots-two-vertical"
                  color="black"  size={18}
                />
          </Text>
          <Text style={{marginTop:15}}>whatsApp: +255 655 573 294</Text>
          <Text style={{marginTop:5}}>Nambari ya simu: +255 735 573 294</Text>
          <Text style={{fontWeight:'bold',fontSize:18,alignItems:'center',marginTop:20}}>BARUA PEPE
                <Entypo
                  name="dots-two-vertical"
                  color="black"  size={18}
                />
          </Text>
          <Text style={{marginTop:20}}>Barua pepe : info.dsj.uti.ac.tz</Text>

        </View>


        <View style={{paddingTop:30,paddingHorizontal:10,marginTop:10,backgroundColor:'rgba(204, 220, 255,0.2)'
        ,borderRadius:10,paddingBottom:10,borderWidth:0.2,borderColor:'rgba(31, 31, 46,5)'}}>
          <Text style={{fontWeight:'bold',fontSize:18,textAlign:'center'}}>ACHA UJUMBE WAKO</Text>
          <TextInput
              style={{backgroundColor:'white',marginTop:20,paddingHorizontal:10,paddingBottom:5
              ,paddingTop:5,borderRadius:5,borderWidth:0.5,borderColor:'grey'}}
               placeholder="Jina"
          />
         <TextInput
              style={{backgroundColor:'white',marginTop:20,paddingHorizontal:10,paddingBottom:5
              ,paddingTop:5,borderRadius:5,borderWidth:0.5,borderColor:'grey'}}
               placeholder="Barua pepe"
          />
         <TextInput
              style={{backgroundColor:'white',marginTop:20,paddingHorizontal:10,paddingBottom:5
              ,paddingTop:5,borderRadius:5,borderWidth:0.5,borderColor:'grey'}}
               placeholder="Kichwa cha habari"
          />
          <TextInput
              style={{backgroundColor:'white',textAlignVertical:'top',height:150,marginTop:20
              ,paddingHorizontal:10,paddingTop:10,borderRadius:5,borderWidth:0.5,borderColor:'grey'}}
               placeholder="Ujumbe"
          />

          <Text style={{backgroundColor:'rgba(36, 143, 36,20)',marginTop:20,paddingHorizontal:10,paddingBottom:5
          ,paddingTop:5,borderRadius:5,textAlign:'center',color:'white',height:45,textAlignVertical:'center'}}>TUMA</Text>

        </View>

        <View
         style={{height:50}}
        />



      </ScrollView>
         



    </View>

    
  );
}
  }
  

