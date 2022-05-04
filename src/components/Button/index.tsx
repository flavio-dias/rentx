import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import theme from "../../styles/theme";

interface ButtonProps {
    label: string,
    color?: string,
    onPress: () => void | Promise<void>
}

export default function Button({ label, onPress, color }: ButtonProps) {

    return <TouchableOpacity style={[ss.bg, { backgroundColor: color ? color : theme.colors.main }]} onPress={onPress}>
        <Text style={ss.label}>{label}</Text>
    </TouchableOpacity>
}

const ss = StyleSheet.create({
    bg: {
        width: '100%',
        padding: 19,
        alignItems: 'center',
        justifyContent: 'center'
    },
    label: {
        fontFamily: theme.fonts.primary_500,
        fontSize: RFValue(15),
        color: theme.colors.shape
    }
})