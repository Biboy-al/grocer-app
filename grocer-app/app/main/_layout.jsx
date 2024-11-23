import {Tabs} from 'expo-router';

export default function mainLayout(){
    return(
        <Tabs screenOptions={{headerShown: false}}>
            <Tabs.Screen name='search'/>
            <Tabs.Screen name='shoppingList'/>
            <Tabs.Screen name='Setting'/>
        </Tabs>
    );
}