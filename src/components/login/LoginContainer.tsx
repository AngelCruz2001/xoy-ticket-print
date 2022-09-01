import React, { useState } from 'react'
import './LoginContainer.scss'
import logo from '../../assets/xoyTicketWhite.png'
import logoWColor from '../../assets/xoyTicketColorFont.png'
import { useAppDispatch } from '../../hooks/hooks';
import { startLogin } from '../../store/auth';
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { RegisterContainer } from './RegisterContainer';
export const LoginContainer = () => {


    const [isRegistered, setIsRegistered] = useState<boolean>(false);



    const dispatch = useAppDispatch();
    return (
        <div className="loginContainer">

            <div className="loginContainer__card">

                {
                    !isRegistered ?
                        (
                            <div className="loginContainer__card__leftside">

                                <div className="loginContainer__card__leftside__logo">
                                    <img src={logoWColor}  alt="logo" />
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
                                    }}
                                    validationSchema={Yup.object().shape({
                                        email: Yup.string()
                                            .email('Email no válido')
                                            .required('El email es obligatorio'),
                                        password: Yup.string()
                                            .required('La contraseña es obligatoria'),

                                    })}
                                    onSubmit={(values, { setSubmitting }) => {

                                        dispatch(startLogin({
                                            correo: values.email,
                                            contrasena: values.password
                                        }));
                                    }}
                                >

                                    {({ errors, touched }) => (
                                        <Form>
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
                                                setIsRegistered(true)
                                            }} className="loginContainer__card__leftside__register">¿Todavía no tienes cuenta?</p>

                                            <button type="submit" className="loginContainer__card__leftside__button">
                                                Iniciar sesión
                                            </button>
                                        </Form>

                                    )}
                                </Formik>


                            </div>
                        )
                        :
                        <RegisterContainer setIsRegistered={setIsRegistered} />

                }


                <div className="loginContainer__card__rightside">
                    <img src={logo} alt="" />
                </div>

            </div>
        </div>
    )
}



