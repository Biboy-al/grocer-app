import {View, Text, StyleSheet} from 'react-native';

export default function AddNewList({onClick}){
    const style = StyleSheet.create({
        list:{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center', 
            height: 100,
            borderWidth: 2,
            backgroundColor: 'white',
            borderStyle: 'dashed',
        }
    });

    return (
        <View style = {style.list} >
            <Text>
                Add new Shopping List
            </Text>
        </View>
    );
}