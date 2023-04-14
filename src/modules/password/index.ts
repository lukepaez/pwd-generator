import * as pwd from 'generate-password';

export const getPassword = () => {
    const password = pwd.generate({
        length: 10,
        numbers: true,
        symbols: true,
        lowercase: true,
        uppercase: true,
        excludeSimilarCharacters: true,
        exclude: '',
        strict: false,
    });
    return { password: password };
};
