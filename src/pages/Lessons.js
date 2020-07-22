import React, { Component} from 'react';
import { View, Image, FlatList } from 'react-native';
import { Text } from 'galio-framework'
import {Entypo,AntDesign, MaterialCommunityIcons, Octicons, SimpleLineIcons} from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import * as FileSystem from 'expo-file-system';
import { connect } from "react-redux";
import * as actions from '../../actions';

let live=[
  {id:1,name:"POWER POINT PRESENTATION"},
  {id:2,name:"news writing"},
  {id:3,name:"MODULE 1-5"},
  {id:4,name:"ENTERPRENUERSHIP SLIDE SHOW"},
  {id:5,name:"photojournalism"},
  {id:6,name:"MODULE ONE"},
  {id:7,name:"introduction to journalism"},
  {id:8,name:"Radio Broadcasting"},
  {id:9,name:"MODULE TWO"},
  {id:10,name:"MODULE THREE"},

]


class lessons extends Component{

  static navigationOptions={
    headerShown: false
  }

  componentDidMount=()=>{
    axios.get("https://darasa.uti.ac.tz/mobileapp/files.php",{
      params: {
        //id:para.id,
      }
    })
    .then(res => {

      console.log("success1",res.data)
      let data1=res.data;

      for(let y=0;y<data1.length;y++){
        let Nwdata = data1[y];
        this.props.updateFiles(Nwdata)
      }
    })
    .catch(function (error) {
      console.log("error2",error);
    });
  }

  download=(data)=>{
    FileSystem.downloadAsync(
      //'https://darasa.uti.ac.tz/uploads/1585221433-entrepreneurship-graphic.jpg',
      data,
      FileSystem.documentDirectory + 'small.jpg'
    )
      .then(({ uri }) => {
        console.log('Finished downloading to ', uri);
      })
      .catch(error => {
        console.error("error",error);
      });
  }

  KeyExtractor=(item)=>item.id.toString()
  renderItem=({item})=>{
    console.log("item",item)
    if(item.mime == "application/pdf"){
    return(
      <TouchableOpacity
          onPress={()=>this.download(item.path)}
      >
      <View style={{flexDirection:'row',marginTop:25,marginBottom:10,paddingHorizontal:10}}>
          <SimpleLineIcons
              name='cloud-download'
              size={30} color='rgba(0, 138, 230,10)'
          />

          <Text style={{color:'rgba(0, 138, 230,5)',marginLeft:10,marginTop:10,fontSize:15}}>{item.name}</Text>

        </View>
        </TouchableOpacity>
  
    );
  }
  }

  renderHeader=() => {
    return (

          <View style={{paddingHorizontal:10}}>    

          <Text style={{marginTop:30,fontSize:18,fontWeight:'bold',marginBottom:10,color:'rgba(88, 189, 255,5)'}}>1. Aina Za Maneno</Text>
                    <View style={{borderColor:'rgba(88, 189, 255,10)',borderWidth:2,marginTop:20,marginBottom:20, borderRadius:5,paddingHorizontal:10,paddingTop:10,paddingBottom:15}}>
                          <Text style={{marginTop:15,fontSize:14}}>kufahamu maana ya</Text>
                          <Text>neno, nomino, kiwakilishi, kivumishi, kitenzi, kielezi, kiunganishi, kihisishi. </Text>
                    </View>
          </View>

  );
  };

    render(){
      let lesson=this.props.navigation.state.params.id;
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

        <Text style={{color:'rgba(88, 189, 255,5)',fontWeight:'bold',fontSize:20,marginLeft:30}}>Lessons</Text>

      </View>

         <FlatList
              data={Object.values(this.props.app.files[id])}
              keyExtractor={(item)=>item.id.toString()}
              ListHeaderComponent={this.renderHeader}
              renderItem={this.renderItem}
         
         />

        




    </View>

    
  );
}
  }
  
  const mapStateToProps = (state) => ({
    app: state.app
  });
  export default connect(mapStateToProps,actions)(lessons);

