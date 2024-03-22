import { useEffect, useState } from "react"
import { getDetailSong } from "../api"

export const useDetailSong = (_id) => {
      const [data, setData] = useState({})
      async function fetchData() {
            const response = await getDetailSong({ _id })
            if (response.data.status) setData(response.data.data)
      }
      useEffect(() => {
            if (_id) fetchData()
      }, [_id])
      return data
}