
export default function Youtube({ video }) {
    return(
        <iframe width="550" height="550" src={video} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
        </iframe>
    )
}