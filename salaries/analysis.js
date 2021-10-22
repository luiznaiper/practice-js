//choose element
const salariesColombia = colombia.map((el) => el.salary)

//order
const sortedSalariesColombia = salariesColombia.sort((acc, el) => acc - el)

//even
const isEven =  () => sortedSalariesColombia.length % 2 === 0

//top 10 
const spliceStart = (sortedSalariesColombia.length * 90) /100
const spliceCount = sortedSalariesColombia.length - spliceStart

const salariesColTop10 = sortedSalariesColombia.splice(spliceStart, spliceCount)
console.log(salariesColTop10)

//mean
let getAverage = (list) =>{
       
    const addList = list.reduce((acc = 0, el ) => acc + el)
    const mean = addList / list.length
    return mean

}

// median
const getMedian = (list) => {
    
    const sortedList = list.sort((acc, el) => acc - el)
    const isEven =  () => sortedList.length % 2 == 0

    if(isEven()){
        const middleIndex = sortedList.length /2
        const secondMiddleIndex = middleIndex - 1
        const values = [sortedList[middleIndex], sortedList[secondMiddleIndex]]
        return getAverage(values)
    } else {
        const middleValue = Math.floor(sortedList.length / 2)
        return sortedList[middleValue]
    }

}



