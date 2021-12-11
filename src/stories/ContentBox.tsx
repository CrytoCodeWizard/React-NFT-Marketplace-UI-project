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
     * Check if image is used
     */
    hasImage: boolean;
     /**
     * Source image
     */
    imageSource: string;

    /**
     * Size of the image (px)
     */
     imageSize: number;

    /**
     * Color background
     */
     backgroundColor: string;

    /**
     * Color background headline
     */
     headerBackgroundColor: string;
    /**
     * Height topbar
     */
     topBarHeight: string;
     /**
     * MarginLeft topbar
     */
     topBarMarginLeft: string;
     /**
      * Margin bottom textblock
      */
     textMarginBottom: string;

     /**
      * Margin left textblock
      */
     textMarginLeft: string;
     /**
      * Margin right textblock
      */
     textMarginRight: string;

     /**
      * Padding text/image in px
      */
      textPaddingImage: number;
     /**
      * Breaktpoint (px)
      */
      breakPoint: number;

    /**
    * Size of edge bottom right (in px)
    */
    edgeRightBottomSize: number;
}

const Container = styled.div({
    width: "100%",
});

const TopMargin = styled.div({
    height: "0",
    display: "flex",
    flexDirection: "row-reverse",
}) 

const HeaderContainer = styled.div({
    display: "flex",
    flexDirection: "row",
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
    height: "100%",
    margin: "0px",
    paddingTop: "10px",
    paddingLeft: "10px",
    paddingBottom: "10px",
    display:"table",
})

const Rectangle = styled.div({
    width: "0",
    height: "0",
    borderLeft: "20px solid transparent",
})

const Rectangle2 = styled.div({
    width: "0",
    height: "0",
})

const Rectangle3 = styled.div({
    width: "inherit",
    height: "inherit",
})

const MarginMiddle = styled.div({
    minHeight: "10px",
    width: "100%",   
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
})

const TextBlockContainer = styled.div({
    display: "flex",
    minHeight: "75px",
    flexDirection: "row"
})

const Image = styled.img({
    position: "absolute",
})

const Image2 = styled.img({
    marginTop: "10px",
    maxWidth:"100%"
})


export const ContentBox = ({ 
    title, 
    text,
    hasImage,
    imageSource,
    imageSize, 
    backgroundColor,
    headerBackgroundColor,
    topBarHeight, 
    topBarMarginLeft,
    textMarginBottom,
    textMarginRight,
    textMarginLeft,
    textPaddingImage,
    breakPoint,
    edgeRightBottomSize,
}: ContentBoxProps) => {
    const [width, setWidth] = useState<number>(window.innerWidth)

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth)
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
      }, []);
      
    return (
        <Container>
            <TopMargin style={{borderBottom:`${topBarHeight} solid ${backgroundColor}`,borderLeft:`${topBarHeight} solid transparent`,marginLeft:`${topBarMarginLeft}`}}>
               {(hasImage && width > breakPoint ) && <Image style={{width: `${imageSize}px`, height: `${imageSize}px`}} src={imageSource}  />}
            </TopMargin>
            <HeaderContainer>
                <LeftSideContainer>
                    <Rectangle style={{borderBottom: `20px solid ${headerBackgroundColor}`}} />
                    <div style={{width: "100%", height: "100%", backgroundColor: `${headerBackgroundColor}`}}></div>
                </LeftSideContainer>
                <Headline style={{background: `${headerBackgroundColor}`}}>{title}</Headline>
                <RightSideContainer>
                    <Rectangle2 style={{ borderRight: `20px solid ${backgroundColor}`,borderTop: `20px solid ${headerBackgroundColor}`}}/>
                    <div style={{width: "100%", height: "100%", backgroundColor: `${headerBackgroundColor}`}}></div>
                </RightSideContainer>
                <div style={{ flexGrow: "1", minWidth: "10px",backgroundColor: `${backgroundColor}`}}></div>
            </HeaderContainer>
            <MarginMiddle style={{backgroundColor:  `${backgroundColor}`}} >
                {(hasImage &&  width < breakPoint) && <Image2 style={{width: `${imageSize}px`, height: `${imageSize}px`}} src={imageSource}  />}
            </MarginMiddle>
            <TextBlockContainer>
                <div style={{width:"100%", backgroundColor: `${backgroundColor}`}}>
                    <p style={{
                           marginRight: `${hasImage ? ( (width < breakPoint)  ?  `${textMarginRight}` :   `${imageSize-edgeRightBottomSize + textPaddingImage}px` ) :  `${textMarginRight}`}`, 
                           color:"white",textAlign: "justify", marginLeft:  `${textMarginLeft}`, marginBottom: `${textMarginBottom}`}}>{text}</p>
                </div>
                <div style={{display: "flex", flexDirection: "column"}}>
                    <div style={{flexGrow: 1, backgroundColor: `${backgroundColor}`}}></div>
                    <Rectangle3 style={{borderTop: `${edgeRightBottomSize}px solid ${backgroundColor}`, borderRight: `${edgeRightBottomSize}px solid transparent`,}}/>
                </div>
            </TextBlockContainer>
        </Container>
    )
};
