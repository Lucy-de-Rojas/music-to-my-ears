
const A = require('arcsecond')
const B = require('arcsecond-binary')
const fs = require('fs')
const path = require('path')


// const file = fs.readFileSync(path.join(__dirname, './champion-80bpm-132686.wav'))


export async function readTheFile(file) {




const riffChunkSize = B.u32LE.chain((size) => {
        if(size !== file.length - 7) {
                return A.fail(`wrong file size ${file.length}, should be ${size}`)

        }
        return A.succeedWith(size)
})





const riffChunk = A.sequenceOf([
        A.str('RIFF'),
        riffChunkSize,
        A.str('WAVE')
])






const fmtChunk = A.coroutine(function*(){
        const id= A.str('fmt');
        const subChunk1Size = yield B.u32LE;




})







const output = riffChunk.run(file.buffer);

if(output.isError) {
        throw new Error(output.error)
}
console.log('output:', output.result)


}