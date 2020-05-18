import React, { Component} from 'react';
import Home from './src/pages/Home';
import AboutUs from './src/pages/AboutUs';
import Contacts from './src/pages/contacts';
import Drawer from './src/pages/sideView';
import Lessons from './src/pages/Lessons';
import Course from './src/pages/Courses';
import Courses from './src/pages/Course';
import LogIn from './src/pages/LogIn';
import {ActivityIndicator,View} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { Provider, connect } from 'react-redux';
import store from './Store';
import Color from "./src/constants/colors";

const AppNavigator = createStackNavigator ({
      Home: Home,
      Lessons: Lessons,
      Course: Course,
      Courses: Courses,
      Drawer: Drawer,
      AboutUs: AboutUs,
      Contacts: Contacts,
      LogIn: LogIn,
},
{
  initialRouteName: 'Home',
}

);

const AppContainer = createAppContainer(AppNavigator);


const Start = ({AppStart, rehydrate}) =>{
  if(rehydrate){
      return (
          <AppContainer/>
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


const mapStateToProps = (state) => ({
  AppStart: state.app,
  rehydrate: state.rehydrate
});
StartApp = connect(mapStateToProps)(Start);

const Root = () => (
  <Provider store={store}>
   
        <StartApp />
  </Provider>
);

export default Root;

