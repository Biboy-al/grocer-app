import {View, Text, StyleSheet, TouchableHighlight} from 'react-native';
import { useRouter } from 'expo-router';

export default function ItemCard({val}){
    const router = useRouter();
    const onPress = () =>{
        
        router.push('/item');
        //should have some fetch request
    }
    
    const style = StyleSheet.create({
        item :{
            height: 75,
            backgroundColor: 'gray',
            padding: 5
        },
        img:{
            flex: 1,
            height: 65,
            width: 65,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
        }
    });

    return(
        <TouchableHighlight onPress={onPress}>
            <View style={style.item}>
                <View style = {style.img}>
                    <Text>
                        Img
                    </Text>
                </View>
            </View>
        </TouchableHighlight>

    );
}