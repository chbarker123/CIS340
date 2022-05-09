import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import * as ImagePicker from 'expo-image-picker'; 
import * as Sharing from 'expo-sharing';

export default function App() {

  const [selectedImage, setSelectedImage] = React.useState(null)
  let openImagePickerAsync = async () => {
    let permissionResult = await ImagePicker.requestCameraRollPermissionsAsync();

    if(permissionResult.granted == false){
      alert("Permission is required!");
      return;
    }

    let pickerResult = await ImagePicker.launchImageLibraryAsync();

    if(pickerResult.cancelled == true) {
      return;
    }

    setSelectedImage({ localUri: pickerResult.uri});

  };

  let openSharingDialogAsync = async () => {
    if(!(await Sharing.isAvailableAsync())){
      alert('Sharing is no available');
      return;

    }

    Sharing.shareAsync(selectedImage.localUri);
  };

  if(selectedImage !== null) {
    return(
      <View style={styles.container}>
        <Image source={{ uri: selectedImage.localUri}} style={styles.selImage}/>
        <TouchableOpacity onPress={openSharingDialogAsync} style={styles.button}>
          <Text style={styles.buttonText}> Share This Photo </Text>
        </TouchableOpacity>

      </View>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20
  },

  button: {
    alignItems: "center",
    backgroundColor: "blue",
    padding: 10
  },

  counterText: {
    alignItems: "center",
    padding: 10
  }
});
