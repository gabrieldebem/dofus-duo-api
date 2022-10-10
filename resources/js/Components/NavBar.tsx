import { Disclosure } from '@headlessui/react'
import React from 'react'
import NavLink from "./NavLink";

interface INavBarProps {
    links: Array<{
        name: string;
        href: string;
        current: boolean;
    }>
}

export default function NavBar({ links }: INavBarProps) {
    return (
        <Disclosure as="nav" className="bg-emerald-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-full px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-end">

                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {links.map((item) => (
                                            <NavLink
                                                key={item.name}
                                                href={item.href}
                                                active={item.current}
                                            >
                                                {item.name}
                                            </NavLink>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    )
}
