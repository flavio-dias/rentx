import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import { SvgProps } from "react-native-svg";
import theme from "../../styles/theme";

interface PerksCarroProps {
    name: string,
    icon: React.FC<SvgProps>
}

export default function PerksCarro({ name, icon: Icon }: PerksCarroProps) {

    return <View style={ss.bg}>
        <Icon width={32} height={32} />
        <Text style={ss.nome}>{name}</Text>
    </View>
}

const ss = StyleSheet.create({
    bg: {
        backgroundColor: theme.colors.bg_primary,
        width: 110,
        height: 92,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginBottom: 8
    },
    nome: {
        fontFamily: theme.fonts.primary_500,
        color: theme.colors.text,
        fontSize: RFValue(13)
    }
})