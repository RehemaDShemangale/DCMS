import React, { Component} from 'react';
import { View, ImageBackground, FlatList,ActivityIndicator,Dimensions, Alert} from 'react-native';
import { Text } from 'galio-framework'
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Drawer from 'react-native-drawer';
import ControlPanel from './sideView';
import { connect } from "react-redux";
import * as actions from '../../actions';
import axios from 'axios';
import Color from "../constants/colors";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";



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

class Home extends Component{

          static navigationOptions={
              headerShown: false
          }
          constructor(props) {
            super(props);
            this.state = {
              isLoggedIn: false,
            }
          }

        componentDidMount=()=>{

            axios.get("https://darasa.uti.ac.tz/mobileapp/prog.php",{
              params: {
                //id:para.id,
              }
            })
            .then(res => {

              console.log("success",res.data)
              let data=res.data;

              for(let x=0;x<data.length;x++){
                let Ndata = data[x];
                 this.props.updateProgram(Ndata)
              }

                axios.get("https://darasa.uti.ac.tz/mobileapp/course.php",{
                  params: {
                    //id:para.id,
                  }
                })
                .then(res => {

                  console.log("success1",res.data)
                  let data1=res.data;

                  for(let y=0;y<data1.length;y++){
                    let Nwdata = data1[y];
                    this.props.updateCourse(Nwdata)
                  }
                })
                .catch(function (error) {
                  console.log("error2",error);
                });

            })
            .catch(function (error) {
              console.log("error1",error);
            });
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

          
        KeyExtractor=(item)=>item.id.toString()
        renderItem=({item})=>{
          //console.log("item",item)
          return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate ('Course',{id:item.id,proId:item.program_id})}>
            <View 
                style={{
                  alignItems:'center',
                  flexDirection:'row',
                  justifyContent:'space-between',
                  borderBottomWidth:0.5,
                  borderColor:'rgba(0, 0, 0,0.3)',
                  paddingHorizontal:17,
                  paddingVertical:12
                }}
            >
                 <Text style={{color:'black',fontSize:RFPercentage(2.2)}}>{item.title}</Text>
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
  
            <View
              
          >    

          <ImageBackground source={require('../../assets/home.jpg')} 
              style={{
                height:Dimensions.get('screen').width/2.5,
                width:Dimensions.get('screen').width/1.1,
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
                overflow:'hidden',
                alignSelf:'center',
                marginTop:25,
                shadowColor: "#000",
                shadowOffset:{	width: 0,	height: 2,},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
          >

                <Text 
                  style={{
                    color:'black',
                    fontWeight:'bold',
                    fontSize:RFPercentage(2.5),
                  }}>DARASA</Text>
                <Text 
                  style={{
                    color:'black',
                    marginTop:30,
                    textAlign:'center',
                    fontSize:RFPercentage(2.4),
                    paddingHorizontal:40
                  }}>Where knowledge has an opportunity of finding its path to those motivated by it</Text>

          </ImageBackground>
          <Text 
              style={{
                color:Color.primary,
                paddingHorizontal:18,
                marginTop:10,
                fontSize:16.5,
                fontSize:RFPercentage(2.8)
              }}>Program Name: {this.props.app.Program[this.props.app.UserId.proId].program_name}</Text>

          <Text 
            style={{
              color:'#57606f',
              marginTop:30,
              paddingHorizontal:20,
              borderColor:'rgba(0, 0, 0,0.3)',
              paddingBottom:20,
              fontSize:RFPercentage(2.6)
            }}>Courses</Text>
          </View>
  
        );
      };

        KeyExtractor1=(item)=>item.id.toString()
        renderItem1=({item})=>{
          let Nitem=this.props.app.Program[item];
          //console.log("item",item)
          return(
            
            <View style={{alignItems:'center',justifyContent:'space-between',borderWidth:2,borderRadius:5,marginHorizontal:15,
                          borderColor:'rgb(255, 153, 0)',marginTop:10,paddingHorizontal:17,paddingBottom:15,paddingTop:5}}>
                 <Text style={{color:'black',fontSize:RFPercentage(2.6),textAlign:'center'}}>{Nitem.program_name}</Text>
                 <Text style={{color:'black',marginTop:10,fontSize:RFPercentage(2.4),textAlign:'center'}}>{Nitem.program_desc}</Text>
                 <TouchableOpacity onPress={()=>this.props.navigation.navigate ('Courses',{id:item})}>
                    <Text 
                        style={{
                          backgroundColor:Color.primary,
                          paddingHorizontal:100,
                          textAlign:'center',
                          textAlignVertical:'center',
                          height:30,
                          borderRadius:5,
                          fontSize:RFPercentage(2.5),
                          color:'white',
                          marginTop:20
                        }}>BROWSE</Text>
                  </TouchableOpacity>
            </View>
            
          );

        }

      renderHeader1=() => {
        return (

          <View
              
          >    

          <ImageBackground source={require('../../assets/home.jpg')} 
              style={{
                height:Dimensions.get('screen').width/2.5,
                width:Dimensions.get('screen').width/1.1,
                borderRadius:10,
                alignItems:'center',
                justifyContent:'center',
                overflow:'hidden',
                alignSelf:'center',
                marginTop:25,
                shadowColor: "#000",
                shadowOffset:{	width: 0,	height: 2,},
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
          >

                <Text 
                  style={{
                    color:'black',
                    fontWeight:'bold',
                    fontSize:RFPercentage(2.5),
                  }}>DARASA</Text>
                <Text 
                  style={{
                    color:'black',
                    marginTop:30,
                    textAlign:'center',
                    fontSize:RFPercentage(2.4),
                    paddingHorizontal:40
                  }}>Where knowledge has an opportunity of finding its path to those motivated by it</Text>

          </ImageBackground>

          <Text 
            style={{
              color:'#57606f',
              marginTop:30,
              paddingHorizontal:20,
              borderColor:'rgba(0, 0, 0,0.3)',
              paddingBottom:20,
              fontSize:RFPercentage(2.6)
            }}>All Programs</Text>
          </View>

      );
    };

    LogIn =()=>{
      if (this.props.app.UserId != ""){
        return(

          <FlatList
              data={Object.values(this.props.app.Courses[this.props.app.UserId.proId])}
              keyExtractor={this.KeyExtractor}
              ListHeaderComponent={this.renderHeader}
              renderItem={this.renderItem}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:10}}
         />

        );

      }
      else{
        //console.log("course",Object.values(this.props.app.Courses[6]));
        if(Object.keys(this.props.app.Program).length > 0){
        return(
          
            <FlatList
              data={Object.keys(this.props.app.Program)}
              keyExtractor={(item)=>item.toString()}
              ListHeaderComponent={this.renderHeader1}
              renderItem={this.renderItem1}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{paddingBottom:10}}
      
          />
        )
        }
        else{
          return(
            <View 
              style={{
                flex:1,
                alignItems:'center',
                justifyContent:'center'
                }}
            >
                <ActivityIndicator size="large" color={Color.primary} />
            </View>
          )
        }

     }
    }

