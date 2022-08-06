import axios from "axios";
import { existsSync, mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import message from "../utils/log.mjs";
import rootDir from "../utils/url.mjs";

const codewarsAPI = axios.create({
    baseURL: "https://www.codewars.com/api/v1/code-challenges",
});

(async () => {
    const id = process.argv[2];
    const challenge = await codewarsAPI.get(`/${id}`).catch(() => {
        console.error(message.error("Failed to fetch data from Codewars API."));
        return null;
    });

    if (!challenge) {
        console.error(message.error("Invalid id or slug."));
    } else {
        const { slug, rank } = challenge.data;
        if (!rank) {
            console.error(message.error("Requested kata is not approved yet."));
        } else {
            const rankName = rank.name.replace(" ", "");
            const rankDir = join(rootDir, "solutions", rankName);
            const testRankDir = join(rootDir, "tests", rankName);
            const filename = join(rankDir, `${slug}.cjs`);
            const testFilename = join(testRankDir, `${slug}.test.cjs`);

            if (existsSync(filename) || existsSync(testFilename)) {
                console.error(message.error("File already exists."));
            } else {
                if (!existsSync(rankDir)) mkdirSync(rankDir);
                if (!existsSync(testRankDir)) mkdirSync(testRankDir);

                writeFileSync(filename, "");
                writeFileSync(testFilename, "");

                console.info(
                    message.success("Generated both solution and test files.")
                );
                console.info(message.info(`- ${filename}`, ""));
                console.info(message.info(`- ${testFilename}`, ""));
            }
        }
    }
})();
