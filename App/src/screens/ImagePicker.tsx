import React, {useEffect} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useCameraRoll} from '@react-native-camera-roll/camera-roll';

function ImagePicker() {
  const [photos, getPhotos] = useCameraRoll();
  console.log(photos);

  const onPress = async () => {
    getPhotos()
      .then(data => {
        console.log(data);
      })
      .catch(err => console.log(err));
  };

  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Text>Get Photos</Text>
      </TouchableOpacity>
    </>
  );
}

export default ImagePicker;
