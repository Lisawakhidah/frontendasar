// const arraySaya = ['😂','😘','🤣','😒','😁','❤️']
// const newArraySaya = Array.from(arraySaya)

// newArraySaya[0]='😎'
// console.log({arraySaya})
// console.log({newArraySaya})

// const arraySaya = ['🍌', '10',{tomato:true},['eat','food'],]

// // console.log({arraySaya})
// console.log(arraySaya[3][1])

// const arraySaya = ['🍌', '10',{tomato:function(){
//     console.log('ini tomat')
// },
// },['eat','food'],]

// console.log(arraySaya[2].tomato)

// const arraySaya = ['🍌','🍇','🥑','😎']
// const arrayKamu = ['😡','👺','😎']

// const mergeArray = arraySaya.concat(arrayKamu)
// // for (list in mergeArray) console.log(list)
// mergeArray.map((value, index)=> console.log(value, index))

const datas =[
    {
        name: 'lisa wakhidah',
        stack: 'Html,CSS,JS',
        age: 14,
    },
    {
        name: 'zen',
        stack: 'Perkantoran',
        age: 12,
    },
    {
        name: 'zaki',
        stack: 'Dart',
        age: 10,
    },
]

// datas.map((values, index) => {
//     console.log(values.name, values.stack)
// })

// datas.sort((a,b) => b.age -a.age).map(values=>console.log(values))
datas.filter((x) => x.age>=12).map(values=>console.log(values))