import {fileURLToPath} from 'url'
import {dirname} from "path"

const __filename = fileURLToPath(import.meta.url);
export const DIRNAME = dirname(__filename);

export const nodeEnvTypes = {
    production: "production",
    development: "development"
}


export const bodyTypes = ['Sedan','SUV','Coupe']