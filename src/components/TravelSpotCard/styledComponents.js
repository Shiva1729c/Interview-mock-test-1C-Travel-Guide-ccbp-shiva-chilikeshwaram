import styled from 'styled-components'

export const CardItem = styled.li`
  width: 350px;
  margin-bottom: 10px;
  margin-right: 10px;
  background-color: #ffffff;
`
export const CardDetails = styled.div`
  padding-left: 10px;
  padding-right: 15px;
`

export const CardPlaceName = styled.h1`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
  color: #334155;
`

export const CardImage = styled.img`
  width: 100%;
`

export const CardDescription = styled(CardPlaceName)`
  font-weight: 400;
  font-size: 13px;
  color: #64748b;
`
