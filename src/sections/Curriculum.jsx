import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { RiShieldStarFill } from "react-icons/ri";
import { FaBook } from "react-icons/fa";
import { Disclosure } from '@headlessui/react'
import { FaSortDown, FaCheckCircle } from "react-icons/fa";


const Curriculum = () => {
    return (
        <section className="lg:pt-[100px] pt-[50px]" id='curriculum'>
            <div className="container mx-auto lg:px-10 px-3">
                <h2 className="lg:text-[40px] text-[24px] font-garamond font-bold mb-3">Our <span className='text-darkBlue'>Curriculum</span>, Your Path to <span className='text-darkBlue'>Success!!</span></h2>

                <p className="max-w-[950px] text-[14px] lg:text-[16px] mb-8">Embark on an enriching educational journey at Rishihood University, where our innovative curriculum, developed in collaboration with industry leader KPMG, prepares you for success in the dynamic field of Business Analytics.</p>
            </div>

            <div className="mt-6 curriculum-section">
                <Tabs>
                    <div className="grid lg:grid-cols-12 grid-cols-1">
                        <div className="col-span-3 h-[680px]">
                            <div className='rounded-tr-2xl rounded-br-2xl bg-darkBlue'>
                                <TabList className="flex flex-col justify-center items-center">
                                    <Tab>
                                        <div className="pl-10 py-[16px] border-b border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 1</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>

                                    <Tab>
                                        <div className="pl-10 py-[16px] border-b border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 2</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>

                                    <Tab>
                                        <div className="pl-10 py-[16px] border-b border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 3</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>

                                    <Tab>
                                        <div className="pl-10 py-[16px] border-b border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 4</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>

                                    <Tab>
                                        <div className="pl-10 py-[16px] border-b border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 5</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>

                                    <Tab>
                                        <div className="pl-10 py-[16px] border-b border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 6</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>

                                    <Tab>
                                        <div className="pl-10 py-[16px] border-b border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 7</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>

                                    <Tab>
                                        <div className="pl-10 py-[16px] lg:border-b border-none border-[#7A7A7A]">
                                            <p className='text-white text-inter text-[18px] mb-1 font-medium'>Semester 8</p>

                                            <ul className='flex gap-3'>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <RiShieldStarFill className='mr-1 text-[14px]'/>
                                                    9 Topics
                                                </li>
                                                <li className='flex items-center text-white text-inter text-[14px]'>
                                                    <FaBook  className='mr-1 text-[14px]'/>
                                                    2 Case Studies
                                                </li>
                                            </ul>
                                        </div>
                                    </Tab>
                                </TabList>
                            </div>
                        </div>
                        <div className="col-span-9 bg-[#F7F8FC] p-10 h-[680px] overflow-y-scroll">
                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 1/ Course Curriculum/ 2 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Science of Living
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Learn about the science of emotions, social interactions, and the psychology of human behavior.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Understanding India
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explore the social, political, and economic dimensions that shape modern India
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Global Grand Challenges
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Identify, discuss, and reflect on some of the world&apos;s most pressing challenges and the impact of technology and innovation on addressing global challenges.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Professional Communications
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explore effective interpersonal communication strategies for building strong professional relationships.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Leadership Colloquium 1
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explore the foundations of effective leadership and gain insights into different leadership styles.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Introduction to Business Analytics & Data Science
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Provides an introduction to foundational concepts in business analytics and data science.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Business Calculus and Linear Algebra
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers essential mathematical concepts for business applications.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Principles of Management & Organizational Behavior
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Introduces fundamental principles of management and organizational behavior.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Introduction to Financial Accounting
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers basic principles and practices in financial accounting.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 1st Semester (2 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Understanding the application of Business analytics in E-commerce industry
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        How OTT platforms use Business Analytics
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Understanding the application of Business analytics in E-commerce industry
                                    </li>
                                </ul>
                            </TabPanel>

                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 2/ Course Curriculum/ 2 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Environment and System Thinking
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                                Discover the role of system thinking in addressing complex environmental challenges.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Technology and Society
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Delve into societal transformation through various technology, including ethics of AI/ML, modern technological marvels, and more.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Indian Policy
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explore the heart of democracy through the Indian constitution, government bodies, and the electoral process.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Introduction to Statistics and Data Science
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Introduces statistical methodologies and probability concepts, laying the groundwork for data analysis and decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Leadership Colloquium 2
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            An advanced version of the first course, you will explore second-level leadership principles like conflict management, working in teams, leading in a professional setting, etc.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 1st Semester (2 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Understanding the application of Business analytics in E-commerce industry
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        How OTT platforms use Business Analytics
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Community Engagement
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Advanced Excel for Business
                                    </li>                                 
                                </ul>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Community Engagement
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Discover power of community engagement in creating positive social change. This will be done through hands-on community service.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Advanced Excel for Business
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explores advanced features of Microsoft Excel tailored for business applications, enhancing data manipulation and analysis skills.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Programming Fundamentals for Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Introduces programming concepts essential for analytics, enabling students to apply coding skills in data-driven scenarios.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Finance for Decision Making
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers financial principles crucial for informed decision-making, emphasizing their application in business scenarios.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Introduction to Research
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Equips students with foundational research methods and techniques, preparing them for academic and practical research endeavors.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Global Immersion Program
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Optional International Immersion Program with opportunities for hands-on learning and cultural exchange.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 2nd Semester (2 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Cab Booking Data Analysis
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Food Delivery App Analysis
                                    </li>                                
                                </ul>
                            </TabPanel>

                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 3/ Course Curriculum/ 4 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Python Programming
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Teaches programming using the Python language, emphasizing its relevance and application in the field of analytics.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Database Management Systems
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers the fundamentals of database management systems, providing essential skills for data organization and retrieval.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Data Science and Inferential Statistics using Excel
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies data science concepts using Excel, focusing on inferential statistics and their application in deriving meaningful insights.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Cost and Management Accounting
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explores principles and practices in cost and management accounting, providing insights into financial decision support.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Human Resource Management
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Examines principles and strategies in human resource management, emphasizing the role of HR in organizational success.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Operations and Supply Chain Management
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers principles and strategies in operations and supply chain management, focusing on efficient business processes.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Marketing Management
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Introduces principles and practices in marketing, providing a foundation for developing effective marketing strategies.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Economics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Provides a foundational understanding of economic principles, exploring their implications for business decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 3rd Semester (4 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Sales Data Analysis
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Employee Engagement Optimization
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Hotel Booking Data Analysis
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Customer Personality Analysis
                                    </li>                                 
                                </ul>
                            </TabPanel>

                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 4/ Course Curriculum/ 4 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Data Structures
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Introduces fundamental concepts in data structures, emphasizing their role in efficient data management and processing.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Statistics with R
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies statistical methods using the R programming language, enhancing statistical analysis skills for business applications.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Spreadsheet Models for Business Decision Problems
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Teaches modeling techniques using spreadsheets for effective business decision-making, focusing on practical problem-solving.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Corporate Finance
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explores financial management within a corporate context, emphasizing strategic financial decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Corporate and Global Law
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers legal aspects related to corporate and global business, ensuring awareness of legal considerations in business operations.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Consumer Behaviour
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Examines factors influencing consumer choices and behavior, providing insights for effective marketing strategies.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Summer Internship
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Provides students with practical work experience during the summer break, fostering real-world application of academic knowledge.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 4th Semester (4 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Books Rating Analysis
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Hardware Equipment Sales Analysis
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Inventory Management
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        OTT Data Analysis
                                    </li>                                 
                                </ul>
                            </TabPanel>

                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 5/ Course Curriculum/ 7 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Integrating Marketing Communications
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Develops strategies for cohesive marketing communication across various channels to enhance brand engagement.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    AI for Business
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explores AI applications in business, emphasizing how machine learning and automation optimize decision-making and innovation.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Predictive Analysis for Business Forecasting
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Teaches advanced techniques for predicting business trends using statistical models and machine learning.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Professional Communications
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explore effective interpersonal communication strategies for building strong professional relationships.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Data Exploration & Visualization
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers practical skills in exploring and visualizing data for pattern identification and effective communication.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Stochastic Modeling
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Introduces probabilistic modeling techniques for handling uncertainty in business decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    International Business
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explores global business dynamics, including international trade, cross-cultural management, and market entry strategies.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Entrepreneurship & Innovation
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Fosters an entrepreneurial mindset, covering ideation, business model development, and innovation management.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Business Research Project I
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Engages students in a structured research project addressing real-world business challenges.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 5th Semester (7 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Covid Dashboard Creation
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Dashboard Creation
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Marketing Campaign Analysis
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Olympic Data Analysis and Dashboard creation
                                    </li>  

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Manpower Need Prediction
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Marketing Campaign Analysis
                                    </li>

                                     <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Building Optimization Models for Manufacturing Industry
                                    </li>                                 
                                </ul>
                            </TabPanel>

                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 6/ Course Curriculum/ 4 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Machine Learning for Business
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies machine learning to solve business problems, enabling data-driven decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Advanced Analytics - Big Data, Cloud Computing
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explores advanced analytics in the context of big data and cloud technologies.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Optimization Analytics and Predictive Modeling
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Focuses on optimization techniques and predictive modeling for strategic decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Brand Management
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers principles and strategies for effective brand management, influencing consumer perceptions.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Professional Ethics in the Digital Age
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Addresses ethical considerations in the digital business environment.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Strategic Management
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers principles and practices of strategic management for effective organizational planning.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Change Management
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Explores strategies for managing organizational change, emphasizing communication and leadership.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Business Research Project II
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Extends and deepens research conducted in Business Research Project I, culminating in comprehensive recommendations.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 6th Semester (4 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Employee Salary Prediction
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Marketing Strategies for Bank Data
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Spillage Prediction in Construction
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Customer Sales Analysis
                                    </li>                                   
                                </ul>
                            </TabPanel>

                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 7/ Course Curriculum/ 7 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Blockchain for Managers
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Introduces blockchain technology and its managerial applications, emphasizing its impact on transparency, security, and efficiency in various industries.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Financial Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies analytics techniques to financial data, providing insights for informed decision-making, risk assessment, and financial strategy.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Marketing Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies analytics in the context of marketing, utilizing data to optimize campaigns, measure performance, and enhance customer engagement.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    People Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Focuses on analytics techniques for human resources, utilizing data to inform talent management, workforce planning, and strategic HR decisions.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Time Series Analysis for Business
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies statistical methods to analyze time-series data in a business context, extracting patterns and trends for forecasting and decision support.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Business Research Methods
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Covers advanced research methods applicable to business scenarios, guiding students in conducting rigorous and meaningful research for informed decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Industrial Training
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Provides students with industrial training, allowing them to apply theoretical knowledge to real-world challenges and gain hands-on skills.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 7th Semester (7 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Loan Default Prediction
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Customer Segmentation on Hospitality Data
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Flight Price Prediction
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Image Classification and Reduction
                                    </li> 
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Predicting Customer Lifetime Value of Supermarket
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Credit Card Spend Analysis
                                    </li>   

                                     <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Research Training Program with Taylor & Francis (optional)
                                    </li>                                
                                </ul>
                            </TabPanel>
                            
                            <TabPanel>
                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue'>
                                    Semester 8/ Course Curriculum/ 5 Case Studies
                                </h2>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Fraud Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Focuses on analytics techniques for detecting and preventing fraudulent activities, addressing the growing importance of fraud prevention in business.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Web & Social Media Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies analytics to web and social media data, extracting insights to inform digital marketing strategies, online presence, and audience engagement.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Operations and Supply Chain Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Focuses on using data to improve efficiency and decision-making in logistics and production.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Prescriptive Analysis for Business Forecasting
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Focuses on prescribing optimal business strategies using analytics, combining predictive and prescriptive analytics for decision support and strategy formulation.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-darkBlue'/>
                                                    Risk Analytics
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Applies analytics to assess and mitigate business risks, providing tools for proactive risk management and informed decision-making.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <div className="w-full pt-5">
                                    <div className="mx-auto w-full rounded-xl bg-white border border-[#3B3A3A]">
                                        <Disclosure>
                                        {({ open }) => (
                                            <>
                                            <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                                                <span className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px]'>
                                                    <FaCheckCircle className='mr-2 text-red'/>
                                                    Thesis
                                                </span>
                                                <FaSortDown
                                                className={`${
                                                    open ? 'rotate-180 transform mt-1' : ''
                                                } h-4 w-5 text-darkBlue`}
                                                />
                                            </Disclosure.Button>
                                            <Disclosure.Panel className="px-4 py-4 text-sm text-gray-500 bg-[#F7F8FC] rounded-b-xl border-t">
                                            Culminating project involving a thesis and practical internship experience, allowing students to showcase their analytical and research skills while gaining real-world exposure.
                                            </Disclosure.Panel>
                                            </>
                                        )}
                                        </Disclosure>
                                    </div>
                                </div>

                                <h2 className='font-garamond lg:text-[35px] text-[20px] font-bold text-darkBlue mt-8 mb-4'>
                                    Case Studies 8th Semester (5 Nos.)
                                </h2>

                                <ul>
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Sentiment Analysis on Online Feedback Data
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Scrapping Data from
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Scrapping Reviews from E-Commerce Website and Performing Text Analytics
                                    </li>

                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-red'/>
                                        Fraud Transaction Prediction
                                    </li> 
                                    <li className='flex items-center font-garamond font-bold lg:text-[16px] text-[14px] mb-3'>
                                        <FaCheckCircle className='mr-2 text-darkBlue'/>
                                        Building Supply Chain Dashboard
                                    </li>                              
                                </ul>
                            </TabPanel>
                        </div>
                    </div>    
                </Tabs>             
            </div>
        </section>
    );
};

export default Curriculum;