export const required = value => {
    return value || typeof value === 'number' 
        ? undefined 
        : 'Campo obrigatório'
}

export const minLength = min => {
    return value => {
        return (value && value.length < min)
            ? `O campo deve ter no mínimo ${min} caracteres`
            : undefined;
    }
}

export const maxLength = max => {
    return value => {
        return (value && value.length > max)
            ? `O campo deve ter no máximo ${max} caracteres`
            : undefined;
    }
}

export const validMonth = value => {
    return (value < 1 || value > 12)
        ? 'Mês inválido'
        : undefined;
}