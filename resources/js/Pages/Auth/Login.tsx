import React from "react";
import logo from "../../../../public/images/logo.png";
import dofuscommunity from "../../../../public/images/dofus-community.jpg";
import TextInput from "../../Components/TextInput";
import InputLabel from "../../Components/InputLabel";
import Checkbox from "../../Components/Checkbox";
import PrimaryButton from "../../Components/PrimaryButton";
import {SecondaryButton} from "../../Components/SecondaryButton";
import Link from "../../Components/Link";

export default function Example() {
    return (
        <>
            <div className="flex min-h-screen">
                <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
                    <Link href={'/'} className="mb-4 text-emerald-600" children={'Voltar'} />
                    <div className="mx-auto w-full max-w-sm lg:w-96">
                        <div>
                            <img
                                className="h-12 w-auto"
                                src={logo}
                                alt="Your Company"
                            />
                            <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">Acesse sua conta</h2>
                            <p className="mt-2 text-sm text-gray-600">
                                Ou{' '}
                                <a href="#" className="font-medium text-emerald-600 hover:text-emerald-500">
                                    comece seu período de teste gratuito
                                </a>
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="mt-6">
                                <form action="#" method="POST" className="space-y-6">
                                    <div>
                                        <InputLabel forInput={'email'} children={'Email'} className={'block text-sm font-medium text-gray-700'} />
                                        <TextInput
                                            type={'email'}
                                            name={'email'}
                                            className={'block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm mt-1'}
                                            autoComplete={'email'}
                                            required={true}
                                            placeholder={'Seu melhor email'}
                                        />
                                    </div>

                                    <div className="space-y-1">
                                        <InputLabel forInput={'password'} children={'Senha'} className={'block text-sm font-medium text-gray-700'} />
                                        <TextInput
                                            type={'password'}
                                            name={'password'}
                                            autoComplete={'current-password'}
                                            required={true}
                                            className={'mt-1 block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:outline-none sm:text-sm'}
                                            placeholder={'Sua senha'}
                                        />
                                    </div>

                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <Checkbox name={'remember-me'} />
                                            <InputLabel forInput={'remember-me'} className={'ml-2 block text-sm text-gray-900'} children={'Lembrar-me'} />
                                        </div>

                                        <div className="text-sm">
                                            <Link href={'#'} children={'Esqueceu sua senha?'} className={'font-medium text-emerald-600 hover:text-emerald-500'} />
                                        </div>
                                    </div>
                                    <PrimaryButton
                                        type={"submit"}
                                        children={'Acessar'}
                                        className={'h-5'}
                                    />
                                    <SecondaryButton
                                        type={"button"}
                                        children={'Cadastar-se'}
                                        className={'h-5'}
                                    />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative hidden w-0 flex-1 lg:block">
                    <img
                        className="absolute inset-0 h-full w-full object-cover"
                        src={dofuscommunity}
                        alt=""
                    />
                </div>
            </div>
        </>
    )
}

