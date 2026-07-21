import { Color } from "@/thems/color";
import { Stack} from "expo-router";

export default function StackLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: Color.Primary },
        headerTintColor: "#fff",
        //headerShown: false,
        
      }}
      
    >
      <Stack.Screen name="index" options={{ title: "Home",headerShown: false,headerStyle: { backgroundColor: Color.white }, headerTintColor: Color.Primary,}} />
      <Stack.Screen name="login" options={{ title: "Login" }} />
      <Stack.Screen name="sigin" options={{ title: "Sig In" }} />
    </Stack>
  );
}
