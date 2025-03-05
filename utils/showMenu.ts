import { Account, AtmCard } from "./account";
import { checkAccountInfo } from "./checkAccountInfo";
import { checkBallance } from "./checkBallance";
import userInput, { exit } from "./userInput";

export const showMenu = async (account: Account, atmCard: AtmCard) => {
	console.log("\n-----------------------------");
	console.log("1. Check ballance");
	console.log("2. Yout account Info");
	console.log("3. Exit");
	console.log("-----------------------------\n");

	// Save input user here.
	const valSelectedMenu = await userInput("Select menu: ");
	switch (Number(valSelectedMenu)) {
		case 1:
			checkBallance(account, atmCard);
			break;
		case 2:
			checkAccountInfo(account, atmCard);
			break;
		case 3:
			console.log("Goodbye 🤞");
			exit();
			break;
		default:
			console.log("Invalid input");
			break;
	}
};
