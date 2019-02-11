/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'

const formContainer = css`
  width: 60%;
  margin: 0 auto;
  
`

const registerForm = (props) => {
  return (
    <div css={formContainer}>
      <form>
        <div>
          <label htmlFor="">Username</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Name</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Email</label>
          <input type="email" />
        </div>
        <div>
          <label htmlFor="">Password</label>
          <input type="password" />
        </div>
        <div>
          <label htmlFor="">Confirm password</label>
          <input type="password" />
        </div>
      </form>
    </div>
  )
}

export default registerForm