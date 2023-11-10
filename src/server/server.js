import axios from "axios";
import baseUrl from "./baseUrl";
export default async function server(
    enpoint = "",
    method = "",
    data = null
) {
    let result , error
    await axios
        .request({
            baseURL: baseUrl + enpoint,
            method:method,
            data:data
        })
        
        .then((res)=>{
            result  =  res
        })
        .catch((error)=>{
            console.log(error);
        })
        .finally(()=>{
            console.log(result);
        });
        return new Promise ((resolve,reject)=>{
            if(result) resolve(result);
            else reject(error) 
        })
}