import { AtmCard, Account } from "./utils/account";
import login from "./utils/login";
import { showMenu } from "./utils/showMenu";
import { exit } from "./utils/userInput";

let logginAttenpt: number = 0;
const main = async () => {
	if (logginAttenpt >= 3) {
		console.log(
			`You have exceeded the maximum login attempts ${logginAttenpt} Your Acount has been blocked`
		);
		exit();
	}
	const isAuthenticated = await login();

	if (!isAuthenticated) {
		logginAttenpt += 1;
		return main();
	}

	const { account, atmCard } = isAuthenticated as {
		account: Account;
		atmCard: AtmCard;
	};

	showMenu(account, atmCard);
};

main();
