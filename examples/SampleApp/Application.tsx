import React from 'react'
import { Provider } from 'react-redux'
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Application from './App'

const App = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <Application />
            </Provider>
        </SafeAreaProvider>
    )
}

export default App
