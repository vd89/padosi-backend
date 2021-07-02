import crypto from 'crypto';

export const generateRandomSring = (length) => {
	return crypto
		.randomBytes(Math.ceil(length / 2))
		.toString('hex')
		.slice(0, length);
};
