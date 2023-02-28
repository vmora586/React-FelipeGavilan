import { Form, Formik, FormikHelpers } from "formik";
import { IMovieCreationDto } from "../models/movie.model";
import * as Yup from "yup";
import FormGroupText from "../utilities/FormGroupText";
import FormGroupCheckBox from "../utilities/FormGroupCheckBox";
import FormGroupDate from "../utilities/FormGroupDate";
import FormGroupImage from "../utilities/FormGroupImage";
import Button from "../utilities/Button";
import { useNavigate } from "react-router-dom";
import MultipleSelector, {
  IMultipleSelectorModel,
} from "../utilities/MultipleSelector";
import { IGendreDto } from "../models/gendres.model";
import { useState } from "react";

export default function MoviesForm(props: IMoviesFormProps) {
  const [selectedGendres, setSelectedGendres] = useState(
    mapGendres(props.selectedGendres)
  ); //we need to map the elements sent from the parent component
  const [unSelectedGendres, setUnSelectedGendres] = useState(
    mapGendres(props.unSelectedGendres)
  ); //we need to map the elements sent from the parent component

  function mapGendres(
    gendresArray: {
      id: number;
      name: string;
    }[]
  ): IMultipleSelectorModel[] {
    return gendresArray.map((item) => {
      return { key: item.id, value: item.name };
    });
  }

  const navigate = useNavigate();
  return (
    <Formik
      initialValues={props.model}
      onSubmit={(values, actions) => {
        values.gendreIds = selectedGendres.map((item) => item.key);
        props.onSubmit(values, actions);
      }}
      validationSchema={Yup.object({
        title: Yup.string()
          .required("This field is required")
          .firstLetterUpperCase(),
      })}>
      {(formikProps) => (
        <Form>
          <FormGroupText name='title' label='Title' />
          <FormGroupCheckBox label='On theaters' field='onTheaters' />
          <FormGroupText name='Trailer' label='Trailer' />
          <FormGroupDate name='releaseDate' label='Release date' />
          <FormGroupImage
            field='poster'
            label='Poster'
            imageUri={props.model.posterUrl}
          />

          <div className='form-group'>
            <label>Gendres</label>
            <MultipleSelector
              selectedItems={selectedGendres}
              unSelectedItems={unSelectedGendres}
              onChange={(selectedItems, unSelectedItems) => {
                setSelectedGendres(selectedItems);
                setUnSelectedGendres(unSelectedItems);
              }}
            />
          </div>
          <Button disabled={formikProps.isSubmitting} type='submit'>
            Submit
          </Button>
          <Button
            onClick={() => navigate("/gendres")}
            className='btn btn-secondary'>
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export interface IMoviesFormProps {
  model: IMovieCreationDto;
  onSubmit(
    values: IMovieCreationDto,
    actions: FormikHelpers<IMovieCreationDto>
  ): void;
  selectedGendres: IGendreDto[];
  unSelectedGendres: IGendreDto[];
}
