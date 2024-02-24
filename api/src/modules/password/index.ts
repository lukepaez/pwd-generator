import * as pwd from 'generate-password';

export const getPassword = (headers: any) => {
    const password = pwd.generate({
        length: parseInt(headers.length),
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
