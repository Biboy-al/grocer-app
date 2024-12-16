import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ContentContainer({children}){

    const style = StyleSheet.create({
        mainContainer :{
            width: 400,
            padding: 10,
            gap: 10,
            backgroundColor: 'white',
            borderRadius: 10,

        }
    });

    return(
        <View style={style.mainContainer}>
            {children}
        </View>

    );
}