import React from 'react'
import styled from 'styled-components'

function Users(users) {
  const userComponent = users.map((ele) => {
    const {
      name,
      pic,
    } = ele
    return (
      <SContainer>
        <SAvatar src={pic} />
        <SName>
          {name}
        </SName>
      </SContainer>
    )
  })

  return (
    <SContainer>
      {userComponent}
    </SContainer>
  )
}

export default Users

const SContainer = styled.div`
`

const SAvatar = styled.img``

const SName = sytled.h1``

