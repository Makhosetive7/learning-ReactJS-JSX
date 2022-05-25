import React from 'react'



const Cats = () => {

    const cats = [
        {
          name: 'Dolly',
          type: 'cat',
          description: 'Dolly is funny and loves to be around people',
          skills: ['fetch', 'play dead', 'roll over'],
          image: 'https://images.pexels.com/photos/208773/pexels-photo-208773.jpeg?cs=srgb&dl=pexels-pixabay-208773.jpg&fm=jpg',
        },
        {
          name: 'Molly',
          type: 'cat',
          description: 'Molly is a sweet and cuddly cat stretch a lot!',
          skills: ['play dead', 'meow', 'purr'],
          image: 'https://images.pexels.com/photos/1472999/pexels-photo-1472999.jpeg?cs=srgb&dl=pexels-alex-bargain-1472999.jpg&fm=jpg',
        },
        {
          name: 'Kate',
          type: 'cat',
          description: 'Molly is a sweet and cuddly cat stretch a lot!',
          skills: ['play dead', 'meow', 'purr'],
          image: 'https://images.pexels.com/photos/3687957/pexels-photo-3687957.jpeg?cs=srgb&dl=pexels-matthias-oben-3687957.jpg&fm=jpg',
        },
      ];

  return (
    <div className='animal-section'>
       
        <h1 className='cat-heading'>Cats section</h1>
        <ul className='container'>
            {
                cats.map((cat, index) => (
                    <li key = {index}>
                        <h1 className='animal-name'>{cat.name}</h1>
                        <img src = {cat.image} 
                        alt = {cat.image}
                        width ="400px" 
                        height = "400px" />

                        <ul className='sub-container'>

                            {
                                cat.skills.map((skill, index) => (
                                    <li key = {skill} >
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

export default Cats