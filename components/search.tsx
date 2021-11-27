import React, { useState, useRef } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import axios from 'axios'

const Search = () => {

    const [ ticker, setTicker ] = useState<string>('')

    const tickerRef = useRef(null)

    const submitTicker = async () => {
        try {
            const response = await axios.get('http:/localhost:3000/tickers')
            console.log(response.data)
        } catch(err) {
            console.error(err)
        }
    }

    return(
        <View>
            <TextInput
                ref={tickerRef}
                style={styles.input}
                onChangeText={setTicker}
                value={ticker}
                placeholder={'Enter ticker symbol'}
            />
            <Button
                onPress={submitTicker}
                title='Submit'
                accessibilityLabel='Submit to retrieve ticker data'
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

    },
    input: {

    },
    button: {

    },
})

export default Search
