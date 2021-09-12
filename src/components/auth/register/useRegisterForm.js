import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUserAsync } from '../../../store/auth/register/register.actions'
import { useHistory } from 'react-router-dom'
import { useFormik } from 'formik'
import * as yup from 'yup'

const validationSchema = yup.object({
  email: yup
    .string('Enter your email')
    .email('Enter a valid email')
    .required('Email is required'),
  name: yup
    .string('Enter your name')
    .min(3, 'Name should be of minimum 8 characters length')
    .required('Name is required'),
  password: yup
    .string('Enter your password')
    .min(5, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

export const useRegisterForm = () => {
  const dispatch = useDispatch()
  const router = useHistory()
  const { loader, error, success } = useSelector(({ register }) => register)

  const form = useFormik({
    validationSchema,
    initialValues: {
      name: '',
      email: '',
      password: ''
    },
    onSubmit: values => {
      !loader && dispatch(addUserAsync(values))
    },
  })

  useEffect(() => {
    if (success) {
      setTimeout(() => {
        // go to login page
        router.push('/')
      }, 2000)
    }
  }, [success])

  return {
    loader,
    error,
    success,
    form
  }
}