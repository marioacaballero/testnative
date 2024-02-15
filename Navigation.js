import { createDrawerNavigator  } from '@react-navigation/drawer'
    import { NavigationContainer } from '@react-navigation/native'


import Default0 from './src/Default0'
import Favoritos1 from './src/Favoritos1'
import Tuperfil2 from './src/Tuperfil2'
import Registrarse3 from './src/Registrarse3'
import Pruebasencontradasde4 from './src/Pruebasencontradasde4'
import Pruebasencontradasde5 from './src/Pruebasencontradasde5'

const Tab = createDrawerNavigator ()

function MyTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Default0" component={Default0} />
            <Tab.Screen name="Favoritos1" component={Favoritos1} />
            <Tab.Screen name="Tuperfil2" component={Tuperfil2} />
            <Tab.Screen name="Registrarse3" component={Registrarse3} />
            <Tab.Screen name="Pruebasencontradasde4" component={Pruebasencontradasde4} />
            <Tab.Screen name="Pruebasencontradasde5" component={Pruebasencontradasde5} />
        </Tab.Navigator>
    )
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs />
        </NavigationContainer>
    )
}
    