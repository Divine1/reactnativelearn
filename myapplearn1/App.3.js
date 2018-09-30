import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList,Image, Modal } from 'react-native';

import myimage from './src/assets/image1.jpg';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      cityName : ""
    }
  }
  cityName = (e)=>{
    this.setState({
      cityName : e
    })
  }
  submitText = ()=>{
    alert("text submitted")
  }
  render() {

    return (
      <View style={styles.parentContainer}>
        <View style={styles.textboxContainer}>

          <View style={styles.textboxView}>
            <TextInput
              placeholder="textbox"
              style={styles.textbox} 
              onChangeText={this.cityName} 
              value={this.state.cityName} 
            />
          </View>
          <View style={styles.buttonView}>
            <Button title="Add" onPress={this.submitText}/>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  parentContainer:{
    backgroundColor : "yellow",
    flexDirection : "column",
    flexWrap : "wrap",
    marginTop: 20
  },
  textboxView:{
    backgroundColor : "yellow",
    height: 40,
    width: "80%"
  },
  buttonView :{
    width: "20%"
  },
  textbox : {
    //borderWidth : 2,
    //borderColor: "black"
  },
  textboxContainer : {
    flexDirection : "row"
  },
  childWidth :{
    width: "100%",
    height: 60,
    justifyContent:"center",
    backgroundColor: "red",
    alignItems : "center",
    //borderWidth: 1,
    //borderColor: "black"
  }
});
