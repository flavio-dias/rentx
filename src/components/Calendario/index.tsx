import React from "react";
import { Calendar, LocaleConfig, DateCallbackHandler } from "react-native-calendars";
import { BG } from "./styles";
import { MaterialIcons } from '@expo/vector-icons';
import theme from "../../styles/theme";

LocaleConfig.locales['pt-br'] = {
    monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
    monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
    dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
    today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br';

export interface DiaCalendarioProps {
    dateString: string,
    day: number,
    month: number,
    year: number,
    timestamp: number
}

export interface DatasSelecionadasProps {
    [date: string]: {
        color: string,
        textColor: string,
        disabled?: boolean,
        disableTouchEvent?: boolean
    }
}

interface CalendarioProps {
    datasSelecionadas: DatasSelecionadasProps,
    onPressData: DateCallbackHandler
}

export default function Calendario({ datasSelecionadas, onPressData }: CalendarioProps) {

    return <BG>
        <Calendar
            renderArrow={(direction) =>
                <MaterialIcons
                    size={24}
                    name={direction === 'left' ? 'chevron-left' : 'chevron-right'}
                    color={theme.colors.text}
                />
            }
            headerStyle={{
                borderBottomWidth: 1,
                borderBottomColor: theme.colors.text_detail,
                paddingBottom: 10,
                marginBottom: 10
            }}
            theme={{
                textDayFontFamily: theme.fonts.primary_400,
                textDayHeaderFontFamily: theme.fonts.primary_500,
                textDayHeaderFontSize: 10,
                textMonthFontSize: 20,
                monthTextColor: theme.colors.title,
                arrowStyle: {
                    marginHorizontal: -15
                }
            }}
            firstDay={1}
            minDate={new Date().toDateString()}
            markingType='period'
            markedDates={datasSelecionadas}
            onDayPress={onPressData}
        />
    </BG>
}