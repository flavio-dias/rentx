import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../styles/theme";

interface InputTextProps extends TextInputProps {
    icon: React.ComponentProps<typeof MaterialIcons>['name']
}

export default function InputText({ icon = 'info', secureTextEntry, ...rest }: InputTextProps) {
    const [isFocused, setIsFocused] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const onFocus = () => {
        setIsFocused(true);
    }

    const onBlur = () => {
        setIsFocused(false);
    }

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    }

    return <View style={ss.container} >
        <View style={[ss.iconContainer, isFocused ? ss.iconFocused : {}]}>
            <MaterialIcons name={icon} size={24} color={rest.value ? theme.colors.main : theme.colors.text_detail} />
        </View>

        <View style={ss.inputContainer}>
            <TextInput
                {...rest}
                secureTextEntry={secureTextEntry ? !isVisible : false}
                selectionColor={theme.colors.text}
                placeholderTextColor={theme.colors.text_detail}
                style={[ss.input, isFocused ? ss.inputFocused : {}]}
                onFocus={onFocus}
                onBlur={onBlur}
            />
        </View>

        {secureTextEntry &&
            <View style={[ss.iconContainer, isFocused ? ss.iconFocused : {}]} >
                <TouchableOpacity onPress={toggleVisibility} >
                    <MaterialIcons name={isVisible ? 'visibility-off' : 'visibility'} size={24} color={theme.colors.text_detail} />
                </TouchableOpacity>
            </View>
        }
    </View>
}

const ss = StyleSheet.create({
    iconContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.bg_secondary,
        padding: 16,
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
    },
    iconFocused: {
        borderBottomWidth: 2,
        borderBottomColor: theme.colors.main
    },
    inputContainer: {
        flex: 1,
        marginLeft: 3,
        backgroundColor: theme.colors.bg_secondary
    },
    input: {
        flex: 1,
        paddingHorizontal: 20,
        fontFamily: theme.fonts.primary_400,
        color: theme.colors.text,
        borderBottomColor: 'transparent',
        borderBottomWidth: 2,
    },
    inputFocused: {
        borderBottomColor: theme.colors.main,
        borderBottomWidth: 2,
        paddingHorizontal: 20,
    },
    container: {
        width: '100%',
        flexDirection: 'row',
        marginVertical: 5
    }
})