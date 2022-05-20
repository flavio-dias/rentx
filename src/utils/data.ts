import { addDays, eachDayOfInterval, format, parseISO } from "date-fns"
import { Platform } from "react-native"
import { DatasSelecionadasProps, DiaCalendarioProps } from "../components/Calendario";
import theme from "../styles/theme";


export const getPlatformDate = (data: Date) => {
    if (Platform.OS === 'ios') {
        return addDays(data, 1);
    } else return data;
}

export const geraIntervaloEntreDatas = (dataIni: DiaCalendarioProps, dataFim: DiaCalendarioProps) => {
    let intervalo: DatasSelecionadasProps = {};

    eachDayOfInterval({ start: parseISO(dataIni.dateString), end: parseISO(dataFim.dateString) })
        .forEach((item) => {
            const data = format(getPlatformDate(item), 'yyyy-MM-dd');

            intervalo = {
                ...intervalo,
                [data]: {
                    color: dataIni.dateString === data || dataFim.dateString === data ? theme.colors.main : theme.colors.main_light,
                    textColor: dataIni.dateString === data || dataFim.dateString === data ? theme.colors.main_light : theme.colors.main,
                }
            }
        })
    return intervalo;
}