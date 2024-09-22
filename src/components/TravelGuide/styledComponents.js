import styled from 'styled-components'

export const TravelGuideContainer = styled.div`
  display: flex;
  justify-content: center;
  min-height: 100vh;
  background-color: #eef4f7;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`

export const MainHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 700;
  color: #334155;
  text-align: center;
  text-decoration: underline;
  text-decoration-color: #52bbf0;
  text-underline-offset: 10px;
  margin-bottom: 40px;
`

export const CardContainer = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`

export const LoaderContainer = styled.div`
  display: flex;
  align-self: center;
  margin-top: 200px;
`
