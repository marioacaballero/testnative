import { StatusBar } from 'expo-status-bar';
import { style } from './registrarse3Style';
import { StyleSheet } from 'react-native';
import { View } from "react-native";
import { Text } from "react-native";
import Svg, { Path } from "react-native-svg";
import { Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; 

export default function Registrarse3() {
  
  return (
  <View style={styles.aythregistrarsmqyw0r}>
    <LinearGradient style={styles.aythregistrars66wwed}
    locations={[0,0.13,0.37,0.64,0.88,1]}
    start={[-0.32556815445715664,-0.9455185755993168]}
    end={[0.32556815445715676,0.9455185755993167]}
    colors={["#f25910","#f6b99c","#ffffff","#fef8f5","#652794","#40036f"]} >
      <View style={styles.aythFrame15477wsfb8t}>
        <View style={styles.aythFrame15477gnbnxr}>
        <Image style={styles.aythCaptura_dei5ltb8} source={{uri: 'https://2a2b4e20-0ae7-4d18-ae3c-ab385edfc641.s3.fr-par.scw.cloud/figma/Captura_de_pantalla_202311.png'}}
        />
        <Text style={styles.aythENCUENTRAT9p1dou}>
        {"ENCUENTRA TU PRUEBA"}
        </Text>
      </View>
      <View style={styles.aythFrame154770qgn8q}>
        <View style={styles.aythFrame15477avhr3l}>
          <Text style={styles.aythNombredeus52u45d}>
          {"Nombre de usuario"}
          </Text>
        </View>
        <View style={styles.aythFrame1547730g5d4}>
          <Text style={styles.aythEmailps7dq6}>
          {"Email"}
          </Text>
        </View>
        <View style={styles.aythFrame15477lw5g}>
          <Text style={styles.aythContraseatq5rgh}>
          {"Contraseña"}
          </Text>
        </View>
        <View style={styles.aythFrame15477ndf44}>
          <Text style={styles.aythRegistrarsord6ia}>
          {"Registrarse"}
          </Text>
        </View>
        <Text style={styles.aythHasolvidadrvmxm}>
        {"¿Has olvidado tu contraseña?"}
        </Text>
      </View>
    </View>
  </LinearGradient>
  <StatusBar style="auto"
  />
</View>

  );
};
const styles = StyleSheet.create(style);