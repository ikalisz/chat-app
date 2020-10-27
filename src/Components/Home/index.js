import React from 'react'
import styled from 'styled-components'
import Message from '../Message'
import Users from '../Users'

function Home() {
  const [
    selectedUser,
    setSelectedUser,
  ] = useState({})
  return (
    <SContainer>
      <Users
        setSelectedUser={setSelectedUser}
        selectedUser={selectedUser}
      />
      <Message />
    </SContainer>
  )
}

export default Home

const SContainer = styled.div`
`