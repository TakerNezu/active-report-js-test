import * as fs from "fs";

const fileContent = fs.readFileSync(__dirname + "/db.json", "utf8");
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

  const text = JSON.stringify(preText)
  fs.writeFileSync(__dirname + './db.json', text)
}
