import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  const csuLogo = {
    url: "https://raw.githubusercontent.com/AbdunabiRamadan/CIS340/master/images/logo.png",
  };
  return (
    <View style={styles.container}>
      <ImageBackground source={csuLogo} style={styles.image}>
        <Text style={styles.text}> CSU Logo</Text>

      </ImageBackground>

    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
  },

  localCSULogo: {
    width: 55,
    height: 65,

  },

  urlCSULogo: {
    width: 50,
    height: 50
  }
});
