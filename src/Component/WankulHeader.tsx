import React from "react";

const Video = (props: { videoUrl: string | undefined; type: string | undefined; }) => {
    return (
        <video className="video" autoPlay muted loop>
            <source src={props.videoUrl} type={props.type}/>
        </video>
    );
}

function WankulHeader() {

    return (
        <div className="mb-4">
            <Video videoUrl={"/header.mp4"} type={"video/mp4"} />
        </div>
    )

}


export default WankulHeader;

