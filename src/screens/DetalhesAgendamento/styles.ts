import { getBottomSpace, getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const BG = styled.View`
flex:1;
background-color: ${({ theme }) => theme.colors.bg_primary};
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
padding-bottom: 20px;
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
export const PerksContainer = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
flex-wrap: wrap;
`;
export const Footer = styled.View`
padding: 16px 16px ${getBottomSpace() + 16}px;
background-color: ${({ theme }) => theme.colors.bg_primary};
`;
export const PeriodoContainer = styled.View`
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-top: 25px;
align-items: center;
border-bottom-color: ${({ theme }) => theme.colors.shape};
border-bottom-width: 1px;
padding-bottom: 20px;
`;
export const IconeCalendario = styled.View`
background-color: ${({ theme }) => theme.colors.main};
width: 50px;
height: 50px;
justify-content: center;
align-items: center;
margin-right: 10px;
`;
export const DataContainer = styled.View`

`;
export const DataLabel = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text_detail};
`;
export const Data = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.title};
`;
export const TotalContainer = styled.View`
margin-top: 16px;
width: 100%;
`;
export const TotalLabel = styled.Text`
font-size: ${RFValue(10)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.text_detail};
text-transform: uppercase;
`;
export const DetalhesTotal = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;
align-items: center;
`;
export const TotalDiaria = styled.Text`
font-size: ${RFValue(15)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.title};
`;
export const SubTotal = styled.Text`
font-size: ${RFValue(24)}px;
font-family: ${({ theme }) => theme.fonts.secondary_500};
color: ${({ theme }) => theme.colors.success};
`;