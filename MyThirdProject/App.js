import React, { useState } from 'react';
import {Text, View, Button } from 'react-native';

function TV(props) {

  const[isOff, setIsOff] = useState(true);

  return (
    <View>
      <Text>Open up App.js to start working on your app!
        {"\n\n\n\n\n"}
        This is {props.name} TV, and it is {isOff ? "Off" : "Turned On"}
      </Text>
      <Button
        onPress={() => {
          setIsOff(false);
        }}
        disabled={!isOff}
        title={isOff ? "Turn me on, Please!" : "Thank You!"}
        />
    </View>
  );
}

export default function MultiTv(){
  return(
    <View>
      <TV name = "LG" />
      <TV name = "Sony" />
    </View>
  );
}
