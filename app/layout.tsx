'use client';

import { Header } from '../src/components/header/Header';
import { Footer } from '../src/components/footer/Footer';
import { useEffect, useState, createContext } from 'react';
import { instance, defaultData } from '../src/api/api';
import { IData } from '../src/interfaces/interfaces';

export const DataContext = createContext<IData>(defaultData);
 
async function getData() {
    const data = await instance.get('/api/v1');
    return data;
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const [data, setData] = useState<IData>(defaultData);

    useEffect(() => {
        getData().then((d) => {
            setData(d.data);
        });
    }, []);

    return (
        <html>
            <head />
            <body className='scroll-style'>
                <DataContext.Provider value={data}>
                    <div className='container'>
                        <Header />
                        {children}
                    </div>
                    <Footer />
                </DataContext.Provider>
            </body>
        </html>
    );
}
