import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';
import { SearchBar } from 'react-native-elements';
import ContentContainer from '@/components/search/contentContainer'
import SearchContent from '@/components/search/searchContent'

export default function Search(){
    const items = [1,2,3,4, 5];
    const [toSearch, setToSearch] = useState("");

    const style = StyleSheet.create({
        mainView:{
            flex: 1,
            alignItems: 'center',
            padding: 100,

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
        }
    });
    return(
        <View style={style.mainView}>
            <SearchBar 
            onChangeText={setToSearch}
            lightTheme={true}
            value={toSearch}
            containerStyle = {style.searchContainer} 
            inputContainerStyle = {style.inputStyleContainer}
            placeholder='Milk...'
           />

           <ContentContainer>
                <Text>
                    Good deals
                </Text>
                {
                    items.map((val, id)=>(
                        <SearchContent val ={val}/>
                    ))
                }
           </ContentContainer>
        </View>
    );
}