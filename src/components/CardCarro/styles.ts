import { FlatList } from "react-native";
import FastImage from "react-native-fast-image";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.TouchableOpacity`
flex-direction: row;
width: 100%;
height: 130px;
background-color: ${({ theme }) => theme.colors.bg_secondary};
justify-content: space-between;
align-items: center;
padding: 24px;
margin-bottom: 10px;
`;
export const Info = styled.View``;
export const Marca = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;
export const Nome = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.title};
    font-size: ${RFValue(15)}px;
`;
export const Sobre = styled.View`
flex-direction: row;
align-items: center;
margin-top: 16px;
`;
export const Aluguel = styled.View`
margin-right: 20px
`;
export const Periodo = styled.Text`
    font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.text_detail};
    font-size: ${RFValue(10)}px;
    text-transform: uppercase;
`;
export const Preco = styled.Text`
font-family: ${({ theme }) => theme.fonts.secondary_500};
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(15)}px;
`;
export const Motor = styled.View``;
export const Foto = styled(FastImage)`
width: 167px;
height: 85px;
`;
