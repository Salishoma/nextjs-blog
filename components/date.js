import { parseISO, format } from 'date-fns';

export default function Date(props) {
    const dateString = props.dateString;
    console.log("dateString in data", dateString)
    // if (!dateString) {
    //     dateString = '2020-01-01';
    // }
    console.log("dateString after if", dateString)
    const date = parseISO(dateString);
    console.log("date parseISO", date);
    return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>;
}