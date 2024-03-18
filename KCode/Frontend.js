import { StartFunc as StartFuncReadDataSchema } from "./ReadDataSchema.js";
import { StartFunc as StartFuncCrudGenerator } from "./CrudGenerator/Frontend.js";

let LocalFilesArray = StartFuncReadDataSchema();
console.log("LocalFilesArray : ", LocalFilesArray);
StartFuncCrudGenerator({ inFilesArray: LocalFilesArray });
// console.log("aaaaaaaaaa : ", LocalFilesArray);
7