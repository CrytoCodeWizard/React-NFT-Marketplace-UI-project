import { styled } from '@mui/system';


interface BackgroundVideoProps {
    /**
     * Video Source
     */
    videoSource:any;
    /**
     * Childcomponent center in Video
     */
    children:any;
    /**
     * Blurlevel
     */
    blur:any;  
}

export const BackgroundVideo = ({ videoSource, children, blur }: BackgroundVideoProps) => {
    return (
        <>
      <Wrapper style={{color: "white"}} >
        <InnerWrapper >
          <video
            style={{width: '100%', height: '100%',filter: `blur(${blur}px)`, WebkitFilter: `blur(${blur}px)` }}
            autoPlay
            loop
            muted
            id="video-id"
            >
            {/* TODO make it accept multiple media types */}
            <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
          </video>
          <VideoOverlay >{children}</VideoOverlay>
        </InnerWrapper>
      </Wrapper>
    </>
    )
}

const Wrapper = styled('div')({
  width: "100%",
  height: "100%",
  textAlign: "center",
})

const InnerWrapper = styled('div')({
  display: "inline-block",
  position: "relative",
  width: "100%",
  height: "100%",
})

const VideoOverlay = styled('div')({
  position: "absolute",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  left: "0px",
  top: "0px",
  width: "100%",
  height: "100%",
  fontSize: "inherit",
  color: "inherit"
})



