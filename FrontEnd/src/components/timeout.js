import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';

const MyScreen = ({ navigation }) => {
  const [navigateToNextScreen, setNavigateToNextScreen] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setNavigateToNextScreen(true);
    }, 5000);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (navigateToNextScreen) {
      // Perform navigation to the next screen
      navigation.navigate('NextScreen');
    }
  }, [navigateToNextScreen]);

  return (
    <View>
      <Text>This is my screen.</Text>
      <Button title="Navigate Now" onPress={() => setNavigateToNextScreen(true)} />
    </View>
  );
};

export default MyScreen