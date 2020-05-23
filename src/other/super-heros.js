const superHeros = [
  {name: 'Dynaguy', powers: ['disintegrationray', 'fly']},
  {name: 'Apogee', powers: ['gravity control', 'fly']},
  {name: 'Blazestone', powers: ['control offire', 'pyrotechnic discharges']},
  {name: 'Froozone', powers: ['freezewater']},
  {name: 'Mr. Incredible', powers: ['physicalstrength']},
  {name: 'Elastigirl', powers: ['physicalstretch']},
  {name: 'Violet', powers: ['invisibility', 'force fields']},
  {name: 'Dash', powers: ['speed']},
  //   {name: 'Jack-Jack', powers: ['shapeshifting', 'fly']},
]
function getFlyingSuperHeros() {
  return superHeros.filter(hero => {
    return hero.powers.includes('fly')
  })
}
export {getFlyingSuperHeros}
