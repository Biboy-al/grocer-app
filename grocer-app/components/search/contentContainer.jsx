import {View, Text, StyleSheet} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default function ContentContainer({children}){

    const style = StyleSheet.create({
        mainContainer :{
            maxHeight: 550,
            width: 350,
            padding: 10,
            gap: 10,
            backgroundColor: 'white',

        }
    });

    return(
        <View style={style.mainContainer}>
            {children}
        </View>

    );
}