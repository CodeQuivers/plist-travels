export const dateReverse = (dateString)=>{
    const words = dateString.split('/')
    return `${words[2]}/${words[0]}/${words[1]}`
}