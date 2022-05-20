import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import { useTheme } from "styled-components";

export default function LoadingContent() {
    const theme = useTheme();

    return <View style={ss.bg}>
        <ActivityIndicator size='large' color={theme.colors.main} />
    </View>
}

const ss = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center'
    }
})