import {View, Text, StyleSheet, Modal} from 'react-native';
import { useState } from 'react';

export default function CreateList(){
    const [modalVisible, setModalVisible] = useState(false);

    return (
        
        <Modal  animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
          setModalVisible(!modalVisible);
        }}>
            <View>
                <Text>
                    This is the Create shopping list
                </Text>
            </View>
        </Modal>
        
    );
}