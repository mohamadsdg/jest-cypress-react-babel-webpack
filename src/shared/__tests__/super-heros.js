// import React from 'react'
import {getFlyingSuperHeros} from '../../other/super-heros'

describe('check filter render', () => {
  // test('static', () => {
  //   const flyingHero = getFlyingSuperHeros()
  //   // console.log(flyingHero)
  //   expect(flyingHero).toEqual([
  //     {name: 'Dynaguy', powers: ['disintegrationray', 'fly']},
  //     {name: 'Apogee', powers: ['gravity control', 'fly']},
  //     // {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
  //   ])
  // })

  test('should render flyingHero', () => {
    const flyingHero = getFlyingSuperHeros()
    // console.log(flyingHero)
    expect(flyingHero).toMatchSnapshot()
  })

  test('should render flyingHero inline', () => {
    const flyingHero = getFlyingSuperHeros()
    // console.log(flyingHero)
    expect(flyingHero).toMatchInlineSnapshot(`
      Array [
        Object {
          "name": "Dynaguy",
          "powers": Array [
            "disintegrationray",
            "fly",
          ],
        },
        Object {
          "name": "Apogee",
          "powers": Array [
            "gravity control",
            "fly",
          ],
        },
      ]
    `)
  })
})
