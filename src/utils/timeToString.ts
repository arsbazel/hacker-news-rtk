const options = {
        year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    timezone: 'UTC',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
} as const

export const getTimeString = (sec: number) => {
   const date = new Date(sec * 1000)
    return date.toLocaleTimeString("en", options)
}