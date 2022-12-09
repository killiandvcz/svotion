export const uid = () => {
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

export const paragraph = (value = "", options = {}) => {
    return {
        id: uid(),
        type: 'paragraph',
        value,
        options,
        editable: true
    }
}

export const heading = (level = 2, value = "", options = {}) => {
    return {
        id: uid(),
        type: 'heading',
        params: {
            level
        },
        value,
        options,
        editable: true
    }
}

