const firePixelsArrray = []
const fireWidth = 2
const fireHeigth = 3

function start(){
    createFireDataStructure()
    console.log(firePixelsArrray)
}

function createFireDataStructure(){
    const numberOfPixels = fireWidth * fireHeigth
    for (let i = 0; i < numberOfPixels;  i++) {
     firePixelsArrray[i] = 0  
    }
}

function calculateFirePropagation(){

}

function renderFire(){

}