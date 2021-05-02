import React from 'react'
import { Light, TextColor, Power } from '../constants'
import styled from 'styled-components'

const NumText = styled.div`
  display: block;
  margin-top: 8px;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 1000;
  font-size: 36px;
  text-align: center;
  color: ${Power};
  @media (max-width: 768px) {
    margin-top: 40px;
  }
`

const Begin = styled.div`
  width: 244px;
  display: block;
  margin: 5px auto;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  text-align: left;
  color: ${TextColor};
`

const Image = styled.img`
  max-height: 16vh;
  display: block;
  margin: 26px auto;
`

const End = styled.div`
  width: 256px;
  display: block;
  margin: auto;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
  text-align: left;
  color: ${TextColor};
`

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
`

export default function directBlock({
  numberText,
  beginText,
  imageText,
  endText,
}) {
  return (
    <Wrapper>
      <NumText>{numberText}</NumText>
      <Image src={imageText} />
      <Begin>{beginText}</Begin>
      <End>{endText}</End>
    </Wrapper>
  )
}
