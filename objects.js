const chalk = require('chalk')

/*

Object.assign()

*/
let obj1 = {
    name: 'Garold',
    age: 17
}

let obj2 = {
    school: "Thomson's higher school edu"
}

let obj3 = {
    hasCar: true,
    hasJob: "working in McDonald's"
}

const mainObj = Object.assign(obj1, obj2, obj3)
console.log(mainObj)
//console.log(JSON.stringify(obj1))


//The same example using a loop, not assign method
const bigObj = {
    firstName: 'Mateusz',
    yearsOld: 32,
    country: 'Poland',
    city: 'Warsaw',
    number: '+48(781)-343-322'
}

let thisObj = {}

for(let key in bigObj){
    thisObj[key] = bigObj[key]
    delete thisObj.yearsOld
}
console.log(bigObj)
console.log(thisObj)


//example with Symbol
let obj4 = {
    data: {
        [Symbol('id')]: 1913
    }
}

let idObj = Object.assign(obj4)

console.log(obj4)
console.log(idObj)



/*

Object.create()

*/
let theMainObject = {
    fakeName: 'Georgie',
    fakeAge: 73,
    fakeCountry: 'Canada'
}
const dataBoutUser = Object.create(theMainObject, {
    usersName: {
        value: 'Herman Murauyou',
        enumerable: true,
        writable: false
    },
    usersBirth: {
        value: 2002,
        enumerable: true,
        writable: false
    },
    usersCountry: {
        value: 'Belarus',
        enumerable: true,
        writable: true,
        configurable: true
    }
})

dataBoutUser.usersCountry = 'Moved to another country...'
//delete dataBoutUser.usersCountry
console.log(dataBoutUser)
console.log(dataBoutUser.fakeName)

//for(let keyBoutUser in dataBoutUser){
//    console.log(chalk.blue('Key:'), chalk.cyan(keyBoutUser) + ':', dataBoutUser[keyBoutUser])
//}




/*

Object.defineProperty()

*/
let obj5 = {
    someName: 'Admiral'
}

Object.defineProperty(obj5, 'someID', {
    value: 1,
    writable: true
})

console.log(obj5.someID)
obj5.someID = 1913
console.log(obj5.someID)


//An example with get/set
let obj6 = {
    usersSomeId: 19112002,
    usersSomeName: 'Mr Crabs'
}

Object.defineProperty(obj6, 'id', {
    get: function() {
        return 'this id ' + this.usersSomeId + ' is mine'
    },
    set: function(id) {
        this.usersSomeId = id + '(another id)'
    }
})

console.log(obj6.id)

obj6.id = 13122002

console.log(obj6.id)



/*

Object.defineProperties()

*/
let emptyObj = {}

let obj = Object.defineProperties(emptyObj, {
    smth: {
        value: 'smth',
        enumerable: true,
        writable: true,
        configurable: true
    },
    smb: {
        value: 123,
        enumerable: true,
        writable: true,
        configurable: true
    }
})

obj.smth = 'Something'
obj.smb = 1913
console.log(obj)

//An example with get/set
let obj7 = {
    fruits: 'apple',
    number: 3
}

Object.defineProperties(obj7, {
    fru: {
        get: function() {
            return 'I need ' + chalk.yellow(this.fruits)
        },
        set: function(newFruits) {
            this.fruits = newFruits
        },
        enumerable: true,
        //writable: true,
        configurable: true
    },
    num: {
        get: function() {
            return 'I need ' + chalk.yellow(this.fruits) + ' - ' + this.number
        },
        set: function(newNumber) {
            this.number = newNumber + ' pieces'
        },
        enumerable: true,
        //writable: true,
        configurable: true
    }
})
obj7.fru = 'bananas'
obj7.num = 13 
console.log(obj7.fru)
console.log(obj7.num)

//Another one example in office
let obj8 = {
    car: 'Bentley',
    carsMiles: 8921,
    main: '...'
}

Object.defineProperties(obj8, {
    model: {
        get: function() {
            return 'This car is named ' + chalk.blue(this.car) + ', model is ' + chalk.cyan(this.main)
        },
        set: function(newModel) {
            this.main = newModel
        },
        enumerable: true,
        configurable: true
    },
    miles: {
        get: function() {
            return chalk.blue(this.car + "'s") + " miliage is " + chalk.cyan(this.carsMiles + 'm')
        },
        set: function(newMiles) {
            this.carsMiles = newMiles
        },
        enumerable: true,
        configurable: true
    }
})

obj8.model = 'Continental GT'
obj8.miles = 1913
console.log(obj8.model)
console.log(obj8.miles)



/*

Object.entries()

*/
let obj9 = {
    user: 'Name',
    data: {
        [Symbol('id')]: '1232saw21'
    }
}
console.log(Object.entries(obj9))

//An example with Map
let obj10 = {
    justKey: 'key',
    justNumber: 1
}

