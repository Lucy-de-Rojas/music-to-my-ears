
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





// getting header data:
const fmtChunk = A.coroutine(function*(){
        const id= A.str('fmt');
        const subChunk1Size = yield B.u32LE;
        const audioFormat = yield B.u16LE;
        const numChannels = yield B.u16LE;
        const sampleRate = yield B.u32LE;
        const byteRate = yield B.u32LE;
        const blockAlign = yield B.u16LE;
        const bitPerSample = yield B.u16LE;

        // byte rate check:
        const expectedByteRate = sampleRate * bitPerSample * numChannels / 8;
        if(byteRate !== expectedByteRate) {
                yield A.fail(`Invalid rate: ${byteRate}, should be: ${expectedByteRate}`)
        }

        // block align check:
        const expectedBlockAlign = numChannels * bitPerSample /8;
        if(blockAlign !== expectedBlockAlign){
                yield A.fail(`Invalid block align: ${blockAlign}, should be ${expectedBlockAlign}`)
        }



        // returning values:
        return {
                id,
                subChunk1Size,
                audioFormat,
                numChannels,
                sampleRate,
                byteRate,
                blockAlign,
                bitPerSample
        }




})






const parser = A.sequenceOf([
        riffChunk,
        fmtChunk,
])



const output = riffChunk.run(file.buffer);

if(output.isError) {
        throw new Error(output.error)
}
console.log('output:', output.result)


}