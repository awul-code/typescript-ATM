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
export const accountDb: Account[] = [accountA, accountB];
export const atmCardDb: AtmCard[] = [atmCardA, atmCardB];

export type { Account, AtmCard };
