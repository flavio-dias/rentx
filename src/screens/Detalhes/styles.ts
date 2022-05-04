import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.View`
flex:1
`;
export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-top: ${getStatusBarHeight() + 10}px;
    padding-left: 16px;
`;
export const Content = styled.ScrollView.attrs({
    contentContainerStyle: {
        padding: 24,
        alignItems: 'center'
    },
    showVerticalScrollIndicator: false
})`

`;
export const Veiculo = styled.View`

`;
export const Marca = styled.Text`
text-transform: uppercase;
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text_detail};

`;
export const Nome = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.title};
`;
export const Titulo = styled.View`
flex-direction: row;
width: 100%;
justify-content: space-between;
`;
export const Aluguel = styled.View`

`;
export const Periodo = styled.Text`
text-transform: uppercase;
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text_detail};
`;
export const Preco = styled.Text`
font-size: ${RFValue(20)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.main};
`;
export const Sobre = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.primary_400};
color: ${({ theme }) => theme.colors.text};
text-align: justify;
`;
export const PerksContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`;
export const Footer = styled.View`
padding: 16px 16px ${getBottomSpace() + 16}px;
background-color: ${({ theme }) => theme.colors.bg_secondary};
`;