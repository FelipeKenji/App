import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'


import { NavigationContainer } from '@react-navigation/native';
import OptionScreen from '../OptionScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Tab = createBottomTabNavigator();

function StackRoutes() {
    const Stack = createNativeStackNavigator
    return(

        
            <Stack.Navigator>
                 <Stack.Screen name='Option'
                component={OptionScreen}>

                </Stack.Screen>
            </Stack.Navigator>
    )
}

export default StackRoutes;