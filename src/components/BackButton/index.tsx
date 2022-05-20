import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from "styled-components";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface BackButtonProps {
    color?: string;
}

export default function BackButton({ color }: BackButtonProps) {
    const theme = useTheme();
    const navigation = useNavigation();

    const handlePress = () => {
        if (navigation.canGoBack) {
            navigation.goBack();
        }
    }

    return <View>
        <TouchableOpacity onPress={handlePress}>
            <MaterialIcons name='chevron-left' size={25} color={color ? color : theme.colors.text} />
        </TouchableOpacity>
    </View>
}