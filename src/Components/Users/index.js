import React from 'react'
import styled from 'styled-components'

function Users(users) {
  const userComponent = users.map((ele) => (
    <SContainer>
      {ele}
    </SContainer>
  ))

  return (
    <SContainer>
      {userComponent}
    </SContainer>
  )
}

export default Users

const SContainer = styled.div`
`

