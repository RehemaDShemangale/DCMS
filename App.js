import React, { Component} from 'react';
import Home from './Home';
import AboutUs from './AboutUs';
import Contacts from './contacts';
import Drawer from './sideView';
import Lessons from './Lessons';
import Course from './Courses';
import Logout from './LogIn';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';


const AppNavigator = createStackNavigator ({
      Home: Home,
      Lessons: Lessons,
      Course: Course,
      Drawer: Drawer,
      AboutUs: AboutUs,
      Contacts: Contacts,
      Logout: Logout,
},
{
  initialRouteName: 'Home',
}

);

const AppContainer = createAppContainer(AppNavigator);
export default class Darasa extends Component{

    render(){
      return (

            <AppContainer />

  );
}
  }