let createMap = new Map(Object.entries(obj10))
console.log(createMap)

//An example with iteration
let obj11 = {
    firstKey: 'first',
    secondKey: 'second',
}
Object.entries(obj11).forEach(([key, value]) => console.log(chalk.blue(`${key}`) + ': ' + chalk.cyan(`${value}`)))

//An example with for .. of
let obj12 = {
    singer: 'Lil Baby',
    song: '24song'
}

for(const [myKey, myValue] of Object.entries(obj12)){
    console.log(chalk.cyanBright(`${myKey}`) + ': ' +  chalk.blueBright(`${myValue}`))
}



/*

Object.freeze()

*/
let obj13 = {
    randomValey: 'Donald Duck',
    randomValey1: 'Donald Trump',
    fun: function() {
        return 'Hello, my name is' + this.randomValey
    }
}

obj13.randomValey1 = 'Donald'
delete obj13.fun
//console.log(obj13.fun)

const frozen = Object.freeze(obj13)
console.log(frozen === obj13)

delete obj13
console.log(obj13)



/*

Object.fromEntries()

*/
const array = [
    ['name', 'Donald Duck']
]
const obj14 = Object.fromEntries(array)
console.log(obj14)

//An example with Object.entries
const obj15 = {
    usersID: '1zi12312zw',
    nameUser: 'Daniil'
}
const toArrayObj = Object.fromEntries(
    Object.entries(obj15).map(([ key, val ]) => [ key, val])
)
console.log(toArrayObj)



/*

Object.getOwnPropertyDescriptor()

*/
let coolObject = {
    value: 'string'
}

const descriptor1 = Object.getOwnPropertyDescriptor(coolObject, 'value')
console.log(descriptor1)

//Another one example
let coolObject1 = {
    legs: 2,
    hands: 2
}

Object.defineProperty(coolObject1, 'head', {
    value: 1,
    writable: true
})
coolObject1.head = 'has a head'
console.log(coolObject1)

const descriptor2 = Object.getOwnPropertyDescriptor(coolObject1, 'head')
console.log(descriptor2)



/*

Object.getOwnPropertyDescriptors()

*/
let obj16 = {
    eyes: 2,
    nose: 1,
    hair: 13n
}

const descriptor3 = Object.getOwnPropertyDescriptors(obj16)
console.log(descriptor3)



/*

Object.getOwnPropertyNames()

*/
const coolNames = {
    Garold: 'good',
    Robert: 'good',
    Tyshawn: 'good'
};

Object.defineProperty(coolNames, 'Vanya', {
    value: 'good'
})

const descriptor4 = Object.getOwnPropertyNames(coolNames)
console.log(descriptor4);



/*

Object.getOwnPropertySymbols()

*/
const symbolObject = {}
const symbol1 = Symbol('first')
const symbol2 = Symbol('second')

symbolObject[symbol1] = 'One'
symbolObject[symbol2] = 'Two'
const symbols = Object.getOwnPropertySymbols(symbolObject)
//console.log(symbols.length)
console.log(symbols)



/*

Object.getPrototypeOf()

*/
var proto = {}
var obj17 = Object.create(proto)
//Object.getPrototypeOf(obj17)

if(Object.getPrototypeOf(obj17) === proto) {
    console.log(chalk.greenBright('Yes, it is!'))
}



/*

Object.hasOwn()

*/
//const obj18 = {};
//obj18.prop = 'newValue';
//console.log(Object.hasOwn(obj18, 'prop'))



/*

Object.hasOwnProperty()

*/
let obj19 = {
    oldValue: 'firstValue',
    newValue: 'secondValue'
}
//console.log(Object.hasOwnProperty(obj19, 'newValue')) //false

console.log(Object.hasOwnProperty.call(obj19, 'oldValue') + chalk.yellow(' - the value exists'))

delete obj19.oldValue 

console.log(Object.hasOwnProperty.call(obj19, 'oldValue') + chalk.yellow(' - the value was deleted'))

function deleteValue() {
    delete obj19.oldValue
}

if(Object.hasOwnProperty.call(obj19, 'oldValue') === true) {
    deleteValue()
    console.log('\'oldValue\' was deleted...')
} else if(Object.hasOwnProperty.call(obj19, 'oldValue') === false) {
    console.log(chalk.redBright('The value ' + chalk.underline('oldValue') + ' has already been deleted...'))
}

//console.log(Object.hasOwnProperty.call(obj19, 'oldValue'))



/*

Object.is()

*/
let obj20 = {
    smth: {
        data: 'SomeData'
    },
    smth: {
        data: 'SomeData'
    }
}

console.log(Object.is(obj20.smth, obj20.smth))

console.log(obj20.smth, obj20.smth)



/*

Object.isExtensible()

*/
let obj22 = {
    office1: {
        country: 'Poland(Warsaw)',
        table: 'many',
        chair: 'many',
        PC: 'many',
        PlayStation: 5
    }
}

