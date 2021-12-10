import React, { useState, useEffect, useRef } from 'react'
import { styled } from '@storybook/theming';

interface ContentBoxProps {
    /**
     * Title of ContentBox
     */
    title: string;
    /**
     * Text inside ContentBox
     */
    text: string;

     /**
     * Source image
     */
    imageSource: string;

    /**
     * Size of the image
     */
     imageSize: number;


    isPrimary: boolean;

}

const Container = styled.div({
    width: "100%",
   // margin: "5px"
 //  display: "flex",
});

const TopMargin = styled.div({
    height: "0",
    marginLeft: "75px",
    borderBottom: "20px solid black",
    borderLeft: "20px solid transparent",
    display: "flex",
    flexDirection: "row-reverse",
})

const HeaderTopMargin = styled.div({
    height: "0",
  //  marginLeft: "px",
    borderBottom: "20px solid red",
    borderLeft: "20px solid transparent",
})

const HeaderContainer = styled.div({
    display: "flex",
    flexDirection: "row",
   // width: "100%"
})  

const LeftSideContainer = styled.div({
    display: "flex", 
    flexDirection: "column",
})

const RightSideContainer = styled.div({
    display: "flex", 
    flexDirection: "column-reverse",
})

const Headline = styled.h1({
    background: 'red',
    height: "100%",
    margin: "0px",
    paddingTop: "15px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    display:"table",
})

const Rectangle = styled.div({
    width: "0",
    height: "0",
    borderBottom: "20px solid red",
    borderLeft: "20px solid transparent",
})

const Rectangle2 = styled.div({
    width: "0",
    height: "0",
    borderTop: "20px solid red",
    borderRight: "20px solid black",
})

const Rectangle3 = styled.div({
    width: "inherit",
    height: "inherit",
    overflow: "hidden",
})

const MarginMiddle = styled.div({
    minHeight: "10px",
    width: "100%",   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
})

const TextBlockContainer = styled.div({
    display: "flex",
    flexDirection: "row"
})

const Image = styled.img({
    position: "absolute",
})

const Image2 = styled.img({
    marginTop: "10px",
})



const ContentBox = ({ title, text, imageSource, imageSize }: ContentBoxProps) => {

    const [hasImage, setHasImage] = useState(false)
    const [width, setWidth] = useState<number>(() => 0)

    const _BREAK_POINT = 620

    useEffect(() => {
        console.log(window.innerWidth)
        setWidth(window.innerWidth)
    },[])


    return (
        <Container>
            <TopMargin>
               {(hasImage && width > _BREAK_POINT) && <Image style={{width: `${imageSize}px`, height: `${imageSize}px`}} src={imageSource}  />}
            </TopMargin>
            <HeaderContainer>
                <LeftSideContainer>
                    <Rectangle />
                    <div style={{width: "100%", height: "100%", backgroundColor: "red"}}></div>
                </LeftSideContainer>
                <Headline>{title}</Headline>
                <RightSideContainer>
                    <Rectangle2 />
                    <div style={{width: "100%", height: "100%", backgroundColor: "red"}}></div>
                </RightSideContainer>
                <div style={{ flexGrow: "1", minWidth: "10px",backgroundColor: "black"}}></div>
            </HeaderContainer>
            <MarginMiddle >
                {(hasImage &&  width < _BREAK_POINT) && <Image2 style={{width: `${imageSize}px`, height: `${imageSize}px`}} src={imageSource}  />}
            </MarginMiddle>
            <TextBlockContainer>
                <div style={{width:"100%", backgroundColor: "black"}}>
                    <p style={{marginRight: `${hasImage ? ( (width < _BREAK_POINT)  ? "10px" :   imageSize-50 +10 ) : "10px"}px`,  color:"white",textAlign: "justify", marginLeft: "10px", marginBottom: "15px"}}>{text}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{flexGrow: 1, backgroundColor: "black"}}></div>
                    <Rectangle3 style={{borderTop: `50px solid black`, borderRight: `50px solid transparent`,}}/>
                </div>
            </TextBlockContainer>
        </Container>
    )
};

export default ContentBox;




{/**
      <Image style={{width: `${imageSize}px`, height: `${imageSize}px`}} src={imageSource}  />

  <HeaderContainer>
                <div style={{width: "100%", display: "flex", flexDirection: "row"}}>
                    <Rectangle ></Rectangle>
                    <div style={{backgroundColor: "red"}}></div>
                </div>
                <div>
                    <div>
                        <Headline>WHAT IS AN IOTABOT?</Headline>
                    </div>
                    <div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div></div>
            </HeaderContainer>
            <TextBoxContainer>

            </TextBoxContainer>

*/}