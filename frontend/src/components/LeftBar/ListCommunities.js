/** @jsx jsx */
import React from 'react'
import { Link } from 'react-router-dom';
import styled from '@emotion/styled'
import { jsx, css } from '@emotion/core'

const List = styled.ul`
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    padding: 10px 0 0 10px;
    div {
      width: 150px;
      background-color: #f3f3f3;
      padding: 5px;
    }
    a {
      text-decoration: none;
      color: black;
    }
  }
`
const header = css`
  padding: 5px;
  margin: 0 0 0 10px;
  width: 150px;
  text-align: center;
  border-bottom: 2px solid #e6e6e6;
  display: inline-block;
`

const listCommunities = (props) => {
  let communityList = props.communities.map(el => {
    return <li key={el}><Link to={`/c/${el}`} ><div>{el}</div></Link></li>
  })
  return (
    <div>
      <h3 css={header}>Communities</h3>
      <List>
        {communityList}
      </List>
    </div>
  )
}

export default listCommunities