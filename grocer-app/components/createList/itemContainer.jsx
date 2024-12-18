import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function ItemContainer(){

    const style = StyleSheet.create({
        container :{
            flex: 1,
            height: '100%',
            maxHeight: 500,
            
            backgroundColor: 'gray',
            padding: 5
        },
    });

    return(
        <View style={style.container}>
            <Text>
                
            </Text>
        </View>

    );
}