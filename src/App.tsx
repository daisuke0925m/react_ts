import React, { useCallback, useState } from 'react';
import logo from './logo.svg';
import { Layout } from 'components/layouts'
import { SearchFiled } from 'components/organisms';
import { Hotels } from "./types/hotels";

function App() {

    const [hotels, setHotels] = useState<Hotels>([])

    const handleHotels = useCallback((fetchedHotels: Hotels) => {
        setHotels([...fetchedHotels])
    }, [setHotels])


    return (
        <Layout>
            <SearchFiled handleHotels={handleHotels} />
        </Layout>
    );
}

export default App;
