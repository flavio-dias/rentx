import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.View`
flex:1;
background-color: ${({ theme }) => theme.colors.bg_secondary};
`;
export const Header = styled.View`
width: 100%;
height: 325px;
background-color: ${({ theme }) => theme.colors.header};
justify-content: center;
padding: 25px;
`;
export const Titulo = styled.Text`
color: ${({ theme }) => theme.colors.shape};
font-family: ${({ theme }) => theme.fonts.secondary_600};
font-size: ${RFValue(30)}px;
`;
export const PeriodoContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const DataContainer = styled.View`
width: 30%;
`;
export const LabelData = styled.Text`
color: ${({ theme }) => theme.colors.text};
font-family: ${({ theme }) => theme.fonts.primary_500};
font-size: ${RFValue(10)}px;
`;
export const Data = styled.Text`
color: ${({ theme }) => theme.colors.shape};
font-family: ${({ theme }) => theme.fonts.primary_500};
font-size: ${RFValue(15)}px;
`;