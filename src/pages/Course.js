import React, { Component} from 'react';
import { View, ImageBackground, FlatList,ActivityIndicator} from 'react-native';
import { Text } from 'galio-framework'
import {AntDesign, MaterialCommunityIcons} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Drawer from 'react-native-drawer';
import ControlPanel from './sideView';
import { connect } from "react-redux";
import * as actions from '../../actions';
import axios from 'axios';
import Color from "../constants/colors"
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

class Course extends Component{

          static navigationOptions={
              headerShown: false
          }
          constructor(props) {
            super(props);
            this.state = {
              isLoggedIn: false,
            }
          }
          
        KeyExtractor=(item)=>item.id.toString()
        renderItem=({item})=>{
          //console.log("item",item)
          return(
            <TouchableOpacity onPress={()=>this.props.navigation.navigate ('Course',{id:item.id,proId:this.props.navigation.state.params.id})}>
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
                 <Text 
                    style={{
                      color:'black',
                      fontSize:RFPercentage(2.2)
                    }}
                 >{item.title}</Text>
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
  
          <Text 
            style={{
              color:Color.primary,
              paddingHorizontal:18,
              marginTop:10,
              fontSize:RFPercentage(2.5),
              alignItems:'flex-end'
            }}
          >Program Name: {this.props.app.Program[this.props.navigation.state.params.id].program_name}</Text>
         <Text 
          style={{
            color:'#57606f',
            marginTop:30,
            paddingHorizontal:20,
            borderBottomWidth:0.5,
            borderColor:'rgba(0, 0, 0,0.3)',
            paddingBottom:10,
            fontSize:RFPercentage(2.5)

          }}
         >courses</Text>
        </View>
  
        );
      };

       
     

    LogIn =()=>{
      let id=this.props.navigation.state.params.id;
      if(Object.keys(this.props.app.Courses).indexOf(id)!=-1){
      
        let Courses=Object.values(this.props.app.Courses[id])
        //console.log("course",Object.keys(this.props.app.Courses))
          return(

            <FlatList
              data={Courses}
              keyExtractor={(item)=>item.id.toString()}
              ListHeaderComponent={this.renderHeader}
              renderItem={this.renderItem}
              style={{
                paddingTop:15
              }}
              showsVerticalScrollIndicator={false}
      
          />
          );
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
            <Text 
                style={{
                  color:Color.primary,
                  fontSize:RFPercentage(2.5),
                }}
            >No Courses for this Program</Text>
          </View>
        )
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
        >Courses</Text>

      </View>

      {this.LogIn()}

    </View>
  );
}
  }
  
const mapStateToProps = (state) => ({
    app: state.app
  });
export default connect(mapStateToProps,actions)(Course);