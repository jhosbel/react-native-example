import { Button, Text, View } from "react-native";
import React, { useLayoutEffect } from 'react'
import { useNavigation, useRouter } from "expo-router";

const Home = () => {
  const navigation = useNavigation()
  const router = useRouter()

  return (
    <View>
      <Text>Jhosbel</Text>
    </View>
  )
}

export default Home
