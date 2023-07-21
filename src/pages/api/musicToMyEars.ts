import type { NextApiRequest, NextApiResponse } from 'next'

// to get file from the front:
import {IncomingForm} from 'formidable';



// import readTheFile helper:
import { readTheFile} from '../../../src/utils/readFile';



// stop default body parsing:
export const config = {
  api: {
    bodyParser: false,
  },
}





type Data = {
  name: string
}





const asyncParse = (req:NextApiRequest) =>
  new Promise((resolve, reject) => {
    const form = new IncomingForm({ multiples: false});
    form.parse(req, (err, fields, files) => {
      if (err) return reject(err);
      // console.log('inside parser!');
      resolve({ fields, files });
    });
  });






export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {


  console.clear()

  console.log('back end!')

  let result:any = await asyncParse(req);
  let outcome = result.files.file[0];
  console.log('result:', outcome, outcome.newFilename, outcome.originalFilename, typeof outcome.newFilename);







  // paring the file 🟥🟥🟥🟥🟥:
  // readTheFile(outcome.newFilename);


















  res.status(200).json({ name: 'John Doe' })
}
