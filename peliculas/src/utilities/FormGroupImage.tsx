import { ChangeEvent, useState } from "react";
import { useFormikContext } from "formik";

export default function FormGroupImage(props: IFormGroupImageProps) {
  const divStyle = { marginTop: "10px" };
  const imageStyle = { width: "450px" };
  const [imageBase64, setImageBase64] = useState("");
  const [imageEdit, setImageEdit] = useState(
    props.imageUri !== "" ? props.imageUri : ""
  );
  const { values } = useFormikContext<any>();

  function onChangeHandle(e: ChangeEvent<HTMLInputElement>): void {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      to64Base(file)
        .then((encodedFile: string) => setImageBase64(encodedFile))
        .catch((error) => console.log(error));

      values[props.field] = file;
      setImageEdit("");
    }
  }

  const to64Base = (file: File): Promise<string> => {
    return new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        const encondedFile = reader.result;
        if (encondedFile) {
          const eoncodedFileAsBase64 = encondedFile.toString();
          resolve(eoncodedFileAsBase64);
        } else {
          reject(new Error("Could not read file"));
        }
      };
      reader.onerror = (error) => reject(error);
    });
  };

  return (
    <div className='form-group'>
      <label>{props.label}</label>
      <div>
        <input
          type='file'
          accept='.jpg, .jpeg, .png, '
          onChange={onChangeHandle}
        />
      </div>
      {imageBase64 ? (
        <div>
          <div style={divStyle}>
            <img style={imageStyle} src={imageBase64} alt='' />
          </div>
        </div>
      ) : null}
      {imageEdit ? (
        <div>
          <div style={divStyle}>
            <img style={imageStyle} src={imageEdit} alt='' />
          </div>
        </div>
      ) : null}
    </div>
  );
}

export interface IFormGroupImageProps {
  field: string;
  label: string;
  imageUri?: string;
}
