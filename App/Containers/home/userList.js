import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-ae2d5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1sb1-46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1bv1-46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-4y6c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-46c2e-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1s-46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-46hc2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1db1-46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1h-46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1nb1-46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aend5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-46c2-naed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1cb1-46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-4v6c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-b46c2-aed5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  {
    id: 'bd7acbea-c1b1-46c2-aemd5-3ad53abb28ba',
    title: 'Created By',
    title2: 'Sanjay shah Tidbit solution',
    title3: 'Fronend Designer',
    title4: 'sanjay@tidbitlab.com',
  },
  
];
const myIcon = <Icon name="rocket" size={30} color="#900" />;
function Item({ title }) {
  return (
    <View key={title.id} style={styles.item} >
      <View style={styles.textUpView}>
        <Image style={{ height:40, width: 40 }} source={require('../../Images/a2.png')} />
      </View>
      <View style={styles.textUpView}>
        <Text style={styles.title} style={{ fontSize: 15,  fontWeight: 'bold',}} >{title.title2}</Text>
        <Text style={styles.title}>{title.title3}</Text>
        <Text style={styles.title}>{title.title4}</Text>
      </View>
      <View style={styles.textUpView} style={{ flexDirection: 'row-reverse', flex: 1 }} >
          <TouchableOpacity style={{ borderWidth: 1, borderColor: '#888', borderRadius: 50, height: 20, width: 20, justifyContent: 'center', alignItems: 'center', }} >
            <Icon name="angle-right" color="#888" />
          </TouchableOpacity>
      </View>
    </View>
  );
}

export default function UserList() {
  return (
      <ScrollView>
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item title={item} />}
            keyExtractor={item => item.id}
        />
      </ScrollView>
  );
}

const styles = StyleSheet.create({

  item: {
    flex: 1,
    flexDirection:'row',
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: .5,
    alignItems: 'center'
  },
  title: {
    fontSize: 10,
  },

});
