import React from 'react';
import { StyleSheet, Text, ScrollView, Alert, AppRegistry, Button, FlatList, View } from 'react-native';
export default class App extends React.Component {
  getCall(data)
  {
    console.log(data);
    if(typeof data == "object"){ Alert.alert("You pressed on "+data.currDta); return false; }
    Alert.alert("You pressed on "+data);
  }
  render() {
    console.log("hi");
    //this.getCall("loaded");
    console.log("hi 2");
    data1=[
      {key: 'Devin'},
      {key: 'Jackson'},
      {key: 'James'},
      {key: 'Joel'},
      {key: 'John'},
      {key: 'Jillian'},
      {key: 'Jimmy'},
      {key: 'Julie'},
    ];
    populateArr = [];
    var currDta = "";
    for(i=0;i<data1.length;i++)
    {
      currDta = data1[i].key;
      populateArr.push(<Text onPress={()=>{this.getCall({currDta});}}>{currDta}</Text>);
    }
    //console.log(ret_arr);
    return (
      <View style={styles.container}>
        <View style={styles.innercontainer}></View>
        <Text>Start</Text>
        <View>{populateArr}</View>
        <Text>End</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text style={styles.textarea}>Shake your phone to open the developer menu.</Text>
        <Text>Hi I am Surajit</Text>
        <Button
          onPress={() => {
            Alert.alert('You tapped the button!');
          }}
          title="Press Me"
          />
          <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text onPress={()=>{this.getCall(item.key);}} style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textarea:{
    color: 'blue'
  },
  innercontainer:
  {
    height:200
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);