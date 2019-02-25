// this comment tells babel to convert jsx to calls to a function called jsx 
// instead of React.createElement
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import { Link } from 'react-router-dom'
import { SlashIcon, HomeIcon, MessageIcon, ExploreIcon, NotificationIcon } from '../UI/Icons'

const navContainer = css`
  height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #252423;
`
const navGroup = css`
  margin: 0 30px;
  display: flex;
  &:last-of-type {
    margin-right: 0;
  }
`
const navItem = css`
  display: flex;
  align-items: center;
  margin-right: 30px;
  p {
    color: white;
    font-size: 14px;
    font-weight: bolder;
  }
  a {
    color: white;
    text-decoration: none;
  }
`
const imgContainer = css`
  /* width: 24px;
  height: 24px; */
  margin-right: 15px;
  transition: all 0.1s ease-in-out;
  img {
    width: 100%;
  }
  &:hover {
    transform: scale(1.1);
  }
  
`
const avatar = css`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 15px;
  background-color: white;
  color: #333;
  font-size: 14px;
  font-weight: bolder;
  text-align: center;
  line-height: 32px;
`


const navbar = (props) => {
  let name = '';
  if (Object.keys(props.user).length) {
    let temp = props.user.name.split('');
    name = temp[0] + temp[temp.length - 1]
  }
  return (
    <div css={navContainer}>
      <div css={navGroup}>  
        <div css={navItem}>
          <div css={imgContainer}><SlashIcon width={32} fill="#fff" /></div> {/*7b16ff*/}
        </div>
        <div css={navItem}>
          <div css={imgContainer}><HomeIcon width={24} fill="#fff" /></div>
          <p>Home</p>
        </div>
        {props.isAuth &&
        (<div css={navItem}>
          <div css={imgContainer}><MessageIcon width={24} fill="#fff" /></div>
          {/* <div css={imgContainer}><img src={messageIcon} alt=""/></div> */}
          <p>Messages</p>
        </div>)}
        <div css={navItem}>
          <div css={imgContainer}><ExploreIcon width={24} fill="#fff" /></div>
          <p>Explore</p>
        </div>
      </div>
      <div css={navGroup}>
      {props.isAuth ? 
        (<div css={navItem}>
          <div css={imgContainer}><NotificationIcon width={24} fill="#fff" /></div>
          <div css={avatar}><span>{name.toUpperCase()}</span></div>
          <p onClick={props.signOut}>Sign Out</p>
        </div>) : 
        <div css={navItem}><p css={{color: 'white'}}><Link to='/login'>Sign In</Link></p></div>}
      </div>
    </div>
  )
}

export default navbar;