import React from 'react';
import { StyleSheet, Text, View,TextInput,Button,FlatList,Image, Modal } from 'react-native';

import myimage from './src/assets/image1.jpg';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      placeName : '',
      places : [],
      togglemodal : false
    }
  }
  onreqclose = ()=>{
    
  }
  placeNameChangedHandler = (event) =>{
    //alert(event);
    this.setState({
      placeName : {
        value : event,
        key : Math.random()+"data"
      }
    })
  }
  placeSubmitHandler = ()=>{
    //alert("placeSubmitHandler");
    this.setState(prev => (
      {places : prev.places.concat(prev.placeName)}
    ));
  }
  toggleModal = () =>{
   // console.log("in toggle modal")
    this.setState(
      { 
        togglemodal : !this.state.togglemodal
      }
    )
  }
  render() {

    // const placesOutput = this.state.places.map((place,index)=>{
    //   return (
    //     <View key={index} style={styles.listContainer}>
    //       <Text>{place}</Text>
    //     </View>
    //   )
    // })
    
    // const placesOutput = (<FLatList 
    //   style = {styles.listContainer}
    //   data = {this.state.places} 
    //   renderItem = {(info) => (
    //     <View>
    //         <Text>{info.value}</Text>
    //       </View>
    //   )}
    // />)

    return (
      <View style={styles.container}>
        {/* <Text>Name</Text> */}
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="enter placeName"
            style={styles.placeInput}
            onChangeText={this.placeNameChangedHandler}
          />
          <Button title="Add" style={styles.placeButton}
            onPress={this.placeSubmitHandler} />

        </View>
        <View style={styles.inputContainer}>
          <Button onPress={this.toggleModal} title="toggleModal" />
        </View>
          {/* <FlatList 
            
            data = {this.state.places}
            renderItem = {({item}) => 
              <View key={item.key} style={styles.listContainer}>
                  <Text>{item.value}</Text>
                </View>
            }
          /> */}


          <FlatList 
            style={styles.flatlistContainer}
            data = {this.state.places}
            renderItem = {(info) => 
              <View 
                key={info.item.key}
                style={styles.flatlistviewContainer}
                >
                  <Text>{info.item.value}</Text>
                  <Image 
                    source={myimage} 
                    style={styles.image}
                    resizeMode = "contain"
                    />
                </View>
            }
          />
        <Modal 
          visible={this.state.togglemodal}
          animationType="slide"
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}
        >
          <View>
            <Text>In Modal</Text>
            <Button onPress={this.toggleModal} title="hidemodal" />
          </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //flexDirection : 'row',
    //backgroundColor: '#fff',
    //backgroundColor: 'green',
    alignItems: 'center',
    //alignItems: 'flex-start',
    //justifyContent: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  placeInput : {
    //flex: 1
    
    width: "70%"
  },
  inputContainer : {
    //flex:1,
    width: "100%",
    flexDirection: 'row',
    justifyContent : 'space-between',
    alignItems : 'center'
  },
  placeButton : {
    width: "30%"
  },
  listContainer :{
    width: "100%",
    backgroundColor: 'grey',
    flexDirection: 'column'
  },
  flatlistContainer : {
    backgroundColor : 'brown',
    flexDirection: 'row',
    width: '100%'
  },
  flatlistviewContainer :{
    //backgroundColor: 'blue',
    flexDirection: 'row',
    width: '100%',
    height : 80,
    alignItems : 'center',
    justifyContent: 'center',

  },
  image : {
    height:60,
    width:60
  }
});
