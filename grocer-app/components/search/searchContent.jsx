import {View, Text, StyleSheet} from 'react-native';

export default function searchContent({children}){

    const style = StyleSheet.create({
        item :{
            height: 75,
            backgroundColor: 'gray',

        }
    });

    return(
        <View style={style.item}>
            {children}
        </View>
    );
}