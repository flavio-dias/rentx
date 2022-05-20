import React from "react";
import { FlatList } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.View`
flex:1;
background-color: ${({ theme }) => theme.colors.bg_primary};
`;
export const Header = styled.View`
width: 100%;
height: 325px;
background-color: ${({ theme }) => theme.colors.header};
justify-content: space-around;
padding: 25px;
`;
export const Titulo = styled.Text`
color: ${({ theme }) => theme.colors.shape};
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(30)}px;
`;
export const Lista = styled(FlatList)`` as React.ComponentType as new <AluguelProps>() => FlatList<AluguelProps>;
export const CardContainer = styled.View`
width: 100%;
margin-bottom: 10px;
`;
export const CardFooter = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
background-color: ${({ theme }) => theme.colors.bg_secondary};
margin-top: -5px;
padding: 10px 20px;

`;
export const CardFooterText = styled.Text`
color: ${({ theme }) => theme.colors.text_detail};
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(10)}px;
`;
export const CardFooterPeriodoContainer = styled.View`
flex-direction: row;
`;
export const CardFooterData = styled.Text`
color: ${({ theme }) => theme.colors.header};
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(12)}px;`;
