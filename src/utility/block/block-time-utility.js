export const isWithinBlockPeriod = (blockData) => {
    if (!blockData) return false

    const {startTime, endTime, selectedDays} = blockData

    if (!startTime || !endTime) return false

    const now = new Date()
    const currentDay = now.getDay() // 0 = Sunday, 1 = Monday, etc.

    if (selectedDays && selectedDays.length > 0 && !selectedDays.includes(currentDay)) {
        return false
    }

    const currentHours = now.getHours().toString().padStart(2, '0')
    const currentMinutes = now.getMinutes().toString().padStart(2, '0')
    const currentTime = `${currentHours}:${currentMinutes}`

    if (startTime <= endTime) {
        return currentTime >= startTime && currentTime <= endTime
    } else {
        return currentTime >= startTime || currentTime <= endTime
    }
}