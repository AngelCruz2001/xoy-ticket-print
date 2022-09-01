import React, { } from 'react'
import * as Yup from 'yup';
import { useAppDispatch } from '../../hooks/hooks';
import logoWColor from '../../assets/xoyTicketColorFont.png'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { startSignUp } from '../../store/auth/thunks'
type RegisterContainerProps = {
    setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

export const RegisterContainer = ({ setIsRegistered }: RegisterContainerProps) => {




    const dispatch = useAppDispatch();
    return (
        <div className="loginContainer__card__leftside">
            <div className="loginContainer__card__leftside__logo">
                <img src={logoWColor} alt="logo" />
            </div>
            <h2
                className="loginContainer__card__leftside__title"
            >
                Descarga tus boletos
            </h2>

            <p className="loginContainer__card__leftside__subtitle">
                Descarga tus boletos en formato PDF facilmente.
            </p>

            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    name: '',
                    folio: '',
                }}
                validationSchema={Yup.object().shape({
                    name: Yup.string()
                        .required('El nombre es obligatorio')
                        .matches(/^[a-zA-Z\u00C0-\u017F\s]+$/, 'Ingrese un nombre valido'),

                    folio: Yup.number()
                        .required('El folio es obligatorio')
                        .min(1, 'El folio debe ser mayor a 0')
                        .positive('El folio debe ser mayor a 0'),

                    email: Yup.string()
                        .email('Email no válido')
                        .required('El email es obligatorio'),
                    password: Yup.string()
                        .required('La contraseña es obligatoria'),


                })}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(startSignUp({
                        correo: values.email,
                        contrasena: values.password,
                        nombre: values.name,
                        folio: values.folio.toString(),
                    }))
                }}
            >

                {({ errors, touched }) => (
                    <Form>
                        <div className='field'>
                            <Field
                                name="name"
                                placeholder='Introduce tu nombre'
                                className="input"
                            />
                            <ErrorMessage name="name" component="span"
                                className="error"
                            />
                        </div>
                        <div className='field'>
                            <Field
                                name="folio"
                                placeholder='Introduce tu folio'
                                className="input"
                                type="number"
                            />
                            <ErrorMessage name="folio" component="span"
                                className="error"
                            />
                        </div>
                        <div className='field'>
                            <Field
                                name="email"
                                placeholder='Introduce tu correo electronico'
                                className="input"
                            />
                            <ErrorMessage name="email" component="span"
                                className="error"
                            />
                        </div>
                        <div className='field'>

                            <Field
                                type="password"
                                name="password"
                                placeholder='Introduce tu contraseña'
                                className="input"
                            />
                            <ErrorMessage name="password" component="span"
                                className="error" />
                        </div>

                        <p onClick={() => {
                            setIsRegistered(false)
                        }} className="loginContainer__card__leftside__register">¿Ya tienes una cuenta?</p>

                        <button type="submit" className="loginContainer__card__leftside__button">
                            Registrarse
                        </button>
                    </Form>

                )}
            </Formik>


        </div>
    )
}
