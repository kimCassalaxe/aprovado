import { Color } from "@/thems/color";
import {Entypo, FontAwesome6, MaterialIcons} from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { ScreenStackHeaderSubview } from "react-native-screens";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Color.Primary, // Roxo vibrante da sua tela ao ativar
        tabBarInactiveTintColor: Color.Secondary, // Cinza ao desativar
        
      }}
    >
      <Tabs.Screen 
      name="home"  
      options={{ 
        title: "Home", 
        tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),}} 
      />
      <Tabs.Screen 
        name="quiz" 
        options={{ 
        title: "Quiz",
        tabBarIcon: ({ color, size }) => (
            <Entypo name="game-controller" size={size} color={color}  />
          ),}} 
      />
      <Tabs.Screen name="dashbordUser" options={{ 
        title: "Dashboard",
        tabBarIcon: ({ color, size }) => (
            <FontAwesome6 name="user-large" size={size} color={color} />
          ),}}  />
    </Tabs>
  );
}
