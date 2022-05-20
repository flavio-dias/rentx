import React from "react";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.View`
flex:1;
background-color: ${({ theme }) => theme.colors.bg_primary};
`;

export const Totalizador = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};
    color: ${({ theme }) => theme.colors.text}
`;

export const Header = styled.View`
width: 100%;
height: 120px;
background-color: ${({ theme }) => theme.colors.header};
flex-direction: row;
justify-content: space-between;
align-items: flex-end;
padding: 0px 20px 20px 20px;
`;
export const Lista = styled(FlatList)`` as React.ComponentType as new <Car>() => FlatList<Car>;

export const FAB = styled.TouchableOpacity`
    position: absolute;
    right: 16px;
    bottom: 16px;
    width: 60px;
    height: 60px;
    background-color: ${({ theme }) => theme.colors.main};
    border-radius: 30px;
    justify-content: center;
    align-items: center;
`;