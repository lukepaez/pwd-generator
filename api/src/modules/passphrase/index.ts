import * as phrase from 'generate-passphrase';

export const getPassphrase = () => {
    const passphrase = phrase.generate({
        length: 3,
        numbers: true,
        separator: '-',
        uppercase: false,
        titlecase: true,
    });

    return { passphrase: passphrase };
};
