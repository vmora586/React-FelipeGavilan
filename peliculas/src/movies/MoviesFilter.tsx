import { Field, Form, Formik } from "formik";
import { IGendreDto } from "../models/gendres.model";
import Button from "../utilities/Button";

export default function MoviesFilter(props: moviesFilterFormProps) {
  const formInitialValue: moviesFilterFormProps = {
    title: "",
    gendreId: 0,
    comingSoon: false,
    onTheaters: false,
  };

  const gendres: IGendreDto[] = [
    { id: 1, name: "Action" } as IGendreDto,
    { id: 2, name: "Comedy" } as IGendreDto,
  ];

  return (
    <>
      <h3>Movies Filter</h3>
      <Formik
        initialValues={formInitialValue}
        onSubmit={(values) => console.log(values)}>
        {(formikProps) => (
          <Form>
            <div className='form-inline'>
              <div className='form-group mb-2'>
                <label htmlFor='title' className='sr-only'></label>
                <input
                  className='form-control'
                  id='title'
                  placeholder='Movie Title'
                  {...formikProps.getFieldProps("title")}></input>
              </div>
              <div className='form-group mx-sm-3 mb-2'>
                <select
                  className='form-control'
                  {...formikProps.getFieldProps("gendreId")}>
                  <option value='0'>--Select--</option>
                  {gendres.map((g) => (
                    <option key={g.id} value={g.id}>
                      {g.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className='form-group mx-sm-3 mb-2'>
                <Field
                  className='form-check-input'
                  id='comingSoon'
                  name='comingSoon'
                  type='checkbox'
                />
                <label className='form-check-label' htmlFor='comingSoon'>
                  Coming Soon
                </label>
              </div>
              <div className='form-group mx-sm-3 mb-2'>
                <Field
                  className='form-check-input'
                  id='onTheaters'
                  name='onTheathers'
                  type='checkbox'
                />
                <label className='form-check-label' htmlFor='onTheaters'>
                  On Theathers
                </label>
              </div>
              <Button
                onClick={() => formikProps.submitForm()}
                className='btn btn-primary mb-2 mx-sm-3'>
                Filter
              </Button>
              <Button
                onClick={() => formikProps.setValues(formInitialValue)}
                className='btn btn-danger mb-2'>
                Reset
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface moviesFilterFormProps {
  title?: string;
  gendreId?: number;
  comingSoon?: boolean;
  onTheaters?: boolean;
}
