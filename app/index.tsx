// src/app/(checkout)/scanner.tsx
import { Camera, CameraView, useCameraPermissions } from 'expo-camera';
import { Button, Text, View } from 'react-native';

export default function App() {
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Los permisos siguen cargando
    return <View />;
  }

  if (!permission.granted) {
    // Los permisos no han sido otorgados
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ textAlign: 'center' }}>Necesitamos acceso a tu cámara</Text>
        <Button onPress={requestPermission} title="Dar permiso" />
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
       <CameraView style={{ flex: 1 }} />
    </View>
  );
}