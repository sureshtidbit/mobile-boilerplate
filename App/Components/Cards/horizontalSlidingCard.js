import React from 'react'
import { FlatList, StyleSheet, View, Text, Image } from 'react-native'
const HorizontalSliderCard = (props) => {
    Item = ({ item }) => {
        return (
            <View style={styles.item}>
                <View>
                    <Image style={{ width: 100, height: 160, resizeMode: 'cover' }}
                        source={require('../../Images/sp2.jpg')} />
                </View>
                <View style={{padding: 10}}>
                    <Text numberOfLines={1} style={styles.title}>{item.title.slice(0, 12)}</Text>
                </View>
            </View>
        );
    }
    return (
        <FlatList
            data={props.data}
            horizontal={true}
            renderItem={({ item }) => <Item item={item} />}
            keyExtractor={item => item.id}
        />
    )
}
export default HorizontalSliderCard;
const styles = StyleSheet.create({
    item: {
        backgroundColor: '#596fde',
        borderRadius: 10,
        marginVertical: 8,
        marginHorizontal: 10,
        overflow: 'hidden'
    },
    title: {
        fontSize: 14,
        color:'#FFF'
    },
});