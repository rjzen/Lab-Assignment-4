import React from 'react';
import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

const DashboardLayout = () => {
  return (
    <View style={styles.container}>
      <Tabs
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'black',
          tabBarActiveBackgroundColor: '#FAB12F',
          tabBarLabelStyle: {
            fontSize: 12,
          },
          tabBarStyle: {
            margin: 10,
            borderRadius: 10,
            backgroundColor: '#FFF',
          },
          tabBarShowLabel: true,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'home' : 'home-outline'}
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Profile',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'account' : 'account-outline'}
                size={24}
                color="black"
              />
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons
                name={focused ? 'cog' : 'cog-outline'}
                size={24}
                color="black"
              />
            ),
          }}
        />
      </Tabs>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FEF3E2',
  },
});

export default DashboardLayout;
