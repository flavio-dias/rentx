import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import TelaDeConclusao from "../screens/TelaDeConclusao";
import SignIn from "../screens/SignIn";
import SignUpStep1 from "../screens/SignUp/SignUpStep1";
import SignUpStep2 from "../screens/SignUp/SignUpStep2";

const { Navigator, Screen } = createStackNavigator();

export type AuthScreenListApp = {
    TelaDeConclusao: { texto: string, proximaTela: keyof AuthScreenListApp },
    SignIn: undefined,
    SignUpStep1: undefined,
    SignUpStep2: { nome: string, email: string, cnh: string }
}

export default function AuthRoutes() {
    return <Navigator
        screenOptions={{
            headerShown: false
        }}
        initialRouteName="SignIn"
    >
        <Screen
            name='TelaDeConclusao'
            component={TelaDeConclusao}
        />
        <Screen
            name='SignIn'
            component={SignIn}
        />
        <Screen
            name='SignUpStep1'
            component={SignUpStep1}
        />
        <Screen
            name='SignUpStep2'
            component={SignUpStep2}
        />
    </Navigator>
}