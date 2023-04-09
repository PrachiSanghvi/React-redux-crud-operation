import * as Yup from 'yup'
import { parse, isDate } from "date-fns";

const today = new Date();
function parseDateString(value, originalValue) {
  const parsedDate = isDate(originalValue)
    ? originalValue
    : parse(originalValue, "yyyy-MM-dd", new Date());

  return parsedDate;
}

export const empFormSchema = Yup.object({
  firstName: Yup.string().min(3).max(25).required(),
  lastName: Yup.string().min(3).max(25).required(),
  salary: Yup.number().required(),
  dob: Yup.date().transform(parseDateString).max(today).required(),
})

export const departmentFormSchema = Yup.object({
  departmentName: Yup.string().min(3).max(25).required(),
  departmentDetail: Yup.string().min(3).max(25).required(),
})