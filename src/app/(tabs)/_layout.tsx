import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        
      }}
    >
      <Tabs.Screen name="Home" options={{ title: "Home",}} />
      <Tabs.Screen name="Quiz" options={{ title: "Quiz" }} />
      <Tabs.Screen name="DashboardUser" options={{ title: "Dashboard" }} />
    </Tabs>
  );
}
