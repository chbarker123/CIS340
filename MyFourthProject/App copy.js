import React from 'react';
import { Text, View, FlatList } from 'react-native';

export default StatesApp = () => {
  return (
    <><View style={{ flex: 1, paddingTop: 22 }} /><FlatList>
      data={[
        { key: 'Alabama' },
        { key: 'Alaska' },
        { key: 'Arizona' },
        { key: 'California' },
        { key: 'Colorado' },
        { key: 'Delaware' },
        { key: 'Florida' },
        { key: 'Georgia' },
        { key: 'Hawaii' }
      ]}
      renderItem={({item}) => <Text style={{padding:10, fontSize:20, height:44}}> {item.key} </Text>}
    </FlatList></>


  );
  }
