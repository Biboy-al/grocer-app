import {View, Text, StyleSheet,ScrollView} from 'react-native';
import ListContainer from '@/components/shoppingList/listContainer'
import List from  '@/components/shoppingList/list'


export default function shoppingList(){
    const lists = [1]
    const style = StyleSheet.create({
        shoppingList:{
            padding:10,
            bottomPadding: 20,

        }
    })
    return(
        <ScrollView style={style.shoppingList}>
            <ListContainer>
                {
                    lists.map((val,idx) =>(
                       <List val = {val} />
                    ))
                }
            </ListContainer>       
        </ScrollView>
    );
}