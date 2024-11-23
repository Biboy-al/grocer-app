import {View, Text, StyleSheet} from 'react-native';
import AddNewList from  '@/components/shoppingList/addNewList';
export default function ListContainer({children}){
    const style = StyleSheet.create({
        listContainer:{
            rowGap: 20,
            bottomPadding: 20,
        }
    });

    return (
        <View style = {style.listContainer} >
            {children}
            <AddNewList/>
        </View>

    );
}