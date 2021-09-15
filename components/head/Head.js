import head from 'next/head'

export default function() { // override the dedault next head
    return (
        <head>
            <title>CKSJP</title>
            <link rel="icon" href="/favicon.ico" />
        </head>
    )
}