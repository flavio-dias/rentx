import styled from "styled-components/native";

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
width: 100%;
height: 132px;
justify-content: center;
align-items: center;
`;
export const Foto = styled.Image`
width: 280px;
height: 132px;
`;