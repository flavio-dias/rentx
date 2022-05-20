import React, { useRef, useState } from "react";
import { FlatList, ViewToken } from "react-native";
import { BG, Foto, FotoWrap, Index, IndexContainer } from "./styles";

interface CarrosselProps {
    imagens: {
        id: string,
        photo: string
    }[]
}

interface TrocaImagensCarrosselProps {
    viewableItems: ViewToken[],
    changed: ViewToken[]
}

export default function Carrossel({ imagens }: CarrosselProps) {
    const [indexFotoAtiva, setIndexFotoAtiva] = useState(0);

    const trocouImagemCarrossel = useRef((info: TrocaImagensCarrosselProps) => {
        let index = info.viewableItems[0].index;
        setIndexFotoAtiva(index);
    });

    return <BG>
        <IndexContainer>
            {
                imagens.map((item, index) => {
                    return <Index active={index === indexFotoAtiva} key={item.id} />
                })
            }
        </IndexContainer>

        <FlatList
            data={imagens}
            keyExtractor={item => String(item.id)}
            renderItem={({ item }) => <FotoWrap><Foto source={{ uri: item.photo }} resizeMode="contain" /></FotoWrap>}
            horizontal
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={trocouImagemCarrossel.current}
        />
    </BG>
}