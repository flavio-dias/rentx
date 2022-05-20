
import React from "react";
import { CarroDTO } from "../dtos/CarroDTO";
import Agendamento from "../screens/Agendamento";
import TelaDeConclusao from "../screens/TelaDeConclusao";
import CarrosAlugados from "../screens/CarrosAlugados";
import Detalhes from "../screens/Detalhes";
import DetalhesAgendamento from "../screens/DetalhesAgendamento";
import Home from "../screens/Home";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stack.routes";
import theme from "../styles/theme";
import { MaterialIcons } from '@expo/vector-icons';
import Perfil from "../screens/Perfil";


const { Navigator, Screen } = createBottomTabNavigator();

export type TabScreenListApp = {
    Aluguel: undefined,
    CarrosAlugados: undefined,
    Perfil: undefined
}

export default function AppTabRoutes() {
    return <Navigator
        initialRouteName="Aluguel"
        screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: theme.colors.main,
            tabBarLabelStyle: { height: 0 },
            tabBarInactiveTintColor: theme.colors.text_detail,
            tabBarStyle: {
                backgroundColor: theme.colors.bg_primary
            }
        }}
    >
        <Screen
            name='Aluguel'
            component={StackRoutes}
            options={{
                tabBarIcon: ({ focused }) => <MaterialIcons name='home' size={25} color={focused ? theme.colors.main : theme.colors.text_detail} />
            }}
        />
        <Screen
            name='CarrosAlugados'
            component={CarrosAlugados}
            options={{
                tabBarIcon: ({ focused }) => <MaterialIcons name='drive-eta' size={25} color={focused ? theme.colors.main : theme.colors.text_detail} />
            }}
        />
        <Screen
            name='Perfil'
            component={Perfil}
            options={{
                tabBarIcon: ({ focused }) => <MaterialIcons name='person' size={25} color={focused ? theme.colors.main : theme.colors.text_detail} />
            }}
        />
    </Navigator>
}