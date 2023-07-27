import fs from 'fs';
import { parse } from 'csv-parse';

import { dirname } from 'path';
import { fileURLToPath } from 'url';

export default async function (req, res) {
    const __dirname = dirname(fileURLToPath(import.meta.url));


    const soura = req.body || '18'
    try {
        const processFile = async () => {
            const records = [];
            const parser = fs
                .createReadStream(`${__dirname}/quran.csv`)
                .pipe(parse({
                    /* delimiter: ','  */
                }));


            parser.on('readable', function () {
                console.log({ readable: soura })

                let record; while ((record = parser.read()) !== null) {
                    // Work with each record

                    console.log({ while: record[0] })

                    if (record[0] === `${soura}` && records.length < 10) {
                        console.log({ record })

                        records.push(record);
                    }

                    else continue
                }
            });
            parser.on('error', function (err) {
                console.error(err.message);
            });

            /*  await finished(parser); */
            return records;
        }
        const records = await processFile()


        res.status(200).send({ records });
    } catch (error) {
        res.status(500).json({ error })
    }

} 