
interface BackgroundVideoProps {
    videoSource:any;
    children:any;
    blur:any;  
}

const BackgroundVideo = ({ videoSource, children, blur }: BackgroundVideoProps) => {
    return (
        <>
      <div className='container'>
        <video
          style={{ filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
          autoPlay
          loop
          muted
          // ref={video}
          id="video-id"
          className='video' 
          >
          {/* TODO make it accept multiple media types */}
          <source src={videoSource} type="video/mp4" />
            Your browser does not support the video tag.
      </video>
        {children}
      </div>
    </>
    )
}
export default BackgroundVideo