import { Account, AtmCard, atmCardDb } from "./account";
import userInput from "./userInput";
const localLogginAttenpt = {
	count: 1,
};
const login = async (): Promise<
	boolean | { account: Account; atmCard: AtmCard }
> => {
	console.log("Wellcome to ABC BANK");
	console.log("Please insert your ATM Card");
	const valAtNumber: string = await userInput("Input your ATM Number: ");
	const valAtPin: string = await userInput("Input your PIN: ");

	const findAccountByAtmNumber = atmCardDb.find((atmCard) => {
		return (
			atmCard.pin === valAtPin &&
			atmCard.cardNumber === valAtNumber &&
			atmCard.account.isBlocked === false
		);
	});
	if (!findAccountByAtmNumber) {
		console.log("-----------------------------------");
		console.log("Your card number is invalid");
		console.log(`your attempt ${localLogginAttenpt.count++} / 3`);

		console.log("-----------------------------------");
		return false;
	}
	return {
		account: findAccountByAtmNumber.account,
		atmCard: findAccountByAtmNumber,
	};
};
export default login;
