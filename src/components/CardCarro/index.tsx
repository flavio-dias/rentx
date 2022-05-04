import React from "react";
import { Aluguel, BG, Foto, Info, Marca, Motor, Nome, Periodo, Preco, Sobre } from "./styles";
import GasolineSvg from '../../assets/gasoline.svg';

interface CarroProps {
    brand: string,
    name: string,
    rent: {
        period: string,
        price: number
    }
    thumbnail: string
}

interface CardCarroProps {
    data: CarroProps
}

export default function CardCarro({ data }: CardCarroProps) {

    return <BG>
        <Info>
            <Marca>{data.brand}</Marca>
            <Nome>{data.name}</Nome>

            <Sobre>
                <Aluguel>
                    <Periodo>{data.rent.period}</Periodo>
                    <Preco>R$ {data.rent.price}</Preco>
                </Aluguel>
                <Motor>
                    <GasolineSvg />
                </Motor>
            </Sobre>
        </Info>

        <Foto source={{ uri: data.thumbnail }} resizeMode="contain" />
    </BG>
}