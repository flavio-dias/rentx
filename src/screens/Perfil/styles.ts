import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled, { css } from "styled-components/native";

interface TabProps {
    active: boolean;
}

export const BG = styled.KeyboardAvoidingView`
background-color: ${({ theme }) => theme.colors.bg_primary};
flex:1;
`;
export const Header = styled.View`
width: 100%;
align-items: center;
background-color: ${({ theme }) => theme.colors.header};
padding: 0 16px;
padding-top: ${getStatusBarHeight() + 15}px;
padding-bottom: 20px;
`;
export const HeaderTop = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
padding-bottom: 20px;
`;
export const HeaderContent = styled.View`
background-color: ${({ theme }) => theme.colors.shape};
border-radius: 90px;
height: 170px;
width: 170px;
`;
export const Foto = styled.Image`
border-radius: 90px;
height: 170px;
width: 170px;
`;
export const IconButton = styled.TouchableOpacity`

`;
export const IconButtonFoto = styled.TouchableOpacity`
position: absolute;
bottom:0px;
right: 0;
padding: 10px;
background-color: ${({ theme }) => theme.colors.main};
border-radius: 10px;
`;
export const TituloHeader = styled.Text`
color: ${({ theme }) => theme.colors.bg_primary};
font-size: ${RFValue(25)}px;
font-family: ${({ theme }) => theme.fonts.secondary_600};
`;
export const Content = styled.View`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.bg_primary};
`;

export const ContentTabs = styled.View`
    background-color: ${({ theme }) => theme.colors.bg_primary};
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom-color: ${({ theme }) => theme.colors.line};
    border-bottom-width: 1px;
    padding: 0 16px;
`;

export const Tab = styled.TouchableOpacity<TabProps>`

    ${({ theme, active }) => active && css({
    borderBottomColor: theme.colors.main,
    borderBottomWidth: 2
})}
`;
export const TabText = styled.Text<TabProps>`
    color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.text_detail};
    padding: 10px;
    font-size: ${RFValue(20)}px;
`;
export const Section = styled.View`
background-color: ${({ theme }) => theme.colors.bg_primary};
width: 100%;
padding: 15px 16px;
`;
export const Footer = styled.View`
background-color: ${({ theme }) => theme.colors.bg_primary};
width: 100%;
padding: 10px 16px;
`;