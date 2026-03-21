import { NativeTabs } from 'expo-router/unstable-native-tabs';
import QRProvider from "../components/QRProvider";

export default function TabLayout() {
  return (
    <QRProvider>
      <NativeTabs>

        <NativeTabs.Trigger name="index">
          <NativeTabs.Trigger.Label>Home</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon src={require('../assets/Extra/house.png')} />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="QRS">
          <NativeTabs.Trigger.Label>QR</NativeTabs.Trigger.Label>
          <NativeTabs.Trigger.Icon src={require('../assets/Extra/QR.png')} />
        </NativeTabs.Trigger>

      </NativeTabs>
    </QRProvider>
  );
}