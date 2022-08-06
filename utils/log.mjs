import chalk from "chalk";

const message = {
    error: (message, prefix = "ERROR: ") =>
        chalk.red.bold(prefix) + chalk.red(message),
    success: (message, prefix = "SUCCESS: ") =>
        chalk.green.bold(prefix) + chalk.green(message),
    info: (message, prefix = "INFO: ") =>
        chalk.cyan.bold(prefix) + chalk.cyan(message),
};

export default message;
