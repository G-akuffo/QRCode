import { StyleSheet, Text, View } from "react-native";
import QRCode from "react-native-qrcode-svg";

export default function App() {
  const link = "https://github.com/G-akuffo"; //link to my github profile

  return (
    <View style={styles.container}>
      <Text>Scan this QR code to visit the link</Text>
      <QRCode value={link} size={200} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
