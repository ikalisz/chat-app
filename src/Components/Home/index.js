import React from 'react'
import styled from 'styled-components'
import Message from '../Message'
import Users from '../Users'

function Home() {
  return (
    <SContainer>
      <Users />
      <Message />
    </SContainer>
  )
}

export default Home

const SContainer = styled.div`
`