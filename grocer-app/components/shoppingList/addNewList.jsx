import { useRouter } from 'expo-router';
import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';

export default function AddNewList(){
    const router = useRouter();

    const onPress = ()=>{
        router.push('/createList')
    }

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
        <TouchableHighlight onPress={onPress}>
            <View style = {style.list} >
                <Text>
                    Add new Shopping List
                </Text>
            </View>
        </TouchableHighlight>

    );
}