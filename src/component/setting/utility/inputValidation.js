export const checkValidity = (value, validationRule) => {

    if(validationRule.minLength) {
        const isValid = value.trim().length >= validationRule.minLength;
        if(!isValid) return false;
    }

    if(validationRule.required) {
        const isValid = value.trim() !== '';
        if(!isValid) return false;
    }

    if (validationRule.isUrl) {
        const pattern = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)/gi;
        const isValid = pattern.test(value);
        if(!isValid) return false;
    }

    return true;
}
