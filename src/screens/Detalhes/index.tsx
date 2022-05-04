import React from "react";
import BackButton from "../../components/BackButton";
import Carrossel from "../../components/Carrossel";
import PerksCarro from "../../components/PerksCarro";
import GasolineSvg from '../../assets/gasoline.svg';
import { Aluguel, BG, Content, Footer, Header, Marca, Nome, Periodo, PerksContainer, Preco, Sobre, Titulo, Veiculo } from "./styles";
import Button from "../../components/Button";

export default function Detalhes() {
    const fotos = ['https://gartic.com.br/imgs/mural/di/dinozoatv21/desnecessauro.png']

    return <BG>
        <Header>
            <BackButton />
        </Header>
        <Carrossel imagens={fotos} />
        <Content>
            <Titulo>
                <Veiculo>
                    <Marca>Internet</Marca>
                    <Nome>Desnecessauro</Nome>
                </Veiculo>
                <Aluguel>
                    <Periodo>ao dia</Periodo>
                    <Preco>R$ 500</Preco>
                </Aluguel>
            </Titulo>

            <PerksContainer>
                <PerksCarro name='Gasolina' icon={GasolineSvg} />
                <PerksCarro name='Gasolina' icon={GasolineSvg} />
                <PerksCarro name='Gasolina' icon={GasolineSvg} />
                <PerksCarro name='Gasolina' icon={GasolineSvg} />
                <PerksCarro name='Gasolina' icon={GasolineSvg} />
                <PerksCarro name='Gasolina' icon={GasolineSvg} />
            </PerksContainer>

            <Sobre>texto texto para teste testando teste aqui é apenas teste muito teste
                mesmo teste e teste para ocupar espaço multiline teste teste eia pegaty teste
                caraca muito teste mesmo</Sobre>
        </Content>
        <Footer>
            <Button label='Confirmar' onPress={() => { }} />
        </Footer>
    </BG>
}