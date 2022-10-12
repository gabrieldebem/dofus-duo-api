import React, {useState} from 'react';
// @ts-ignore
import logo from "../../../../public/images/logo.png";
import PrimaryButton from "../../Components/PrimaryButton";
import InputLabel from "../../Components/InputLabel";
import TextInput from "../../Components/TextInput";
import {RegisterData} from "../../ApiClient/Types";
import {registration} from "../../ApiClient/Client";

export default function Register() {
    const [register, setRegister] = useState<RegisterData>({
        name: '',
        email: '',
        password: '',
    })
    const inputClasses = 'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm sm:text-sm';

    const handleRegister = () => {
        registration(register).then((response) => {
            console.log(response);
        });
    }

    return (
        <>
            <div className="flex min-h-full flex-col justify-center py-12 sm:px-6 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <img
                        className="mx-auto h-12 w-auto"
                        src={logo}
                    />
                    <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Registre sua nova conta</h2>
                    <p className="mt-2 text-center text-sm text-gray-600">
                        Ou{' '}
                        <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                            acesse sua conta
                        </a>
                    </p>
                </div>

                <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                    <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                        <form className="space-y-6" action="#" method="POST">
                            <div>
                                <InputLabel
                                    forInput={'name'}
                                    children={'Nome'}
                                    className={'block text-sm font-medium text-gray-700'}
                                />
                                <div className="mt-1">
                                    <TextInput
                                        name={'name'}
                                        type={'text'}
                                        className={inputClasses}
                                        autoComplete={'name'}
                                        value={register.name}
                                        handleChange={(e) => setRegister({...register, name: e.target.value})}
                                        required={true}
                                    />
                                </div>
                            </div>
                            <div>
                                <InputLabel forInput={'email'} children={'Email'} className={'block text-sm font-medium text-gray-700'} />
                                <div className="mt-1">
                                    <TextInput
                                        type={'email'}
                                        name={'email'}
                                        className={inputClasses}
                                        autoComplete={'email'}
                                        value={register.email}
                                        handleChange={(e) => setRegister({...register, email: e.target.value})}
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div>
                                <InputLabel forInput={'password'} className={'block text-sm font-medium text-gray-700'} children={'Senha'} />
                                <div className="mt-1">
                                    <TextInput
                                        name={'password'}
                                        type={'password'}
                                        className={inputClasses}
                                        autoComplete={'password'}
                                        value={register.password}
                                        handleChange={(e) => setRegister({...register, password: e.target.value})}
                                        required={true}
                                    />
                                </div>
                            </div>

                            <div className={'text-sm'}>
                                <PrimaryButton type={"submit"} className={'h-9'} onClick={() => handleRegister()}>
                                    Cadastrar
                                </PrimaryButton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

