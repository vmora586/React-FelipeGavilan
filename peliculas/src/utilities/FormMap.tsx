import { useFormikContext } from 'formik';
import { coordinateDto } from '../models/coordinate.model';
import Map from '../utilities/Map';



export default function FormMap(props: formMapProps) {

    const { values } = useFormikContext<any>();

    function updateFields(coordinates: coordinateDto) {
        values[props.latitudeField] = coordinates.lat;
        values[props.longitudeField] = coordinates.long;
    }

    return (
        <Map coordinates={props.coordinates} onHandleMapClick={updateFields} height='500px' />
    )
}


export interface formMapProps {
    latitudeField: string;
    longitudeField: string;
    coordinates: coordinateDto[];
}