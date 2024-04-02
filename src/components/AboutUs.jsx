import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { aboutUs } from '../resources/data';
import { fetchData } from '../functions/fetchData';




const AboutUs = ({ colors }) => {

  

  const [mainAboutUs, setMainAboutUs] = useState({ Body: 'Loading', Title: 'Loading' });


  const [aboutUsContainersData, setAboutUsContainersData] = useState(aboutUs);
  //Gets Sanity data on mount
  const [aboutUsContainersSanity, setAboutUsContainersSanity] = useState(undefined);


  useEffect(() => {
    fetchData(setMainAboutUs, '*[_type == "mainAboutUs"][0]');
  }, []);
  
  useEffect(() => {
    fetchData(setAboutUsContainersSanity, '*[_type == "aboutUsContainers"]');
  }, []);

  useEffect(() => {
    // console.log(`Trigger useEffect to change data`)

    if(aboutUsContainersSanity) (
    setAboutUsContainersData((prev) => prev.map((data, index) => ({...data, body: aboutUsContainersSanity[index].body, title: aboutUsContainersSanity[index].title}))))

    // console.log(`Containers Data Title: ${JSON.stringify(aboutUsContainersData[0].title)}`)
    // console.log(`Sanity Data Title: ${JSON.stringify(aboutUsContainersSanity[0].title)}`)
  }, [aboutUsContainersSanity]);


  const checkEven = (num) => num % 2 === 0;

  return (
    <div>
      <div className="z-20 text-center">
        <div className="bg-[url(/imgs/Scaffolding-1200.webp)]
                        bg-fixed bg-[left_0px_top_0px] bg-cover z-0">
          <div className="bg-[#ffffffB3]
                          h-full w-full z-10">
            <h2 style={{backgroundColor: colors?.accent, color: colors?.textLight}}
              className="py-8 px-4 font-bold text-[24px]">
              {mainAboutUs.Title}
            </h2>
            <p className="font-medium my-12 mx-4 leading-[1.5] text-[1.5rem]">
              {mainAboutUs.Body}
            </p>
            <section className="flex flex-col gap-8 pb-20
                                          xsm:max-w-[450px] xsm:mx-auto
                                          lg:flex-row lg:justify-around lg:my-0 lg:mx-auto">
              {aboutUsContainersData.map((data, i) => (
                <Link key={i} className="group" to={data.href}>
                  <div style={{ backgroundColor: checkEven(i) ? colors?.bgLight : '', '--text-light': colors?.textLight,
                                '--text-dark':colors?.textDark }}
                    className={'flex flex-col relative m-auto ' + 
                                  (checkEven(i)
                                    ? 'w-[80vw] max-w-[280px] min-h-[12rem]\
                                       lg:min-w-[270px] lg:h-[370px]'
                                    : 'w-[90vw] max-w-[300px] bg-[#333645]\
                                       lg:min-w-[270px] lg:h-[400px] lg:bottom-[15px]')}>
                    {data.svg}
                    <h3 style={{ color: checkEven(i) ? '' : colors?.textLight }}
                      className=''>{data.title}</h3>
                    <p  style={{ color: checkEven(i) ? '' : colors?.textLight }}
                      className={'font-medium pt-2 pb-4 mb-12 mt-10 mx-4 px-4 text-base\
                                  sm:max-2-[450px] sm:flex sm:mx-auto'}>
                      {data.body}
                    </p>
                    <button style={{ backgroundColor: colors?.accent, color: colors?.textLight }}
                      className="w-full h-[2.8rem] duration-700
                                absolute left-0 right-0 bottom-0
                                group-hover:text-xl">
                      Contact Us
                    </button>
                  </div>
                </Link>
              ))}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
