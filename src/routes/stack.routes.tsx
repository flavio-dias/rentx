import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { CarroDTO } from "../dtos/CarroDTO";
import Agendamento from "../screens/Agendamento";
import TelaDeConclusao from "../screens/TelaDeConclusao";
import Detalhes from "../screens/Detalhes";
import DetalhesAgendamento from "../screens/DetalhesAgendamento";
import Home from "../screens/Home";
import { Car } from "../database/model/Car";

const { Navigator, Screen } = createStackNavigator();

export type StackScreenListApp = {
    Home: undefined,
    Detalhes: { carro: Car },
    DetalhesAgendamento: { carro: CarroDTO, datas: string[] },
    Agendamento: { carro: CarroDTO },
    TelaDeConclusao: { texto: string, proximaTela: keyof StackScreenListApp },
    CarrosAlugados: undefined,
}

export default function StackRoutes() {
    return <Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="Home"
    >
        <Screen
            name='Home'
            component={Home}
        />
        <Screen
            name='Detalhes'
            component={Detalhes}
        />
        <Screen
            name='DetalhesAgendamento'
            component={DetalhesAgendamento}
        />
        <Screen
            name='Agendamento'
            component={Agendamento}
        />
        <Screen
            name='TelaDeConclusao'
            component={TelaDeConclusao}
        />
    </Navigator>
}