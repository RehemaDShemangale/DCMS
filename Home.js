import React, { Component} from 'react';
import { View, ImageBackground, FlatList} from 'react-native';
import { Text } from 'galio-framework'
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Drawer from 'react-native-drawer';
import ControlPanel from './sideView';


let txt="The main objective of the Technician Certificate in Journalism is to develop capability for the learners to apply generic competencies that will enable them to gather and produce materials for print and electronic media using camera, TV and radio equipment";
let txt1="The aim of the Basic Technician Certificate in journalism course is to equip the candidates with requisite knowledge and skills that will enable them to perform mostly routine tasks in the media industry";
let txt2="The main objective of Diploma Course in Journalism is to develop capability for the learners to apply generic competencies in assisting in managing news rooms and studios, write and analyse issues, and edit media material for both print and electronic media.";
let txt3="The main objective of Diploma Course in PRM is to develop capability for the learners to apply generic competencies in Public Relations Professionals.";
let txt4="The main objective of Diploma Course in Journalism is to develop capability for the learners to apply generic competencies in assisting in managing news rooms and studios, write and analyse issues, and edit media material for both print and electronic media.";
let txt5="The aim of the Basic Technician Certificate in Journalism course ( second semester) is to equip the candidates with requisite knowledge and skills that will enable them to perform mostly routine tasks in the media industry.";
let txt6="The main objective of Diploma Course in Journalism is to develop capability for the learners to apply generic competencies in assisting in managing news rooms and studios, write and analyse issues, and edit media material for both";
let txt7="The main objective of the Technician Certificate in Journalism is to develop capability for the learners to apply generic competencies that will enable them to gather and produce materials for print and electronic media using camera, TV and radio equipment";
let txt8="JOURNALISM";

let live1=[
  {id:1,name:"TECHNICIAN CERTIFICATE IN JOURNALISM",tx:txt},
  {id:2,name:"BASIC TECHNICIAN CERTIFICATE",tx:txt1},
  {id:3,name:"ORDINARY DIPLOMA IN JOURNALISM",tx:txt2},
  {id:4,name:"ORDINARY DIPLOMA IN JOURNALISM",tx:txt3},
  {id:5,name:"ORDINARY DIPLOMA IN PUBLIC RELATIONS",tx:txt4},
  {id:6,name:"DIPLOMA IN JOURNALISM - DIP 11A (4TH semester)",tx:txt5},
  {id:7,name:"BASIC TECHNICIAN CERTIFICATE (2nd semester)",tx:txt6},
  {id:8,name:"DIPLOMA IN JOURNALISM -DIP11B",tx:txt7},
  {id:9,name:"DIPLOMA DIP 1A",tx:txt8},

]


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

export default class Home extends Component{

            static navigationOptions={
              headerShown: false
          }

          focus=()=>{
            this.setState({isLoggedIn:true})
      
          }

          closeControlPanel = () => {
            this.drawer_.close()
          };
          openControlPanel = () => {
            this.drawer_.open()
          };

          constructor(props) {
            super(props);
            this.state = {
              isLoggedIn: false,
            }
          }

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

        KeyExtractor1=(item)=>item.id.toString()
        renderItem1=({item})=>{
          console.log("item",item)
          return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate ('Course')}>
            <View style={{alignItems:'center',justifyContent:'space-between',borderWidth:2,borderRadius:5,marginHorizontal:15,
                          borderColor:'rgb(255, 153, 0)',marginTop:10,paddingHorizontal:17,paddingBottom:15,paddingTop:5}}>
                 <Text style={{color:'black'}}>{item.name}</Text>
                 <Text style={{color:'black',marginTop:10}}>{item.tx}</Text>
                 <Text style={{backgroundColor:'rgb(51, 133, 255)',width:"100%",textAlign:'center',textAlignVertical:'center',height:30,borderRadius:5,color:'white',marginTop:20}}>BROWSE</Text>
            </View>
            </TouchableOpacity>
          );

        }

      renderHeader1=() => {
        return (

      <View>    

      <ImageBackground source={require('./assets/home.jpg')} 
      style={{height:170,width:370,borderRadius:10,overflow:'hidden',alignSelf:'center',marginTop:25,shadowColor: "#000",shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>

            <Text style={{color:'black',alignSelf:'center',fontWeight:'bold',marginTop:40}}>DARASA</Text>
            <Text style={{color:'black',marginTop:30,textAlign:'center',paddingHorizontal:40}}>Where knowledge has an opportunity of finding its path to those motivated by it</Text>

      </ImageBackground>

      <Text style={{color:'#57606f',marginTop:30,paddingHorizontal:20,borderColor:'rgba(0, 0, 0,0.3)',paddingBottom:20}}>All Programs</Text>
      </View>

      );
    };

    LogIn =()=>{
      if (this.state.isLoggedIn==false){
        return(

          <FlatList
          data={live}
          keyExtractor={this.KeyExtractor}
          ListHeaderComponent={this.renderHeader}
          renderItem={this.renderItem}
     
         />

        );

      }
      else
      return(

        <FlatList
        data={live1}
        keyExtractor={this.KeyExtractor1}
        ListHeaderComponent={this.renderHeader1}
        renderItem={this.renderItem1}
   
       />

      );
    }



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

      {this.LogIn()}

    </View>
    </Drawer>

    
  );
}
  }
  

