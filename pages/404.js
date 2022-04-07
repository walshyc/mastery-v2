import Link from 'next/link'
import React from 'react'

const FourOhFour = () => {
    return (
        <div className=" min-h-screen px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
            <div className="max-w-max mx-auto">
                <main className="sm:flex">
                    <p className="text-4xl font-extrabold text-base-100 sm:text-5xl">Fore!</p>
                    <div className="sm:ml-6">
                        <div className="sm:border-l sm:border-gray-200 sm:pl-6">
                            <h1 className="text-4xl font-extrabold text-ukraineyellow tracking-tight sm:text-5xl">Out of Bounds!</h1>
                            <p className="mt-1 text-base text-gray-100">Please check the URL in the address bar and try again.</p>
                        </div>
                        <div className="mt-10 flex space-x-3 sm:border-l sm:border-transparent sm:pl-6">
                            <Link href='/' passHref>
                                <div
                                    href="#"
                                    className="btn btn-accent"
                                >
                                    Go back home
                                </div></Link>

                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default FourOhFour