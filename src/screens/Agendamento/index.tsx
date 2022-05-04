import React from "react";
import BackButton from "../../components/BackButton";
import theme from "../../styles/theme";
import { BG, Data, DataContainer, Header, LabelData, PeriodoContainer, Titulo } from "./styles";
import ArrowSvg from '../../assets/arrow.svg';

export default function Agendamento() {

    return <BG>
        <Header>
            <BackButton color={theme.colors.bg_secondary} />
            <Titulo>
                Selecione um periodo de vigência para o aluguel do veículo.
            </Titulo>

            <PeriodoContainer>
                <DataContainer>
                    <LabelData>DE</LabelData>
                    <Data>00/00/0000</Data>
                </DataContainer>
                <ArrowSvg />
                <DataContainer>
                    <LabelData>ATÉ</LabelData>
                    <Data>00/00/0000</Data>
                </DataContainer>
            </PeriodoContainer>
        </Header>
    </BG>
}