import {View, Text, StyleSheet, Animated} from 'react-native';
import {useState} from 'react';
import { SearchBar } from 'react-native-elements';
import ContentContainer from '@/components/search/contentContainer'
import ItemCard from '@/components/search/itemCard'

export default function Search(){
    const items = [1,2,3,4, 5];
    const [toSearch, setToSearch] = useState("");

    const style = StyleSheet.create({
        mainViewNorm:{
            flex: 1,
            alignItems: 'center',
            rowGap: 10,
            margin: 100,

        },

        mainViewSearch:{
            flex: 1,
            alignItems: 'center',
            rowGap: 10,
            margin: 10,

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
            width: 400,
            borderRadius: 15,
        },

        textDeals:{
            fontWeight: 'bold'
        }
    });

    return(
        <View style={!toSearch ? style.mainViewNorm : style.mainViewSearch}>
            <SearchBar 
            onChangeText={setToSearch}
            lightTheme={true}
            value={toSearch}
            containerStyle = {style.searchContainer} 
            inputContainerStyle = {style.inputStyleContainer}
            placeholder='Milk...'
           />
            {!toSearch ? 
           <ContentContainer>
                <Text style = {style.textDeals}>
                    Good deals
                </Text>
                {
                    items.map((val, id)=>(
                        <ItemCard val ={val} id={id}/>
                    ))
                }
           </ContentContainer>
            : <Text>
                Searching for '"{toSearch}"</Text>}   
        </View>
    );
}