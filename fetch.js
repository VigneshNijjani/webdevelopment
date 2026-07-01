//fetchings
let a=async()=>{
    try {
        let api=await fetch("https://fakestoreapi.com/products")
        let data=await api.json()
        console.log(data)
        let p =document.getElementsByTagName(p)
        p.t
    } catch (error) {
        console.log(error)
    }
}
