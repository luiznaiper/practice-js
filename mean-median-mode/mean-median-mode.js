

//mean
let getMean = (list) =>{
       
    const addList = list.reduce((acc = 0, el ) => acc + el)
    const mean = addList / list.length
    return mean

}

//median
const getMedian = (list) => {
    
    const sortedList = list.sort((acc, el) => acc - el)
    const isEven =  () => sortedList.length % 2 == 0

    if(isEven()){
        const middleIndex = sortedList.length /2
        const secondMiddleIndex = middleIndex - 1
        const values = [sortedList[middleIndex], sortedList[secondMiddleIndex]]
        return getMean(values)
    } else {
        const middleValue = Math.floor(sortedList.length / 2)
        return sortedList[middleValue]
    }

}

//mode

const getMode = (list) => {
    const countList = {}

    list.map((el)=>{
        if(countList[el]){
            countList[el] +=1
        } else{
            countList[el] = 1
        }
        
    })

    const arrayList = Object.entries(countList).sort((acc, el) => acc[1] - el[1])
    console.log(arrayList)
    const mode = arrayList[arrayList.length-1]
    console.log(mode)

}
/*
// pondered mean

const getPonderedMean = (notes) =>{
    
    const notesWithCredit = notes.map((el) => el.note * el.credit)
    const sumeNotesWithCredit = notesWithCredit.reduce((acc = 0, el)=> acc + el)

    const credits = notes.map((el)=> el.credit) 
    const sumeCredits = credits.reduce((acc,el)=> acc + el)

    const ponderedMean = sumeNotesWithCredit / sumeCredits
    return ponderedMean
}

*/