import { NativeTabs, Icon, Label } from 'expo-router/unstable-native-tabs';


export default function TabLayout() {
  return (
    <NativeTabs>

      <NativeTabs.Trigger name="index">
        <Label>Home</Label>
        <Icon src={require('../assets/Extra/house.png')}  
        />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="QRS">
        <Label>QS</Label>
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
  );
}