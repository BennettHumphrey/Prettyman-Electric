import React from "react"
import { FiSun, FiWifi } from "react-icons/fi";
import { HiOutlineShieldCheck } from "react-icons/hi2";
import { HiOutlineLightBulb } from "react-icons/hi2";
import { IoCheckmark } from "react-icons/io5";
import { FiPhoneCall } from "react-icons/fi";



export const subPages = {
    residential: {
        headerTitle: "Residential Electrician Services in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        bodyTitle: "Residential Services Include",
        bodyText: "First and foremost, at Fake Electric we value our clients. We always take the time to explain our services in detail, and what the job will entail. We will treat your home like it is ours, and leave it in a better state than we found it. Fake Electric proudly offers electrical consultations for every new prospective renovation or construction. During these consultations, Fake Electric's professional electricians will identify any and all hazards in your home, and make recommendations on how to remedy them. Fake Electric also provides a competitive quote for affordable electrical upgrades and repairs.",
    },
    commercial: {
        headerTitle: "Commercial Electrician in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        bodyTitle: "Commercial Services",
        bodyText: "Commercial buildings and establishments are subject to their own set of design requirements. Such buildings include medical offices, restaurants, hotels, warehouses, and retail stores. With its over 40 years of experience, Fake Electric is uniquely positioned to serve our clients with any and all of their repair or installation needs.",
    },
    industrial: {
        headerTitle: "Industrial Electrician in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        bodyTitle: "Industrial Services",
        bodyText: "Industrial electrical upgrades providing energy improvements will significantly decrease utility costs, and save a large part of your operating budget. Factories use a massive amount of energy. Research shows that manufacturing plants consume more than 1,000 times as much power as other industries. This level of consumption provides quick payback periods for electrical improvement costs. Electrical upgrades also add to the value of a facility with an average increased asset value of three dollars for every dollar spent.",
    },
    lighting: {
        headerTitle: "Lighting Services in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
        bodyTitle: "Quality Service and Installation",
        bodyText: "In today's modern houses, lighting systems are becoming more and more integrated and complex. Our electricians have a wealth of experience, knowledge, and commitment to staying up-to-date with the latest technology. You can always be assured of qualified, competent electricians attending your needs. Regardless of the complexity or size of your project, the professionals at Fake Electric will do it right the first time!",
    },
    contact: {
        headerTitle: "Hire an Electrician in Victoria",
        headerText: "Providing affordable electrical services in the beautiful city of Victoria",
    },
    projects: {
        headerTitle: "Our Projects",
        headerText: "A small selection of our projects",
    },
}


export const navOptions = [
    {
        href: '/PioneerElectrical/',
        title: 'Home',
    },
    {
        href: '../PioneerElectrical/subPage/residential',
        title: 'Residential',
    },
    {
        href: '../PioneerElectrical/subPage/commercial',
        title: 'Commercial',
    },
    {
        href: '../PioneerElectrical/subPage/industrial',
        title: 'Industrial',
    },
    {
        href: '../PioneerElectrical/subPage/lighting',
        title: 'Lighting Design',
    },
    {
        href: '../PioneerElectrical/contact',
        title: 'Contact Us',
    },
    {
        href: '../PioneerElectrical/projects',
        title: 'Projects',
    },
]



export const headerSlides = [
    {
        //Return JSX for title & text so can change colors?
        img: "./imgs/Light-1200.webp",
        svg: <HiOutlineLightBulb  />,
        href: '../PioneerElectrical/subPage/industrial',
        title: "Lighting Design",
        text: "Our electricians have a wealth of experience and knowledge with the latest technology!",
    },
    {
        img: "./imgs/Office-Interior-1200.webp",
        svg: <FiSun />,
        href: '../PioneerElectrical/subPage/residential',
        title: "Residential Services",
        text: "Service upgrades, renovations, new construction, and more!",
    },
    {
        img: "./imgs/City-Skyline-1200.webp",
        svg: <FiWifi  />,
        href: '../PioneerElectrical/subPage/commercial',
        title: "Commercial Services",
        text: "Data wiring, alarm systems, new construction, and much more!",
    },
]


