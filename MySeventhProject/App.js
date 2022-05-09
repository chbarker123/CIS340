import { StatusBar } from 'expo-status-bar';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  OnButtonPress(){
    alert('You tapped a button')
  }
  render(){
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Button
            onPress={() => {
              alert('You tapped a button');
            }}
            title="Press button 1"/>
      </View>

      <View style={styles.containerLayoutButton}>
      <Button
            onPress={() => {
              alert('You tapped a button');
            }}
            title="Press button 2"/>

      </View>

    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  contatinerButton: {
    margin: 20,
  },

  containerLayoutButton: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
