const rootDir = new URL(import.meta.url).pathname
    .split("/")
    .slice(1, -2)
    .join("/");

export default rootDir;
