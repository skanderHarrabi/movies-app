// Convert time to hours and minutes
export const calcTime = (time: string): string => {
    const timeInNumber = parseInt(time.split(' ')[0]);
    const hours: number = Math.floor(timeInNumber / 60);
    const mins: number = timeInNumber % 60;
    return `${hours}h ${mins}m`;
};
