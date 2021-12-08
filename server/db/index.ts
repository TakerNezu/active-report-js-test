import * as fs from "fs";
import fastify from "fastify";

const fileContent = fs.readFileSync(process.env.SERVER_ABSOLUTE_PATH + "db/db.json", "utf8");
interface Data {
  taxExemptLocation: string
}
export const jsonData = JSON.parse(fileContent) as Data

export function dataSet(key: string, value: string) {
  let preText: Object
  if (jsonData.hasOwnProperty(key)) {
    const propertyKey = key as keyof Data
    // 既存のJsonDataが既にキーを持っている場合は、
    jsonData[propertyKey] = value
    preText = jsonData
  } else {
    preText = {[key]: value}
  }

  console.log(preText)
  const text = JSON.stringify(preText)
  console.log(text)
  fs.writeFileSync(process.env.SERVER_ABSOLUTE_PATH + 'db/db.json', text)
}
