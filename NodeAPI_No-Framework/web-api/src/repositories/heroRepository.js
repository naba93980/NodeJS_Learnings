import { readFile, writeFile } from 'node:fs/promises'

export default class HeroRepository {
    constructor({ file }) {
        this.file = file
    }

    async #currentFileContent() {
        const fileData = await readFile(this.file)
        return JSON.parse(fileData)
    }

    find() {
        return this.#currentFileContent();
    }

    async create(data) {
        const currentFile = await this.#currentFileContent();
        currentFile.push(data)
        await writeFile(this.file, JSON.stringify(currentFile));
        return data.id;
    }
}
