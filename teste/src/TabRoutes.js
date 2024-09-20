import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/home/Index';

import AddTrabalho from './pages/addtrabalho/addtrabalho';
import Favoritos from './pages/favoritos/favoritos';
import Notificacao from './pages/notificacao/notificacao';
import Perfil from './pages/perfil/perfil';
import { NavigationContainer } from '@react-navigation/native';
import OptionScreen from '../OptionScreen';


const Tab = createBottomTabNavigator();

function TabRoutes() {
    return(

        
            <Tab.Navigator>
                <Tab.Screen
                name="Home"
                component={Home}
                />
            <Tab.Screen
                name="AddTrabalho"
                component={AddTrabalho}
                />
                <Tab.Screen
                name="Favoritos"
                component={Favoritos}
                />
            <Tab.Screen
                name="Perfil"
                component={Perfil}
                />
            <Tab.Screen
                name="Notificacao"
                component={Notificacao}
                />
            </Tab.Navigator>
            
       
    )
}

export default TabRoutes;