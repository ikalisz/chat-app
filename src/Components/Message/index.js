import React from 'react'
import styled from 'styled-components'

function Message({
  message,
}) {
  const {
    data,
    id,
  } = message
  return (
    <SContainer>
      <SHeader>
        {data}
      </SHeader>
    </SContainer>
  )
}

export default Message

const SContainer = styled.div`

`

const SHeader = styled.div``