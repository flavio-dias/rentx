import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.View`
height: 100%;
flex:1;
`;
export const Header = styled.View`
    padding-top: ${getStatusBarHeight() + 20}px;
    padding-right: 16px;
    padding-left: 16px;
    flex-direction: row;
    justify-content: space-between;
`;
export const Form = styled.View`
    width: 100%;
    padding-top: 60px;
    padding-bottom: 10px;
`;
export const Content = styled.View`
    padding: 0 16px;
    justify-content: space-between;
    flex:1;
`;
export const Footer = styled.View`
width: 100%;
padding: 10px 0px;
`;
export const Steps = styled.View`
flex-direction: row;
align-items: center;
justify-content: center;
`;
export const Titulo = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(40)}px;
`;
export const ContentText = styled.Text`
color: ${({ theme }) => theme.colors.title};
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(20)}px;
padding-bottom: 10px;
`;
export const Subtitulo = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-family: ${({ theme }) => theme.fonts.primary_400};
font-size: ${RFValue(15)}px;
`;