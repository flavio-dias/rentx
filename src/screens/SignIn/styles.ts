import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.View`
padding: 0 24px;
background-color: ${({ theme }) => theme.colors.bg_primary};
`;

export const Header = styled.View`
width: 100%;
margin-top: ${getStatusBarHeight() + 116}px;

`;
export const Titulo = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(40)}px;
`;
export const SubTitulo = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-family: ${({ theme }) => theme.fonts.primary_400};
font-size: ${RFValue(15)}px;
margin-top: 16px;
`;
export const Footer = styled.View`

`;
export const Form = styled.View`
width: 100%;
padding: 64px 0;
`;


