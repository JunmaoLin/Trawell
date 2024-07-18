import { StyleSheet, Text, View, Image} from 'react-native';
import logo from '../images/TrawellLogo.png';

export default function loadingPage() {
    return (
      <View style={styles.container}>
        <Image style={styles.landingLogo} source = {logo}/>
        <Text style={{ fontFamily: 'Palatino', fontSize: 36 }}>T r a w e l l</Text>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    landingLogo: {
      height:250,
      width:250
    }
  });