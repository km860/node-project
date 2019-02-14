/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core'
import styled from '@emotion/styled'
import { Link } from 'react-router-dom'

const formContainer = css`
  width: 420px;
  margin: 50px auto;
  form {
    width: 90%;
    margin: 0 auto;
  }
`
const inputGroup = css`
  width: 100%;
  margin-bottom: 30px;
  label {
    display: block;
    color: #8c8c8c;
    font-size: 13px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  input:not([type='submit']) {
    width: 100%;
    padding: 10px 0 10px 5px;
    border: none;
    border-bottom: 2px solid #ececec;
    outline: none;
    font-size: 16px;
    font-weight: lighter;
    letter-spacing: 0.02rem;
    color: #333;
    box-sizing: border-box;
  }
  
`

const linkSpan = css`
  font-size: 10px;
  color: #333;
  display: block;
  align-self: center;
  em {
    text-decoration: underline;
  }
  
`

const Danger = styled.span`
  margin-top: 5px;
  font-size: 10px;
  font-weight: bold;
  color: red;
`


const submitBtn = css`
  background-color: #333;
  color: white;
  padding: 10px 25px;
  border: none;
  border-radius: 8px;
  font-size: 18px;
  font-weight: lighter;
  letter-spacing: 0.03rem;
  outline: none;
  &:hover {
    box-shadow: 2px 3px 24px 3px #969494;
    background-color: #212020;
  }
  &:active {
    box-shadow: inset 0px 0px 8px #1d1d1d;
  }

`
const btnContainer = css`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
`


const registerForm = (props) => {
  const { errors } = props;
  return (
    <div css={formContainer}>
      <form noValidate onSubmit={props.handleSubmit}>
        <div css={inputGroup}>
          <label htmlFor="">
            Username {errors.username && (
            <Danger>{errors.username}</Danger>
          )}
          </label>
          <input
            type="text" 
            placeholder="choose a username" 
            name="username"
            value={props.username} 
            onChange={props.handleChange}
          />
        </div>
        <div css={inputGroup}>
          <label htmlFor="">
            Name {errors.name && (
            <Danger>{errors.name}</Danger>
          )}
          </label>
          <input
            type="text" 
            placeholder="your name"
            name="name"
            value={props.name} 
            onChange={props.handleChange}
          />
        </div>
        <div css={inputGroup}>
          <label htmlFor="">
            Email {errors.email && (
            <Danger>{errors.email}</Danger>
          )}
          </label>
          <input 
            type="email" 
            placeholder="your email address"
            name="email"
            value={props.email} 
            onChange={props.handleChange} 
          />
        </div>
        <div css={inputGroup}>
          <label htmlFor="">
            Password {errors.password && (
            <Danger>{errors.password}</Danger>
          )}
          </label>
          <input 
            type="password" 
            placeholder="choose a password"
            name="password"
            value={props.password} 
            onChange={props.handleChange} 
          />
        </div>
        <div css={inputGroup}>
          <label htmlFor="">
            Confirm password {errors.password2 && (
            <Danger>{errors.password2}</Danger>
          )}
          </label>
          <input 
            type="password" 
            placeholder="repeat password"
            name="password2"
            value={props.password2} 
            onChange={props.handleChange} 
          />
        </div>
        <div css={[inputGroup, btnContainer]}>
          <input type="submit" css={submitBtn} value="Sign Up" />
          <span css={linkSpan}>Already have an account? <em><Link to="/login">Sign in</Link></em></span>
        </div>
      </form>
    </div>
  )
}

export default registerForm