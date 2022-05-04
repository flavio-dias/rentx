import React, { useState } from "react";
import { StatusBar } from "react-native";
import { BG, Header, Totalizador, Lista } from "./styles";
import Logo from '../../assets/logo.svg';
import { RFValue } from "react-native-responsive-fontsize";
import CardCarro from "../../components/CardCarro";

export default function Home() {
    const [carro] = useState({
        brand: 'audi',
        name: 'RS 5',
        rent: {
            period: 'ao dia',
            price: 120
        },
        thumbnail: 'https://gartic.com.br/imgs/mural/di/dinozoatv21/desnecessauro.png'
    })

    return <BG>
        <StatusBar barStyle='light-content'
            translucent
            backgroundColor='transparent'
        />
        <Header>
            <Logo width={RFValue(108)} height={RFValue(12)} />
            <Totalizador>Total de 0 carros</Totalizador>
        </Header>

        <Lista
            data={[1, 2, 3]}
            keyExtractor={item => String(item)}
            renderItem={({ item }) => <CardCarro data={carro} />}
        />
    </BG>
}