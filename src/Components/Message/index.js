import React from 'react'
import styled from 'styled-components'

function Message({
  message,
  selectedUser
}) {
  const {
    data,
    id,
  } = message
  return (
    <SContainer>
      <SHeader>
        {selectedUser}
        {data}
      </SHeader>
    </SContainer>
  )
}

export default Message

const SContainer = styled.div`

`

const SHeader = styled.div``