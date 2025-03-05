import readline from "node:readline";
import login from "./login";
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const userInput = async (question: string): Promise<string> => {
	return new Promise((resolve) => {
		rl.question(question, (answer) => {
			resolve(answer);
		});
	});
};

export const exit = () => {
	rl.close();
};

export default userInput;
