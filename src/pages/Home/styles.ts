import styled from "styled-components"

import { colors } from 'styles/colors'

export const HomePageWrapper = styled.div`
  display: flex;
  flex: 0 0 100%;
  align-items: flex-start;
  justify-content: center;
`

export const UserForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 375px;
  min-height: 300px;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid black;
  font-family: Arial, Helvetica, sans-serif;
`

export const UserFormName = styled.p`
  font-size: 24px;
  font-weight: bold;
  color: ${colors.formTitle}
`
