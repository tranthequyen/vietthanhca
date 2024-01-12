// import { login } from "../api"
// import { useEffect, useState } from 'react'
// export const useLogin = (params) => {
//       const [data, setData] = useState([])
//       async function fetchData() {
//             const response = await login({ status: 1, ...params })
//             if (response.data.status) setData(response.data.data)
//       }
//       useEffect(() => {
//             fetchData()
//       }, [JSON.stringify(params)])
//       return data
// }