     pass=(item)=>{
      this.closeControlPanel();
      this.props.navigation.navigate(item);
      
     }
     passout=()=>{
      this.closeControlPanel();
      this.props.updateUser("");
      Alert.alert("","You have logout");
      
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

         content={<ControlPanel 
                     about={()=>this.pass("AboutUs")} 
                     contacts={()=>this.pass("Contacts")} 
                     Logout={()=>this.passout()}
                     Login={()=>this.pass("LogIn")}
                     close= {this.closeControlPanel}
                    />
                  }
      >      

    <View style={{flex:1,backgroundColor:'#f1f2f0'}}>
      <View style={{backgroundColor:'#dfe4ea',alignItems:'center',flexDirection:'row',paddingHorizontal:15,paddingTop:40,paddingBottom:3,shadowColor: "#000",shadowOffset: {	width: 0,	height: 2,},shadowOpacity: 0.25,shadowRadius: 3.84,elevation: 5,}}>
        <TouchableOpacity onPress={this.openControlPanel}>
        <MaterialCommunityIcons
            name="view-sequential"
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
          }}>Darasa CMS</Text>

      </View>

      {this.LogIn()}

    </View>
    </Drawer>

    
  );
}
  }
  
const mapStateToProps = (state) => ({
    app: state.app
  });
export default connect(mapStateToProps,actions)(Home);