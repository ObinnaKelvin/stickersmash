import { View, Text, StyleSheet } from 'react-native'
import { Link, Stack } from "expo-router";
import React from 'react'

const styles = StyleSheet.create({
  container: {
    flex: 1,    
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },

  button: {
    fontSize: 20,
    textDecorationLine: 'underline',
    color: '#fff',
  },
});


export default function NotfoundScreen() {
  return (
    <>
        <Stack.Screen options={{ title: "Oops! Not Found"}} />
        <View style={styles.container}>
            <Link href="/" style={styles.button}>
                Go back to Home screen
            </Link>
        </View>
    </>
  )
}