import React from 'react'
import { useSelector } from 'react-redux'

import Layout from 'components/Layout'

import * as S from './styles'

const Profile = props => {
  const spoiler = useSelector(state => state.spoiler.spoiler)
  const char = props.location.state.data
  return (
    <Layout showInput={false}>
      <S.Wrapper>
        <S.Photo src={char.img} alt='Character Photo' />
        <S.Container>
          <h1>Name</h1>
          <h3>{char.name}</h3>
          {char.birthday !== 'Unknown' ? (
            <>
              <h1>Data of Birth</h1>
              <h3>{char.birthday}</h3>
            </>
          ) : (
            ''
          )}

          <h1>Nickname</h1>
          <h3>{char.nickname}</h3>
          <h1>Occupation</h1>
          <h3>{char.occupation.toString()}</h3>
          <h1>Actor(name)</h1>
          <h3>{char.portrayed}</h3>
          
          {spoiler ? (
            <>
              <h1>Status</h1>
              <h3>{char.status === 'Alive' ? 'Alive' : 'Dead'}</h3>
              <h1>seasons in which character appear</h1>
              <h3>{char.appearance.toString()}</h3>
            </>
          ) : (
            ''
          )}
        </S.Container>
      </S.Wrapper>
    </Layout>
  )
}

export default Profile
