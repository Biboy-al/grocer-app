import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="main" options={{
        headerShown: false,
      }}/>
      <Stack.Screen name='product' options={{
        headerShown: false,
      }}/>

  <Stack.Screen name='creatList' options={{
        headerShown: false,
        presentation: 'modal',
      }}/>
      
    </Stack>
  );
}
