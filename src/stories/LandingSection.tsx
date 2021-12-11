import { BackgroundVideo } from './BackgroundVideo'
import CssBaseline from '@mui/material/CssBaseline';
import { styled } from '@mui/system';

interface LandingSectionProps {
    videoSource: any;
    blur: number;
    onClick: Function;
    title: string;
    subText: string;
    buttonText: string;
}

export const LandingSection = ({
    videoSource,
    blur,
    onClick,
    title,
    subText,
    buttonText,
}: LandingSectionProps) => {
    return (
        <BackgroundVideo
            blur={blur}
            videoSource={videoSource} >
            <div className='content-landing'>
                <div className='sub-content-landing' >
                    <h1>{title}</h1>
                    <p>{subText}</p>
                    <button
                        className="btn btn-outline-dark"
                        onClick={() => onClick()}>
                        {buttonText}
                    </button>
                </div>
            </div>
        </BackgroundVideo>
    )
}
