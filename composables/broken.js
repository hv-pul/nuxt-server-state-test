const brokenRef = new ref(null);

export const useBroken = () => {
    if (!brokenRef.value) {
        brokenRef.value = {
            val: Math.random(),
            time: Date.now()
        }
    }

    return brokenRef;
}
