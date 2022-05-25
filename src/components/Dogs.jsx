import React from 'react'

const Dogs = () => {

    const dogs = [
        {
          name: 'Bobby',
          type: 'dog',
          description: 'Bobby is funny and loves to be around people',
          skills: ['fetch', 'play dead', 'roll over'],
          image: 'https://images.pexels.com/photos/59523/pexels-photo-59523.jpeg?cs=srgb&dl=pexels-torsten-dettlaff-59523.jpg&fm=jpg',
        },
        {
          name: 'Danger',
          type: 'dog',
          description: 'Danger is a sweet and cuddly dog stretch a lot!',
          skills: ['play dead', 'mewoofw', 'purr'],
          image: 'https://images.pexels.com/photos/257540/pexels-photo-257540.jpeg?cs=srgb&dl=pexels-pixabay-257540.jpg&fm=jpg',
        },
        {
          name: 'Spider',
          type: 'dog',
          description: 'Spider is a sweet and cuddly dog that love being around people!',
          skills: ['play dead', 'woof', 'rollover'],
          image: 'https://images.pexels.com/photos/1851164/pexels-photo-1851164.jpeg?cs=srgb&dl=pexels-charles-1851164.jpg&fm=jpg',
        },
      ];
  return (
    <div className='animal-section'>
        <h1 className='dog-heading'>Dogs section</h1>
    <ul className='container'>
        {
            dogs.map((dog, index) =>(
                <li key = {index}>
                    <h1 className='animal-name'> {dog.name}</h1>
                    <img src = {dog.image}
                    alt = {dog.image}
                    width = "400px"
                    height = "400px" />

                    <ul className='sub-container'>
                        {
                            dog.skills.map((skill, index) => (
                                <li key = {skill}>
                                    {skill}
                                </li>
                            ))
                        }
                    
                    </ul>
                </li>
            ))
        }
    </ul>
    </div>

    
  )
}

export default Dogs