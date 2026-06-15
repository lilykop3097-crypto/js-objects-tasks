// BEGIN
<<<<<<< HEAD
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function makeJSON() {
  const filePath = path.join(__dirname, 'example.json');
  const jsonString = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonString);
=======
export default function makeJSON() {
    return {
        "files": [
          "src/objects.js"
        ],
        "config": true
    }
>>>>>>> 7f06b0219ce3ba8878984c4b2bc8c461b38ec635
}

// END