import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCharacters } from 'store/thunks/characters'

import Layout from 'components/Layout'
import Character from 'components/Character'

import * as S from './styles'

const Characters = () => {
  const characters = useSelector(state => state.characters.characters)
  const loading = useSelector(state => state.characters.loading)
  const dispatch = useDispatch()

  var [offset, setOffset] = useState(0)

  useEffect(() => {
    dispatch(getCharacters({ offset: 0 }))
  }, [dispatch])

  function previous() {
    offset = offset - 8
    setOffset(offset)
    dispatch(getCharacters({ offset: offset }))
  }

  function next() {
    offset = offset + 8
    setOffset(offset)
    dispatch(getCharacters({ offset: offset }))
  }

  return (
    <Layout showLink={false}>
      <S.Title>Home Page</S.Title>
      {loading ? (
        'waiting'
      ) : (
        <>
          <S.Container>
            {characters &&
              characters.map((character, index) => (
                <Character key={index} data={character} />
              ))}
          </S.Container>
          <S.Paginate>
            {offset !== 0 && <S.Button onClick={previous}>previous</S.Button>}
            {characters.length === 8 && (
              <S.Button onClick={next}>next</S.Button>
            )}
          </S.Paginate>
        </>
      )}
    </Layout>
  )
}

export default Characters
