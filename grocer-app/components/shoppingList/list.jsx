import {View, Text, StyleSheet} from 'react-native';

export default function List({val}){
    const style = StyleSheet.create({
        list:{
            
            height: 100,
            borderWidth: 2,
            backgroundColor: 'white',
        }
    });

    return (
        <View style = {style.list} >
            <Text>
                Shopping list {val}
            </Text>
        </View>
    );
}