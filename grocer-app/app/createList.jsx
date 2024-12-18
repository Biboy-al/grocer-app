import {View, Text, StyleSheet, TextInput} from 'react-native';
import { useState } from 'react';
import { SearchBar } from 'react-native-elements';
import ItemContainer from '@/components/createList/itemContainer'
import ContentContainer from '@/components/search/contentContainer'

export default function CreateList(){
    const [toSearch, setToSearch] = useState("");
    const [listName, setListName] = useState("name List");

    const style = StyleSheet.create({
        mainView: {
            flex: 1,
            padding: 15,
        },

        listTitle: {
            borderBottomWidth: 2,
            borderColor: 'black',
            fontSize: 25
        },

        searchContainer:{
           
            alignContent:'center',
            backgroundColor: 'transparent',
            borderWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
        },

        inputStyleContainer:{
            backgroundColor: 'white',
            width: 350,
            borderRadius: 15,
        },

        addButtonContainer:{

            justifyContent: 'flex-end',
            alignItems: 'center',
            height: '90%',
            flex: 1,
        },

        addButton:{
            backgroundColor: 'white',
            width: 100,
            height: 100,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 100,
        }
    });

    return (

            <View style= {style.mainView}>
                <TextInput 
                    style = {style.listTitle}
                    value={listName}
                    onChangeText={setListName}/>
                <SearchBar 
                    onChangeText={setToSearch}
                    lightTheme={true}
                    value={toSearch}
                    containerStyle = {style.searchContainer} 
                    inputContainerStyle = {style.inputStyleContainer}
                    placeholder='Milk...'
                />

                <ContentContainer>

                </ContentContainer>

                <View style={style.addButtonContainer}>
                    <View style={style.addButton}>

                    </View> 
                </View>

                
  
            </View>

    );
}