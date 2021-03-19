import axios from 'axios'
import { APP_ID, BASE_URL } from 'rakuten/config'

export const searchHotels = async (keyword: string): Promise<void> => {
    try {
        const res = await axios.get(BASE_URL + '&applicationId=' + APP_ID + '&keyword=' + keyword)
        console.log(res)
    } catch (e) {
        console.error(e)
    }
}