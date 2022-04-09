import React from 'react'

export const getStaticProps = async ({ params }) => {
    const person = data.filter(p => p.id.toString() === params.id)
    return {
        props: {
            speaker: person[0]
        }
    }
}

export const getStaticPaths = async () => {
    const paths = data.map(p => ({
        params: { id: p.id.toString() }
    }))

    return { paths, fallback: false }
}


const Player = () => {
    return (
        <div>Player</div>
    )
}

export default Player