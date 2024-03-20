import { useEffect, useState } from "react"
import { getlistSongHome } from "../api"

export const useListSongHome = (params) => {
      const [data, setData] = useState([])
      async function fetchData() {
            const response = await getlistSongHome({ ...params })
            if (response.data.status) setData(response.data.data)
      }
      useEffect(() => {
            fetchData()
            // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [JSON.stringify(params)])
      return data
}