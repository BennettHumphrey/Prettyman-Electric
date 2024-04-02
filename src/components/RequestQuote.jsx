import React from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom'
import { fetchData } from '../functions/fetchData';
import { useState } from 'react';

const RequestQuote = ({ colors }) => {

  const [requestQuote, setRequestQuote] = useState('Loading')

  useEffect(() => {
    fetchData(setRequestQuote, '*[_type == "requestQuote"][0]');
  }, []);

  // useEffect(() => {
  //   console.log(requestQuote);
  // }, [requestQuote]);

  return (
    <div style={{backgroundColor: colors?.accent, color: colors?.textLight}}
      className="request-quote text-center flex 
                    flex-col items-center pb-8">
      <h2 className="pt-8 mx-1 mb-8 text-xl">{requestQuote.title}</h2>
      <Link to="../contact">
        <button style={{'--text-light': colors?.textLight,'--bg-light': colors?.bgLight, 
                        '--bg-dark': colors?.bgDark, '--text-dark': colors?.textDark}}
          className="w-[80vw] h-12 bg-[--bg-dark] text-[--text-light]
                            cursor-pointer transition duration-700 rounded-md 
                            max-w-[600px] hover:bg-[--bg-light] hover:text-[--text-dark]">
          REQUEST A QUOTE
        </button>
      </Link>
    </div>
  )
}

export default RequestQuote