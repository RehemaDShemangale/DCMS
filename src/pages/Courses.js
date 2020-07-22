
import React, { Component} from 'react';
import { View, Image, Dimensions} from 'react-native';
import { Text } from 'galio-framework'
import {Entypo,AntDesign} from '@expo/vector-icons';
import { ScrollView, TouchableOpacity, TouchableNativeFeedback, TouchableHighlight,FlatList,Directions } from 'react-native-gesture-handler';
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
  if (this.props.app.UserId == ""){
      let id=this.props.navigation.state.params.id;
      let proId=this.props.navigation.state.params.proId;
      let course=this.props.app.Courses[proId];
    return(

      <View>

          <Image 
              source={{uri:"https://darasa.uti.ac.tz/uploads/"+course[id].course_image}} 
              style={{
                height:Dimensions.get('screen').width/1.7,
                width:Dimensions.get('screen').width/1.05,
                borderRadius:5,
                marginBottom:15,
                alignSelf:'center'
              }} 
          />
      
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
              style={{
                paddingHorizontal:10
              }}
          >
            <Text style={{backgroundColor:'#1e90ff',color:'white',textAlign:'center',textAlignVertical:'center',marginTop:10,height:40,borderRadius:10}}>LOGIN TO ENROLL</Text>
          </TouchableOpacity>
          </View>
    

    );

  }
  else {
      let keys=Object.keys(this.props.app.enrolled);
      let id=this.props.navigation.state.params.id;
      let findCourse=keys.findIndex(obj=>obj == id)
    if(findCourse == -1){
      let id=this.props.navigation.state.params.id;
      let proId=this.props.navigation.state.params.proId;
      let course=this.props.app.Courses[proId];
    return(

      <View
        style={{
          paddingHorizontal:10
        }}
      >
        <Image 
              source={{uri:"https://darasa.uti.ac.tz/uploads/"+course[id].course_image}} 
              style={{
                height:Dimensions.get('screen').width/1.7,
                width:Dimensions.get('screen').width/1.05,
                borderRadius:5,
                marginBottom:15,
                alignSelf:'center'
              }} 
          />
      
          <Text 
            style={{
              color:Color.primary,
              marginTop:15,
             // paddingHorizontal:5,
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
              //onPress={()=>this.props.navigation.navigate('LogIn')}
          >
            <Text style={{backgroundColor:'#1e90ff',color:'white',textAlign:'center',textAlignVertical:'center',marginTop:10,height:40,borderRadius:5}}>ENROLL</Text>
          </TouchableOpacity>
          </View>
    
      )
    }
    else{
      let id=this.props.navigation.state.params.id;
      console.log("lesson",Object.values(this.props.app.lessons[id]))
      return(
        <FlatList
             data={Object.values(this.props.app.lessons[id])}
             renderItem={this.renderItem}
             keyExtractor={(item)=>item.id.toString()}
             ListHeaderComponent={this.header}
             contentContainerStyle={{paddingBottom:40,paddingHorizontal:10}}
             showsVerticalScrollIndicator={false}
        />
      )
    }
  }
}

renderItem=({item})=>{
  return(
    <TouchableOpacity
        onPress={()=>this.props.navigation.navigate('Lessons',{id:item})}
    >
      <View
          style={{
            borderColor:Color.primary,
            borderWidth:2,
            borderRadius:5,
            padding:10,
            width:'100%',
            marginBottom:10
          }}
      >
        <Text 
          style={{
            marginTop:10,
            paddingHorizontal:5,
            fontSize:RFPercentage(2.5),
            marginBottom:20,
            marginTop:20,
            color:Color.primary
          }}>{item.title}</Text>
      </View>
    </TouchableOpacity>
  )
}

    header=()=>{
      let id=this.props.navigation.state.params.id;
      let proId=this.props.navigation.state.params.proId;
      let course=this.props.app.Courses[proId];
      return(
        <View>
       <Image 
              source={{uri:"https://darasa.uti.ac.tz/uploads/"+course[id].course_image}} 
              style={{
                height:Dimensions.get('screen').width/1.7,
                width:Dimensions.get('screen').width/1.05,
                borderRadius:5,
                marginBottom:15,
                alignSelf:'center'
              }} 
          />
    
        <Text 
            style={{
              color:Color.primary,
              marginTop:15,
              paddingHorizontal:5,
              fontSize:RFPercentage(2.7),
              marginBottom:10
            }}
          >Course Name: {course[id].title}</Text>
       <Text style={{marginTop:10,paddingHorizontal:5,fontSize:16,marginBottom:20,marginTop:20}}>Lessons</Text>
        </View>
      )
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

      <View 
         // showsVerticalScrollIndicator={false}
          style={{paddingTop:10,}}
      >

         {this.Enrolled()}
      
      </View>
        




    </View>

    
  );
}
  }
  
  const mapStateToProps = (state) => ({
    app: state.app
  });
  export default connect(mapStateToProps,actions)(courses);
