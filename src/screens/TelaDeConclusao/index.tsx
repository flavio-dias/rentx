import React from "react";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Icon from '@expo/vector-icons/MaterialIcons';
import theme from "../../styles/theme";
import { RFValue } from "react-native-responsive-fontsize";
import LogoSvg from '../../assets/logo_background_gray.svg';
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenListApp } from "../../routes/stack.routes";

interface ParamProps {
    texto: string,
    proximaTela: keyof StackScreenListApp
}

export default function TelaDeConclusao() {
    const { navigate } = useNavigation<StackNavigationProp<StackScreenListApp, 'TelaDeConclusao'>>();
    const { texto, proximaTela } = useRoute().params as ParamProps;
    const handleAceitar = () => {
        navigate(proximaTela);
    }

    return <View style={ss.bg}>
        <StatusBar barStyle='light-content' translucent backgroundColor='transparent' />
        <LogoSvg />
        <Icon name='check' size={35} color={theme.colors.success} />
        <Text style={ss.text} >{texto}</Text>
        <TouchableOpacity style={ss.button} onPress={handleAceitar}>
            <Text style={ss.text}>OK</Text>
        </TouchableOpacity>
    </View>
}

const ss = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: theme.colors.header,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    text: {
        fontFamily: theme.fonts.secondary_500,
        fontSize: RFValue(20),
        color: theme.colors.bg_secondary,
        marginVertical: 10
    },
    button: {
        backgroundColor: theme.colors.shape_dark,
        marginTop: '60%',
        marginBottom: '30%',
        paddingHorizontal: 30,
    }
});