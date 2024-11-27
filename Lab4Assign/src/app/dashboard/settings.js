import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Settings = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <Button
        mode="contained"
        onPress={() => router.replace('/')}
        style={styles.button}
        labelStyle={styles.buttonText}
        buttonColor='#FAB12F'
      >
        Logout
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FEF3E2',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  button: {
    width: 200,
    backgroundColor: '#FAB12F',
    borderRadius: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Settings;
