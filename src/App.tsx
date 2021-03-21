import React, { useCallback, useState } from 'react';
import { Layout } from 'components/layouts'
import { SearchFiled } from 'components/organisms';
import { Hotels } from "./types/hotels";

function App() {

    const [hotels, setHotels] = useState<Hotels>([])

    const handleHotels = useCallback((fetchedHotels: Hotels) => {
        setHotels([...fetchedHotels])
    }, [setHotels])

    console.log(hotels)
    return (
        <Layout>
            <SearchFiled handleHotels={handleHotels} />
            {hotels &&
                hotels.map((h, i) =>
                //  (
                //     <p style={{ borderBottom: '1px solid black' }} key={i}>
                //         (console.log(h))
                //     </p>
                // )
                {
                    (console.log(h))
                }
                )
            }
        </Layout>
    );
}

export default App;
