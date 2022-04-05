import React from 'react'
import CheckManufacturer from './CheckManufacturer'
import CheckProduct from './CheckProduct'
import Eth from "../imgs/eth.svg"
import OwnerHistory from './OwnerHistory'

const Home = () => {
    return (
        <>
            <section>
                <div class="
          2xl:max-w-7xl
          sm:px-6
          md:px-12
          lg:px-24 lg:py-20
          2xl:px-12
          px-4
          py-12
          mx-auto
        ">
                    <div class="2xl:max-w-7xl flex flex-wrap items-center mx-auto">
                        <div class="
              lg:flex-grow lg:w-1/2 lg:pr-24
              md:mb-0
              flex flex-col
              items-start
              mb-16
              text-left
            ">
                            <span class="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">An Upgrade of Trust</span>
                            <h1 class="
                text-neutral-600
                md:text-7xl
                lg:text-5xl
                mb-8
                text-4xl
                font-bold
                leading-none
                tracking-tighter
              "> Fake Product Detection </h1>
                            <p class="mb-8 text-base leading-relaxed text-left text-gray-500">A Blockchain based application for detecting Counterfeited products in the B2C and B2B supply chain which will benefit businesses in terms of growth, reputation, trust and to customers in getting genuine products in hand.</p>
                            <dl class="md:grid-cols-2 grid grid-cols-1 gap-12">
                                <div>
                                    <dt class="
                    bg-blue-50
                    inline-flex
                    items-center
                    justify-center
                    flex-shrink-0
                    w-12
                    h-12
                    mb-5
                    text-blue-600
                    rounded-full
                  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-box" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <polyline points="12 3 20 7.5 20 16.5 12 21 4 16.5 4 7.5 12 3"></polyline>
                                            <line x1="12" y1="12" x2="20" y2="7.5"></line>
                                            <line x1="12" y1="12" x2="12" y2="21"></line>
                                            <line x1="12" y1="12" x2="4" y2="7.5"></line>
                                        </svg>
                                    </dt>
                                    <dd class="flex-grow">
                                        <h2 class="
                      text-neutral-600
                      mb-3
                      text-lg
                      font-medium
                      tracking-tighter
                    "> Detect Product </h2>
                                        <p class="text-base leading-relaxed text-gray-400">Check about the current owner and history of owners of the product.</p>
                                        <a href="#checkProduct" class="
                      md:mb-2
                      lg:mb-0
                      hover:text-neutral-600
                      inline-flex
                      items-center
                      mt-6
                      font-semibold
                      text-blue-500
                    " title="scroll"><svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                                <div>
                                    <dt class="
                    bg-blue-50
                    inline-flex
                    items-center
                    justify-center
                    flex-shrink-0
                    w-12
                    h-12
                    mb-5
                    text-blue-600
                    rounded-full
                  ">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-trademark" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                            <path d="M4.5 9h5m-2.5 0v6"></path>
                                            <path d="M13 15v-6l3 4l3 -4v6"></path>
                                        </svg>
                                    </dt>
                                    <dd class="flex-grow">
                                        <h2 class="
                      text-neutral-600
                      mb-3
                      text-lg
                      font-medium
                      tracking-tighter
                    "> Detect Manufacturer</h2>
                                        <p class="text-base leading-relaxed text-gray-400">Verify the address (manufacturer) is genuine or not.</p>
                                        <a href="#checkManufacturer" class="
                      md:mb-2
                      lg:mb-0
                      hover:text-neutral-600
                      inline-flex
                      items-center
                      mt-6
                      font-semibold
                      text-blue-500
                    " title="read more"><svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                <path fill="none" d="M0 0h24v24H0z"></path>
                                                <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                                            </svg>
                                        </a>
                                    </dd>
                                </div>
                            </dl>
                        </div>
                        <div class="lg:w-5/6 lg:max-w-lg rounded-xl xl:mt-0 w-full mt-12">
                            <div>
                                <div class="relative w-full max-w-lg">
                                    <div class="
                    bg-violet-300
                    -left-4
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                    absolute
                    top-0
                    rounded-full
                  "></div>
                                    <div class="
                    bg-fuchsia-300
                    -bottom-24
                    right-20
                    w-72
                    h-72
                    mix-blend-multiply
                    filter
                    blur-xl
                    opacity-70
                    animate-blob
                    animation-delay-4000
                    absolute
                    rounded-full
                  "></div>
                                    <div class="relative">
                                        <img class="object-cover object-center mx-auto rounded-lg shadow-2xl" alt="hero" src={Eth} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div class="grid grid-cols-1 ">
                            <CheckProduct />
                            <CheckManufacturer />
                        </div>
                        {/* <OwnerHistory /> */}
                    </div>
                </div>
            </main>
        </>
    )
}

export default Home