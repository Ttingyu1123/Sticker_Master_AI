import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.resolve(__dirname, 'node_modules/@imgly/background-removal-data/dist');
const destDir = path.resolve(__dirname, 'public/imgly-data');

function copyDir(src, dest) {
    if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
    }

    const entries = fs.readdirSync(src, { withFileTypes: true });

    for (let entry of entries) {
        const srcPath = path.join(src, entry.name);
        const destPath = path.join(dest, entry.name);

        if (entry.isDirectory()) {
            copyDir(srcPath, destPath);
        } else {
            console.log(`Copying ${entry.name}...`);
            fs.copyFileSync(srcPath, destPath);
        }
    }
}

try {
    if (fs.existsSync(srcDir)) {
        console.log(`Copying assets from ${srcDir} to ${destDir}...`);
        copyDir(srcDir, destDir);
        console.log('Assets copied successfully!');
    } else {
        console.error(`Source directory not found: ${srcDir}`);
        console.error('Please ensure @imgly/background-removal-data is installed.');
        process.exit(1);
    }
} catch (error) {
    console.error('Error copying assets:', error);
    process.exit(1);
}
