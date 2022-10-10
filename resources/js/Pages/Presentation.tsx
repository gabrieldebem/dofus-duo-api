import React from 'react';
import NavBar from "../Components/NavBar";
import PrimaryButton from "../Components/PrimaryButton";
import {SecondaryButton} from "../Components/SecondaryButton";

export default function Presentation() {
    return (
        <>
            <NavBar
                links={[
                    { name: 'Home', href: '/', current: true },
                    { name: 'Sign in', href: '/login', current: false },
                    { name: 'Sign up', href: '/register', current: false },
                ]}
            />

            <main className="mx-auto mt-10 max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28 text-center">
                <div className="sm:text-center lg:text-left">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                        <span className="block xl:inline">Ache um duo para jogar </span>{' '}
                        <span className="block text-emerald-600 xl:inline">Dofus</span>
                    </h1>
                    <p className="mt-3 text-base text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                        Se você também está cansado de jogar sozinho, ou quer conhecer novas pessoas para jogar, você está no lugar certo.
                    </p>
                    <p className="mt-3 text-sm text-gray-500 sm:mx-auto sm:mt-5 sm:max-w-xl sm:text-lg md:mt-5 md:text-xl lg:mx-0">
                        Ache outros jogadores que tem os mesmos objetivos que você, e jogue com eles.
                    </p>
                    <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                        <PrimaryButton
                            type={'button'}
                            className={'shadow w-1/4'}
                            disable={false}
                            onClick={() => console.log('clicou')}
                            children={'Comece agora'}
                        />
                        <SecondaryButton
                            type={'button'}
                            className={'ml-2 mt-3 sm:mt-0 sm:ml-3 w-1/5'}
                            disable={false}
                            onClick={() => console.log('clicou segundo')}
                            children={'Já tenho conta'}
                        />
                    </div>
                </div>
            </main>
        </>
    )
}
