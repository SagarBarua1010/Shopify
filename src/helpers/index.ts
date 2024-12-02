export const getData=async(endpoint:string)=>{
    const response = await fetch (endpoint,{
        method:'GET',
        headers:{
            'Content-type':'application/json',
        },
    });
    const data = await response?.json();
    return data; 
}