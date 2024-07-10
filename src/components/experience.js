import React from 'react';

const Experience = () => {
    return (
        <section className="bg-secondary text-white py-32 px-5" id="experience">
            <div className="container mx-auto items-center md:justify-between">
                <h2 className="text-4xl font-bold mb-5 border-b-[5px] w-[180px] border-customPurple pb-2">
                    Experience
                </h2>
                <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-12 md:border-l-0">
                    {/* <!--First item--> */}
                    <li>
                        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                                Apr 2024 - Present
                            </p>
                        </div>
                        <div className="ml-4 mt-2 pb-5 md:ml-0">
                            <h4 className="mb-1 text-xl font-semibold">
                                Junior IT Supporter
                            </h4>
                            <h6 className="mb-2 font-semibold">
                                Pax Versicherung
                            </h6>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                • 1st level acceptance, management and processing of faults <br></br>
                                • Dismantling devices and wiring new monitor screens <br></br>
                                • Installing and configuring new hardware and software <br></br>
                                • Creating and updating documentations
                            </p>
                        </div>
                    </li>
                    {/* <!--Second item--> */}
                    <li>
                        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                                Jan - Apr 2024
                            </p>
                        </div>
                        <div className="ml-4 mt-2 pb-5 md:ml-0">
                            <h4 className="mb-1 text-xl font-semibold">
                                Rollout Technician
                            </h4>
                            <h6 className="mb-2 font-semibold">
                                Computacenter
                            </h6>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                Location: Bank of International Settlements (BIS) <br></br>
                                • Taking on the responsibility of leading a team <br></br>
                                • Installation and cabling of screens, webcams and soundbars <br></br>
                                • On-boarding of screens
                            </p>
                        </div>
                    </li>
                    {/* <!--Third item--> */}
                    <li>
                        <div className="flex-start flex items-center pt-2 md:block md:pt-0">
                            <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
                            <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
                                Aug 2021 - 22
                            </p>
                        </div>
                        <div className="ml-4 mt-2 pb-5 md:ml-0">
                            <h4 className="mb-1 text-xl font-semibold">
                                Apprentice IT Specialist (IMS)
                            </h4>
                            <h6 className="mb-2 font-semibold">
                                Novartis AG, Basel
                            </h6>
                            <p className="mb-3 text-neutral-500 dark:text-neutral-300">
                                • Worked on a project as an application developer. <br></br>
                                • Developed in JavaScript with an internal <br></br>
                                OpenSource MVC Framework called "WebCardinal"
                            </p>
                        </div>
                    </li>
                </ol>
            </div>
        </section>
    );
};

export default Experience;
