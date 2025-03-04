import readline from "node:readline";
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

interface Account {
	id: string;
	name: string;
	accountNumber: number;
	phone: string;
	email: string;
	password: string;
	balance: number;
	isBlocked: boolean;
}

interface AtmCard {
	id: string;
	account: Account;
	pin: string;
	cardNumber: string;
}

const accountA: Account = {
	id: "1",
	name: "ilham",
	accountNumber: 1,
	email: "ilham@mail.com",
	password: "123456",
	phone: "08123456789",
	balance: 1000000,
	isBlocked: false,
};

const accountB: Account = {
	id: "2",
	name: "nopi",
	accountNumber: 2,
	email: "nopu@mail.com",
	password: "123456",
	phone: "08123344556",
	balance: 1000000,
	isBlocked: false,
};

const atmCardA: AtmCard = {
	id: "1",
	account: accountA,
	pin: "123456",
	cardNumber: "ATM001",
};
const atmCardB: AtmCard = {
	id: "2",
	account: accountB,
	pin: "123456",
	cardNumber: "ATM002",
};
const accountDb: Account[] = [accountA, accountB];
const atmCardDb: AtmCard[] = [atmCardA, atmCardB];

// function menerima input user

const checkBallance = (account: Account, atmCard: AtmCard) => {
	console.log(`Your ballance is ${account.balance}`);
	console.log("------------------------------------");
	showMenu(account, atmCard);
};
const exit = () => {
	rl.close();
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
		return false;
	}
	return {
		account: findAccountByAtmNumber.account,
		atmCard: findAccountByAtmNumber,
	};
};

const showMenu = async (account: Account, atmCard: AtmCard) => {
	console.log("\n-----------------------------");
	console.log("1. Check ballance");
	console.log("2. Exit");
	console.log("-----------------------------\n");

	// Save input user here.
	const valSelectedMenu = await userInput("Select menu: ");

	switch (Number(valSelectedMenu)) {
		case 1:
			checkBallance(account, atmCard);
			break;
		case 2:
			exit();
			break;
		default:
			console.log("Invalid input");
			break;
	}
};

let logginAttenpt: number = 0;

const main = async () => {
	if (logginAttenpt >= 3) {
		console.log("Yout have try 3 times, Your account has been blocked");
		exit();
	}

	const isAuthenticated = await login();

	if (!isAuthenticated) {
		logginAttenpt += 1;
		console.log(
			`You have try ${logginAttenpt} times, Your card number is invalid`
		);
		return main();
	}

	const { account, atmCard } = isAuthenticated as {
		account: Account;
		atmCard: AtmCard;
	};

	showMenu(account, atmCard);
};

main();
