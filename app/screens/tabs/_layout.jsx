import {Tabs} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    
   <Tabs screenOptions={{headerShown: false}}>

    <Tabs.Screen name="home" options={{title: "Home", tabBarIcon: () => (
    <Ionicons name='home-outline' size={24} />
  )}} />

    <Tabs.Screen name="profile" options={{title: "profile", tabBarIcon: () => (
    <Ionicons name='person-outline' size={24} />
  )}} />
   </Tabs>
  )
}

