import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import Home from './pages/home/Index';

import AddTrabalho from './pages/addtrabalho/addtrabalho';
import Favoritos from './pages/favoritos/favoritos';
import Notificacao from './pages/notificacao/notificacao';
import Perfil from './pages/perfil/perfil';
import { NavigationContainer } from '@react-navigation/native';
import OptionScreen from '../OptionScreen';
import TabRoutes from './TabRoutes';
import StackRoutes from './StackRoutes'


const Tab = createBottomTabNavigator();

function Routes() {
    return(
        <TabRoutes/>
        

       
    )
}

export default Routes;