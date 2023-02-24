import { Form, Formik, FormikHelpers } from "formik";
import { IMovieCreationDto } from "../models/movie.model";
import * as Yup from 'yup';
import FormGroupText from "../utilities/FormGroupText";
import FormGroupCheckBox from "../utilities/FormGroupCheckBox";
import FormGroupDate from "../utilities/FormGroupDate";
import FormGroupImage from "../utilities/FormGroupImage";
import Button from "../utilities/Button";
import { useNavigate } from "react-router-dom";

export default function MoviesForm(props: IMoviesFormProps) {
    const navigate = useNavigate();
    return (
        <Formik
            initialValues={props.model}
            onSubmit={props.onSubmit}
            validationSchema={Yup.object({
                title: Yup.string().required('This field is required').firstLetterUpperCase()
            })}
        >
            {formikProps => (
                <Form>
                    <FormGroupText name="title" label="Title" />
                    <FormGroupCheckBox label="On theaters" field="onTheaters" />
                    <FormGroupText name="Trailer" label="Trailer" />
                    <FormGroupDate name="releaseDate" label="Release date" />
                    <FormGroupImage field="poster" label="Poster" imageUri={props.model.posterUrl} />

                    <Button disabled={formikProps.isSubmitting} type="submit">Submit</Button>
                    <Button
                        onClick={() => navigate("/gendres")}
                        className='btn btn-secondary'>
                        Cancel
                    </Button>
                </Form>
            )}
        </Formik>
    )
}

export interface IMoviesFormProps {
    model: IMovieCreationDto;
    onSubmit(values: IMovieCreationDto, actions: FormikHelpers<IMovieCreationDto>): void;
}