obj22.office1.PlayStation = 5
obj22.office1.people = '89'
console.log(obj22)

const ice = Object.freeze(obj22)
console.log(ice === obj22)
console.log(chalk.blue('\'Obj22\' is frozen'))

//delete obj22
//obj22.office.PlayStation = 1913

console.log(Object.isExtensible(obj22))

//Another one example
let obj23 = Object.freeze({
    country: 'USA'
})

console.log(Object.isExtensible(obj23))

let obj24 = {
    country: 'Canada(Vancouver)'
}

console.log(Object.isExtensible(obj24))



/*

Object.isFrozen()

*/
console.log(Object.isFrozen(obj24), Object.isFrozen(obj23))

let obj25 = {
    country: 'Canada'
}

obj25.city = ''

Object.defineProperty(obj25, 'city', {
    value: 'Vancouver',
    writable: true
})

console.log(obj25)

if(obj25.city === 'Vancouver'){
    const ice1 = Object.freeze(obj25)
    console.log(ice1 === obj25)
}

console.log(Object.isFrozen(obj25))



/*

Object.prototype.isPrototypeOf()

*/
let obj26 = {
    ice_cream: 'chocolate',
    ice_cream1: 'mango',
    ice_cream2: 'caramel'
}

const protObj26 = Object.create(obj26, {
    drinks: {
        hotChocolate: {
            syrop: 'Mango',
            syrop1: 'Mint',
            syrop2: 'Salted caramel'
        }
    }
})

console.log(chalk.bgMagentaBright(chalk.yellow(protObj26.ice_cream)))

if(!obj26.isPrototypeOf(protObj26) === true){
    console.log(chalk.bgCyanBright('Yes')) //checking the second wrong 'if'
} else if(protObj26.isPrototypeOf(protObj26) === false) {
    console.log(chalk.bgYellowBright(chalk.black('No')))
}



/*

Object.isSealed()

*/
let obj27 = Object.freeze({
    thisValue: 'hello'
})
console.log(Object.isSealed(obj27))



/*

Object.keys()

*/
const someArr = [
    {
        user: 'Polina'
    },

    {
        user: 'Vanya'
    },

    {
        user: 'Gleb'
    }
]

console.log(Object.keys(someArr))

//Another one example
const obj29 = Object.create({}, {
    value: () => {
        this.tea
    }
})
obj29.tea = 'green'

console.log(Object.keys(obj29)) //['1']



/*

Object.preventExtensions()

*/
const obj30 = {
    bananas: 13,
    apples: 19
}

Object.preventExtensions(obj30)

try{
    Object.defineProperty(obj30, 'kumquat', {
        value: 33
    })
} catch(err) {
    console.error('ERROR:', err)
}



/*

Object.prototype.propertyIsEnumerable()

*/
const array1 = []
array1[0] = 'banana'

console.log(array1.propertyIsEnumerable([1]))

const object1 = {}
object1.newProp = 13

console.log(object1.propertyIsEnumerable('newProp'))



/*

Object.seal()

*/
const newObjSeal = {
    key1: 'one',
    key2: 'two',
    key3: 'three'
}
console.log(Object.seal(newObjSeal))
console.log(Object.isSealed(newObjSeal))
try{
    Object.defineProperty(newObjSeal, 'key4', {
        value: 'first'
    })
} catch(e) {
    console.error('Err:', e)
}

console.log(newObjSeal)



/*

Object.setPrototypeOf()

*/
let obj31 = {
    helloObj31(){
        return 'Hello! Whatever you want'
    }
}

let obj32 = {
    helloObj32: ['ice', 'tea']
}

Object.setPrototypeOf(obj32, obj31)

if(obj31.isPrototypeOf(obj32) === true) {
    console.log(chalk.bgBlueBright('Yeap'))
} else if(obj31.isPrototypeOf(obj32) === false) {
    console.error('Not')
}



/*

Object.prototype.toLocaleString()

*/
let arr = ['A dollar', ' An euro']
console.log(arr)

const toString = arr.toLocaleString()
console.log(toString)

//Another one example
let obj33 = [1.99, 2.99, 3.99]

console.log(chalk.green(obj33.toLocaleString('en-US',  {
        style: 'currency',
        currency: 'USD'
    })
))



/*

Object.prototype.toString()

*/
console.log({}.toString())
console.log(Object.prototype.toString.call([]))



/*

Object.prototype.valueOf()

*/
const smth3 = 'Something'
const smth4 = new Object(1)
const value1 = smth4.valueOf()

console.log(value1)
console.log(smth4)



/*

Object.values()

*/
let theLastObject = {
    array: ['ice-cream', 'ice-cream with chocolate'],
    object: {
        tea: 'green tea',
        tea1: {
            blackTea: 'Grinfild'
        }
    }
}

console.log(Object.values(theLastObject))

