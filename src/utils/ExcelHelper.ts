//import xlsx plugin
import * as Excel from 'xlsx';
import fs from 'fs';

//Define test data structure
interface TestRecord {
    Username: string,
    Password: string
}

//Create method to read excel file
export function readExcelFile(filePath: string) {
    //Read excel file as binary string
    const file = fs.readFileSync(filePath);
    //parse into the workbook
    const workbook = Excel.read(file);
    //get the first sheet
   const sheet= workbook.Sheets[workbook.SheetNames[0]];
    //convert sheet into json 
    const rawData: any[] = Excel.utils.sheet_to_json(sheet, { header: 1 })
    //convert raw data into TestRecord type
    const records: TestRecord[] = rawData.slice(1).map((column: any) => ({
        Username: column[0],
        Password: column[1]
    }));
    // return the test record in readExcelFile
    return records;
}