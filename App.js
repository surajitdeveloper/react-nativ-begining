import React from 'react';
import { StyleSheet, Text, ScrollView, Alert, AppRegistry, Button, FlatList } from 'react-native';
export default class App extends React.Component {
  render() {
    return (
      <ScrollView style={styles.container}>
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
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
      </ScrollView>
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
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
AppRegistry.registerComponent('AwesomeProject', () => ButtonBasics);