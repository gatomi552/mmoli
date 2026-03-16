import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';
import QRProvider from "../components/QRProvider";

export default function TabLayout() {
  return (
    <QRProvider>
      <NativeTabs>

        <NativeTabs.Trigger name="index">
          <Label>Home</Label>
          <Icon src={require('../assets/Extra/house.png')}  
          />
        </NativeTabs.Trigger>

        <NativeTabs.Trigger name="QRS">
          <Label>QR</Label>
          <Icon src={require('../assets/Extra/QR.png')} 
          />
        </NativeTabs.Trigger>
        {/*<NativeTabs.Trigger name="settings">
        <Label hidden />
          <Icon
            sf="gearshape.fill"
          />
        </NativeTabs.Trigger>
        */}
      </NativeTabs>
    </QRProvider>
  );
}