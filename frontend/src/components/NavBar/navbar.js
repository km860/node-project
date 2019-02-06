// this comment tells babel to convert jsx to calls to a function called jsx 
// instead of React.createElement
/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import slashIcon from '../../assets/slash.svg'
import homeIcon from '../../assets/home.svg'
import notificationIcon from '../../assets/notification.svg'
import messageIcon from '../../assets/paper-plane.svg'
import exploreIcon from '../../assets/telescope.svg'

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
`
const imgContainer = css`
  width: 32px;
  height: 32px;
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
  background-color: white;
  color: #333;
  font-size: 14px;
  font-weight: bolder;
  text-align: center;
  line-height: 32px;
`


const navbar = (props) => {
  return (
    <div css={navContainer}>
      <div css={navGroup}>  
        <div css={navItem}>
          <div css={imgContainer}><img src={slashIcon} alt=""/></div>
        </div>
        <div css={navItem}>
          <div css={imgContainer}><img src={homeIcon} alt=""/></div>
          <p>Home</p>
        </div>
        <div css={navItem}>
          <div css={imgContainer}><img src={messageIcon} alt=""/></div>
          <p>Messages</p>
        </div>
        <div css={navItem}>
          <div css={imgContainer}><img src={exploreIcon} alt=""/></div>
          <p>Explore</p>
        </div>
      </div>
      <div css={navGroup}>
        <div css={navItem}>
          <div css={imgContainer}><img src={notificationIcon} alt=""/></div>
          <div css={avatar}><span>K</span></div>
        </div>
      </div>
    </div>
  )
}

export default navbar;