const onSubmitHandler = (e) =>{
    e.preventDefault()
    const productObj = {
        "productName" : e.target.productName.value
    }
    axios.post('http://localhost:4000/products',productObj)
    .then((res)=>{
        
        console.log('product object :', res.data.product)

        console.log("product name:", res.data.product.productName)
    })
    .catch((err)=>{
        console.log(err)
    })
}


