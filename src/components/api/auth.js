export const savedData=formData=>{
    fetch(`https://to-do-task-server-ochre.vercel.app/users/${formData.email}`,{
        method:"PUT",
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(formData)
    })
    .then(res=> res.json())
    .then(data=>{
        localStorage.setItem('token', data?.token)
    })
}