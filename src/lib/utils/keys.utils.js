export const resetKeys = () => {
    return {
        ctrl: false,
        alt: false,
        shift: false,
        meta: false,
        previous: [],
    };
};

export const setKeys = (keys, currentKey) => {
    return {
        ctrl: currentKey === "control" ? true : keys.ctrl,
        alt: currentKey === "alt" ? true : keys.alt,
        shift: currentKey === "shift" ? true : keys.shift,
        meta: currentKey === "meta" ? true : keys.meta,
        previous: setPrevious(keys.previous, currentKey),
    }
}

export const setPrevious = (previous, currentKey) => {
    if (previous.length > 2) {
        previous.shift();
    }
    previous.push(currentKey);
    return previous;
}

export const unsetKeys = (keys, currentKey) => {
    return {
        ctrl: currentKey === "control" ? false : keys.ctrl,
        alt: currentKey === "alt" ? false : keys.alt,
        shift: currentKey === "shift" ? false : keys.shift,
        meta: currentKey === "meta" ? false : keys.meta,
        previous: keys.previous,
    }
}

export const getPrevious = (keys) => {
    if (keys.previous.length > 0) {
        return keys.previous[keys.previous.length - 1];
    } else {
        return false;
    }
}

export const getLastKey = (keys) => {
    if (keys.previous.length > 0) {
        return keys.previous[keys.previous.length - 1];
    } else {
        return false;
    }
}