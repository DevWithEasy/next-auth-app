export default function handleInput(e,data,setData){
    const {name,value} = e.target
    const newData = {...data}
    newData[name] = value
    setData(newData)
}