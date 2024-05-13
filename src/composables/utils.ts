function generateRandomPassword(length = 12): string {
    // Define the characters to be used in the password
    const numbers = '0123456789';
    const upperCaseLetters = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // Excluding "I" and "O" to prevent confusion with 1 and 0
    const lowerCaseLetters = 'abcdefghijkmnopqrstuvwxyz'; // Excluding "l" to prevent confusion with I
    const specialCharacters = '!@#$%^&*()_+-=[]{}|;:",.<>?';

    // Combine all characters into a single string
    const allCharacters = numbers + upperCaseLetters + lowerCaseLetters + specialCharacters;

    // Function to generate a random character from a string
    const getRandomCharacter = (characters: string) => {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    };

    // Ensure the password contains at least one character from each category
    const randomPassword = [
        getRandomCharacter(numbers),
        getRandomCharacter(upperCaseLetters),
        getRandomCharacter(lowerCaseLetters),
        getRandomCharacter(specialCharacters)
    ];

    // Generate the rest of the password by random selection from all characters
    for (let i = 4; i < length; i++) {
        randomPassword.push(getRandomCharacter(allCharacters));
    }

    // Shuffle the generated password to ensure randomness
    for (let i = randomPassword.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [randomPassword[i], randomPassword[j]] = [randomPassword[j], randomPassword[i]];
    }

    return randomPassword.join('');
}

export { generateRandomPassword };