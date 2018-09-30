

import React from 'react';
import {connect} from 'react-redux';
import * as actions from './src/store/actions/index';

import { StyleSheet, Text, View,TextInput,Button,FlatList,Image, Modal } from 'react-native';

import myimage from './src/assets/image1.jpg';

class App extends React.Component {

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
  addCity = ()=>{
    //alert("text submitted")
    console.log("cityName ",this.state.cityName)
    this.props.onAddCity(this.state.cityName)
  };

  deleteCity = (id)=>{
    console.log("in deleteCity id ",id)
    this.props.onDeleteCity(id)
  };

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
            <Button title="Add" onPress={this.addCity}/>
          </View>
        </View>
        <View style={styles.contentView}>
            <View>
              {
                this.props.cities.map((data,index)=>{
                  return (
                    <View style={styles.contentdata} key={index}>
                      <View>
                        <Text>{data}</Text>
                      </View>
                      <View style={styles.buttonView}>
                        <Button title="Delete" onPress={() => this.deleteCity(index)}/>
                      </View>
                    </View>
                  )
                })
              }
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
  },
  contentdata:{
    flexDirection: "row",
    alignItems: "center"
  }
});

const mapStateToProps = (state) => {
  return {
    cities : state.cities.cities,
    testvar : "aa"
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    onAddCity : (name) => dispatch(actions.addCity(name)),
    onDeleteCity : (id) => dispatch(actions.deleteCity(id))
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(App);