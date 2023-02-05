import * as Yup from "yup";

export default function CustomValidations() {
  Yup.addMethod(Yup.string, "firstLetterUpperCase", function () {
    return this.test(
      "firts-letter-upperCase",
      "The first letter must be in upper case",
      function (value) {
        if (value && value.length > 0) {
          const firstLetter = value.substring(0, 1);
          return firstLetter === firstLetter.toLocaleUpperCase();
        }

        return true;
      }
    );
  });
}
