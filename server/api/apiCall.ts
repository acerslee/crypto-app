import axios from 'axios'

export const getTicker = async(ticker: string) => {
    const response = await axios.get(`https://api.polygon.io/v1/open-close/crypto/BTC/USD/2020-10-14?adjusted=true&apiKey=${process.env.KEY}`)

}