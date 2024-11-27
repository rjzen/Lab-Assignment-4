import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const Home = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Home Screen!</Text>
      <Text style={styles.subtitle}>Explore your options below.</Text>
      <Button
        mode="contained"
        onPress={() => router.push('/settings')}
        style={styles.button}
        labelStyle={styles.buttonText}
      >
        Go to Settings
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
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FAB12F',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#C97D1A',
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    width: 200,
    backgroundColor: '#FAB12F',
    borderRadius: 8,
    paddingVertical: 8,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

export default Home;
