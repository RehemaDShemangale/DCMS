import React, { Component} from 'react';
import { View, ImageBackground, FlatList} from 'react-native';
import { Text } from 'galio-framework'
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Drawer from 'react-native-drawer';
import ControlPanel from './sideView';
import AboutUs from './AboutUs';


let live=[
  {id:1,name:"KISWAHILI KWA WAANDISHI WA HABARI"},
  {id:2,name:"ENGLISH FOR JOURNALISTS"},
  {id:3,name:"HISTORY OF JOURNALISM"},
  {id:4,name:"JOURNALISM ETHICS AND PRACTICES"},
  {id:5,name:"NEWS CONCEPT AND VALUES"},
  {id:6,name:"INTRODUCTION TO COMPUTER APPLICATION"},
  {id:7,name:"HISTORY OF JOURNALISM"},
  {id:8,name:"BASIC COMPUTER APPLICATION"},
  {id:9,name:"NEWS WRITING"},

]

export default class Darasa extends Component{

            static navigationOptions={
              headerShown: false
          }

          closeControlPanel = () => {
            this.drawer_.close()
          };
          openControlPanel = () => {
            this.drawer_.open()
          };

        KeyExtractor=(item)=>item.id.toString()
        renderItem=({item})=>{
          console.log("item",item)
          return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate ('Course')}>
            <View style={{alignItems:'center',flexDirection:'row',justifyContent:'space-between',borderBottomWidth:0.15,
                          borderColor:'rgba(0, 0, 0,0.3)',marginTop:10,paddingHorizontal:17,paddingBottom:15,paddingTop:5}}>
                 <Text style={{color:'black'}}>{item.name}</Text>
                 <AntDesign
                    name="right"
                    color="rgba(0, 0, 0,0.3)"  size={15}
                   />
            </View>
            </TouchableOpacity>
          );

        }

      renderHeader=() => {
        return (

      <View>    

      <ImageBackground source={require('./assets/home.jpg')} 
      style={{height:170,width:370,borderRadius:10,overflow:'hidden',alignSelf:'center',marginTop:25,shadowColor: "#000",shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>

            <Text style={{color:'black',alignSelf:'center',fontWeight:'bold',marginTop:40}}>DARASA</Text>
            <Text style={{color:'black',marginTop:30,textAlign:'center',paddingHorizontal:40}}>Where knowledge has an opportunity of finding its path to those motivated by it</Text>

      </ImageBackground>

      <Text style={{color:'rgba(88, 189, 255,2)',paddingHorizontal:18,marginTop:10,fontSize:16.5}}>Program Name:BASIC TECHNICIAN CERTIFICATE IN JOURNALISM</Text>
      <Text style={{color:'#57606f',marginTop:30,paddingHorizontal:20,borderBottomWidth:0.15,borderColor:'rgba(0, 0, 0,0.3)',paddingBottom:20}}>courses</Text>
      </View>

      );
    };

    render(){
      return (

    <Drawer
      ref={ (ref) => this.drawer_ = ref}
      type= "overlay"
      openDrawerOffset={0} 
      panCloseMask={0.2}
      closedDrawerOffset={-3}
      tweenHandler={(ratio) => ({
        main: { opacity:(2-ratio)/2 }
      })}

         content={<ControlPanel about={()=>this.props.navigation.navigate("AboutUs")} 
                                contacts={()=>this.props.navigation.navigate("Contacts")} 
                                Logout={()=>this.props.navigation.navigate("Logout")}
                              
          close= {this.closeControlPanel}/>}
      >      

    <View style={{flex:1,backgroundColor:'#f1f2f0'}}>
      <View style={{backgroundColor:'#dfe4ea',alignItems:'center',flexDirection:'row',paddingHorizontal:15,paddingTop:40,paddingBottom:3,shadowColor: "#000",shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
        <TouchableOpacity onPress={this.openControlPanel}>
        <MaterialCommunityIcons
            name="view-sequential"
            color="rgba(88, 189, 255,5)"
            size={20}
        />
        </TouchableOpacity>
        <Text style={{color:'rgba(88, 189, 255,5)',fontWeight:'bold',fontSize:20,marginLeft:30}}>Darasa CMS</Text>

      </View>
         
         <FlatList
              data={live}
              keyExtractor={this.KeyExtractor}
              ListHeaderComponent={this.renderHeader}
              renderItem={this.renderItem}
         
         />


    </View>
    </Drawer>

    
  );
}
  }
  

