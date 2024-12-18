import {View, Text, StyleSheet} from 'react-native'

export default function Product(){

    const style = StyleSheet.create({

        itemContainer: {
            flex: 1,
            padding: 15,
            alignItems: 'center',
            rowGap: 10,

        },

        header: {
            fontWeight: 'bold',
            fontSize: 24,

        },

        img: {
            backgroundColor: 'gray',
            width: 250,
            height: 250,

        },

        actionContainer: {
            backgroundColor: 'gray', 
            width: 250,
            height: 60,
            flexDirection: 'row',
            justifyContent: 'space-between',
            
        },

        priceContainer: {
            backgroundColor: 'gray',
            flex: 1,
            width: '100%',
            
        },

        counter:{
            backgroundColor: 'white',
            width: 100,
            

        },

        add : {
            backgroundColor: 'white',
            width: 50,
          
        }
    });

    return(
        <View style ={style.itemContainer}>
            <Text style={style.header}>
               This is a product
            </Text>
            <View style={style.img}/>

            <View style={style.actionContainer}>
                <View style={style.counter}/>
                <View style={style.add}/>
            </View>

            <View style={style.priceContainer}/>
        </View>
    );
}