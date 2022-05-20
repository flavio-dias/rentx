import React from "react";
import BackButton from "../../components/BackButton";
import theme from "../../styles/theme";
import { BG, Content, Data, DataContainer, Footer, Header, LabelData, PeriodoContainer, Titulo } from "./styles";
import ArrowSvg from '../../assets/arrow.svg';
import { StatusBar } from "react-native";
import Button from "../../components/Button";
import Calendario, { DatasSelecionadasProps, DiaCalendarioProps } from "../../components/Calendario";
import { useNavigation, useRoute } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { StackScreenListApp } from "../../routes/stack.routes";
import { useState } from "react";
import { geraIntervaloEntreDatas, getPlatformDate } from "../../utils/data";
import { format, parseISO } from "date-fns";
import { CarroDTO } from "../../dtos/CarroDTO";

interface PeriodoAluguel {
    inicio: number,
    inicioString: string,
    fim: number,
    fimString: string
}

interface RouteProps {
    carro: CarroDTO
}

export default function Agendamento() {
    const { carro } = useRoute().params as RouteProps;
    const { navigate } = useNavigation<StackNavigationProp<StackScreenListApp, 'Agendamento'>>();
    const [ultimaDataSelecionada, setUltimaDataSelecionada] = useState<DiaCalendarioProps>({} as DiaCalendarioProps);
    const [intervaloSelecionado, setIntervaloSelecionado] = useState<DatasSelecionadasProps>({} as DatasSelecionadasProps);
    const [periodoAluguel, setPeriodoAluguel] = useState<PeriodoAluguel>({} as PeriodoAluguel);

    const handleConfirmar = () => {
        navigate('DetalhesAgendamento', {
            carro,
            datas: Object.keys(intervaloSelecionado)
        });
    }

    const handlePressData = (data: DiaCalendarioProps) => {
        let dataInicial = !ultimaDataSelecionada.timestamp ? data : ultimaDataSelecionada;
        let dataFinal = data;

        if (dataInicial.timestamp > dataFinal.timestamp) {
            dataInicial = dataFinal;
            dataFinal = dataInicial;
        }

        setUltimaDataSelecionada(data);
        const intervalo = geraIntervaloEntreDatas(dataInicial, dataFinal);
        setIntervaloSelecionado(intervalo);

        setPeriodoAluguel({
            inicio: dataInicial.timestamp,
            fim: dataFinal.timestamp,
            inicioString: format(getPlatformDate(parseISO(dataInicial.dateString)), 'dd/MM/yyyy'),
            fimString: format(getPlatformDate(parseISO(dataFinal.dateString)), 'dd/MM/yyyy')
        })
    }

    return <BG>
        <StatusBar translucent backgroundColor='transparent' barStyle='light-content' />
        <Header>
            <BackButton color={theme.colors.bg_secondary} />
            <Titulo>
                Selecione um periodo de vigência para o aluguel do veículo.
            </Titulo>

            <PeriodoContainer>
                <DataContainer>
                    <LabelData>DE</LabelData>
                    <Data selected={!!periodoAluguel.inicioString} >{periodoAluguel.inicioString}</Data>
                </DataContainer>
                <ArrowSvg />
                <DataContainer>
                    <LabelData>ATÉ</LabelData>
                    <Data selected={!!periodoAluguel.fimString} >{periodoAluguel.fimString}</Data>
                </DataContainer>
            </PeriodoContainer>
        </Header>

        <Content>
            <Calendario datasSelecionadas={intervaloSelecionado} onPressData={handlePressData} />
        </Content>

        <Footer>
            <Button disabled={!periodoAluguel.inicioString} label='Confirmar Datas' onPress={handleConfirmar} />
        </Footer>
    </BG>
}