export const phoneNumbers = [
    {
        title: "Office Line",
        text: "1.250.555.5555"
    },
    {
        title: "Emergency",
        text: "1.250.555.5556"
    },
    {
        title: "Working Hours",
        text: "9:00am - 6:00pm"
    },
]

export const aboutUsMain = {
    title: "Fake Electric, Electrician Services in Victoria",
    text: "\
        Since it began in 1980, Fake Electric has been known for its swift, attentive service,\
        high-quality work, and competitive prices. Master Electrician Mark Smith has years of \
        experience with electrical jobs from big to small — everything from replacing a single \
        light to wiring an entire warehouse with a team. He is an expert in complex installations, \
        electrical safety, and system upgrades. Fake Electric promises quality work and superb \
        customer service for its residential and commercial clients — many who have been using us for years!",
}

export const aboutUs = [
    // Animations in tailwind.config.cjs
    {
        svg: <IoCheckmark className="h-20 w-20 text-text mx-auto group-hover:animate-checkmark-animation" />,
        href: "../PioneerElectrical/contact",
        title: "Quality Guarantee",
        text: "Reliable service is what every customer gets when they have a Fake Electric electrician handling their electrical problems",
    },
    {
        svg: <FiPhoneCall className="h-20 w-20 pt-3 text-accent mx-auto group-hover:animate-phone-animation"  />,
        href: "../PioneerElectrical/contact",
        title: "24/7 Service",
        text: "Our technicians are available 24/7 for any emergency calls, helping with all that life can throw at you",
    },
    {
        svg: <HiOutlineShieldCheck className="h-20 w-20 text-text mx-auto group-hover:animate-shield-animation"  />,
        href: "../PioneerElectrical/contact",
        title: "Insured, Bonded, Licensed",
        text: "Our electricians are fully licensed, with fully equiped vans to help with all your electrical needs",
    },
]


export const reviews = [
    {
        text: "Sean Dayton",
        img: "",
        svg: "",
        href: "",
        title: "I have an older condo, and needed some breakers and wires replaced, but two other electricians said the walls and floor aren't concrete so it couldn't be done.  But Mike is great, and he did the job well.  Professional, reliable, great value, and not afraid to do a more difficult task.",
    },
    {
        text: "Mike Smith",
        img: "",
        svg: "",
        href: "",
        title: "Sean and team completely re-did the electrical in our apartment complex before upgrading us to a 400 amp service. The care, time, and expertise that Fake Electric brought to the jobsite was something that I have never seen before. Thanks to the Fake Electric for being true electrical professionals.",
    },
    {
        text: "Pedro Gonzales",
        img: "",
        svg: "",
        href: "",
        title: "The people at Fake Electric are capable of commercial and residential projects with a sharp focus on quality. Clean work and careful attention, along with a respectful and knowledgeable crew is what keeps us calling them back.",
    },
    {
        text: "Sean Peters",
        img: "",
        svg: "",
        href: "",
        title: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
]


export const projects = [
    {
        img: ["./imgs/City-Skyline-1200.webp", "./imgs/Light-1200.webp"],
        title: "TEST1",
        location: "Two Images",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
    {
        img: ["./imgs/Office-Interior-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp"],
        title: "TEST2",
        location: "Three Images",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
    {
        img: ["./imgs/Light-1200.webp"],
        title: "TEST3",
        location: "One Image",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
    {
        img: [
            "./imgs/artistic-scaffolding-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp",
            "./imgs/artistic-scaffolding-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp",
            "./imgs/artistic-scaffolding-1200.webp", "./imgs/Light-1200.webp", "./imgs/City-Skyline-1200.webp",
            ],
        title: "TEST4",
        location: "Nine Images",
        text: "Fake Electrical team were superb, and I would highly recommend this company to anyone needing electrical upgrades in Victoria! They were clean, attentive, respectful, and finished the job on time. 10/10.",
    },
]