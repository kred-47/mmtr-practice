function generateId(object) {
    const now = Date.now();

    return `${object}-${now}-${Math.round(Math.random() * now)}`
}