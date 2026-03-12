import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';

export default function TabLayout() {
  return (
    <NativeTabs>

      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon src={require('./assets/home.png')}  
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="Qr">
        <Label>QR´S</Label>
        <Icon src={require('./assets/Carpet.png')} 
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
  );
}