import { Account, AtmCard } from "./account";
import { showMenu } from "./showMenu";

export const checkAccountInfo = (account: Account, atmCard: AtmCard) => {
	console.log(`Your Account Info:\n   
    Name: ${account.name}
    Account Number: ${account.accountNumber}
    Email: ${account.email}
    Phone: ${account.phone}
    `);
	console.log("------------------------------------");
	showMenu(account, atmCard);
};
