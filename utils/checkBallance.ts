import { Account, AtmCard } from "./account";
import { showMenu } from "./showMenu";

export const checkBallance = (account: Account, atmCard: AtmCard) => {
	console.log(
		`Your ballance is ${account.balance.toLocaleString("id-ID", {
			style: "currency",
			currency: "IDR",
		})}`
	);
	console.log("------------------------------------");
	showMenu(account, atmCard);
};
