import {Tabs} from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabsLayout() {
  return (
    
   <Tabs screenOptions={{headerShown: false}}>

    <Tabs.Screen name="home" options={{title: "Home", tabBarIcon: () => (
    <Ionicons name='home-outline' size={24} />
  )}} />

   <Tabs.Screen name="search" options={{title: "Search", tabBarIcon: () => (
    <Ionicons name='search' size={24} />
  )}} />

    <Tabs.Screen name="new" options={{title: "New", tabBarIcon: () => (
    <Ionicons name='add' size={24} />
  )}} />

    <Tabs.Screen name="notifications" options={{title: "Notifications", tabBarIcon: () => (
    <Ionicons name='notifications-outline' size={24} />
  )}} />

    <Tabs.Screen name="profile" options={{title: "profile", tabBarIcon: () => (
    <Ionicons name='person-outline' size={24} />
  )}} />
  
   </Tabs>
  )
}
