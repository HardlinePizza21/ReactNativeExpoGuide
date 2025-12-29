import { StyleSheet, View } from "react-native";

import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";


import EmojiPicker from "@/components/EmojiPicker";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";

const PlaceHolderImage = require('@/assets/images/background-image.png')

export default function Index() {

  const [selectedImage, setSelectedImage] = useState<string | undefined>(undefined)
  const [showAppIptions, setShowAppIptions] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    })

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri)
      setShowAppIptions(true)
    } else {
      alert('You did not select any image')
    }

  }

  const onReset = () => {
    setShowAppIptions(false)
  }

  const onAddSticker = () => {
    setIsModalVisible(true)
  }

  const onModalClose = async () => {
    setIsModalVisible(false)
  }

  const onSaveImageAsync = async () => {
  }


  return (
    <View style={styles.container}>
      <View style={styles.imageContainer} >
        <ImageViewer imgSource={PlaceHolderImage} selectedImage={selectedImage} />
      </View>
      {showAppIptions ? (
        <View style={styles.optionsContainer} >
          <View style={styles.optionRow} >
            <IconButton label='Reset' onPress={onReset} icon='refresh' />
            <CircleButton onPress={onAddSticker} />
            <IconButton label='Save' onPress={onSaveImageAsync} icon='save-alt' />
          </View>
        </View>


      ) : (
        <View style={styles.footContainer}>
          <Button label='Choose a photo' theme="primary" onPress={pickImageAsync} />
          <Button label='Use this photo' onPress={() => { setShowAppIptions(true) }} />
        </View>
      )}
      <EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>


      </EmojiPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    paddingTop: 28
  },
  footContainer: {
    flex: 1 / 3,
    alignItems: 'center'

  },
  optionsContainer: {
    position: 'absolute',
    bottom: 80
  },
  optionRow: {
    alignItems: 'center',
    flexDirection: 'row'
  }
});
