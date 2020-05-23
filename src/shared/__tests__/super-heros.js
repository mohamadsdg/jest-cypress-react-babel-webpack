// import React from 'react'
import {getFlyingSuperHeros} from '../../other/super-heros'
import {} from '@testing-library/react'

describe('check filter render', () => {
  test('static', () => {
    const flyingHero = getFlyingSuperHeros()
    // console.log(flyingHero)
    expect(flyingHero).toEqual([
      {name: 'Dynaguy', powers: ['disintegrationray', 'fly']},
      {name: 'Apogee', powers: ['gravity control', 'fly']},
      // {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
    ])
  })
})
