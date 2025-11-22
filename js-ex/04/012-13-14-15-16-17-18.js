const myCit = {
    city:'New York',
    popular: true,
    country: 'USA' 
}

console.log(myCit.city);

console.log(myCit.popular);




// ex-13

const myCity = {
    city: 'New York'
}
myCity.popular = true

console.log(myCity);

myCity.country = 'USA'

console.log(myCity);

delete myCity.popular

console.log(myCity);

myCity['popular'] = true

const countryPropertyName = 'country'
myCity[countryPropertyName] = 'USA'

console.log(myCity); 

// ex-14

const myCityy = {
    city: 'New York',
    info: {
        isPopular: true,
        country: 'USA'
    }
}

console.log(myCityy)

delete myCityy.info['isPopular']

console.log(myCityy);

// ex-15


const name = 'Aziz'
const postsQty = 23

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false
}

console.log(userProfile);







