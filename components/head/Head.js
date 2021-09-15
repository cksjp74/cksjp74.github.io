import defaultHead from 'next/head'

export default function Head() { // override the dedault next head
    return (
        <defaultHead>
            <title>CKSJP</title>
            <link rel="icon" href="/favicon.ico" />
        </defaultHead>
    )
}