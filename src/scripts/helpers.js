function generateId() {
    const now = Date.now();
    return `button-${now}-${Math.round(Math.random() * now)}`
}