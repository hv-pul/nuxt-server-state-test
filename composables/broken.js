const brokenRef = new ref(null);

if (!brokenRef.value) {
    brokenRef.value = {
        val: Math.random(),
        time: Date.now()
    }
}

export const useBroken = () => {
    return brokenRef.value;
}
