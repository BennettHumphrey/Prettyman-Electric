import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { dropBtnStyles } from './NavStyles' 

const MobileNav = ({ navOptions }) => {

    const [dropdownActive, setDropdownActive] = useState(false)

  return (
    <div onClick={() => setDropdownActive(!dropdownActive)} style={{...dropBtnStyles.btn}} >
            <div onClick={() => {window.scrollTo(0, 0);}} style={dropdownActive ? {...dropBtnStyles.barOne, ...dropBtnStyles.bars, ...dropBtnStyles.barOneX} : {...dropBtnStyles.barOne, ...dropBtnStyles.bars}} />
            <div onClick={() => {window.scrollTo(0, 0);}} style={dropdownActive ? {...dropBtnStyles.barTwo, ...dropBtnStyles.bars, ...dropBtnStyles.barTwoX} : {...dropBtnStyles.barTwo, ...dropBtnStyles.bars}} />
            <div onClick={() => {window.scrollTo(0, 0);}} style={dropdownActive ? {...dropBtnStyles.barThree, ...dropBtnStyles.bars, ...dropBtnStyles.barThreeX} : {...dropBtnStyles.barThree, ...dropBtnStyles.bars}}/>
            <div onClick={() => {window.scrollTo(0, 0);}} style={dropdownActive ? {...dropBtnStyles.dropContent, ...dropBtnStyles.dropContentShow} : {...dropBtnStyles.dropContent}} >
            {navOptions && navOptions.map((o, i) => (
                        <Link key={i} style={dropBtnStyles.dropItem} to={o.href}>{o.title}</Link>
                ))}
            </div>
        </div>
  )
}

export default MobileNav