import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import FastImage from "react-native-fast-image";

interface IndexProps {
    active: boolean;
}

export const BG = styled.View`
width: 100%
`;
export const IndexContainer = styled.View`
flex-direction: row;
align-self: flex-end;
padding-right: 16px;
margin-bottom: -10px;
`;
export const Index = styled.View<IndexProps>`
width: 6px;
height: 6px;
background-color: ${({ theme, active }) => active ? theme.colors.title : theme.colors.shape};
border-radius: 3px;
margin-right: 5px;
`;
export const FotoWrap = styled.View`
justify-content: center;
width: ${Dimensions.get('screen').width}px;
align-items: center;
`;
export const Foto = styled(FastImage)`
width: 280px;
height: 132px;
`;