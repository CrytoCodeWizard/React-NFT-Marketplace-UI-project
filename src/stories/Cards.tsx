import { useState } from "react"
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface CardsProps {
    /**
     * Image source
     */
    imageSrc: string;
    /**
     * Fallback text
     */
    alt: string;
    /**
     * Fallback Image
     */
    altImg: string;
    /**
     * Card subheader align
     */
    typographyAlign: any,
    /**
     * Card subheader variant
     */
    typographyVariant: any;
    /**
     * Card subheader component
     */
    typographyComponent: any;
    /**
     * Card subheader text
     */
    typographyText: string;

}

export const Cards = ({ imageSrc, alt, altImg, typographyAlign, typographyVariant, typographyComponent, typographyText, }: CardsProps) => {
    const [errorLoading, setErrorLoading] = useState(false)

    return (
        <div>
            <CardMedia
                height={"100%"}
                component={"img"}
                image={errorLoading ? altImg : imageSrc}
                alt={alt}
                onError={() => setErrorLoading(true)}
            />
            <CardContent sx={{ flexGrow: 1 }}>
                <Typography
                    gutterBottom
                    variant={typographyVariant}
                    component={typographyComponent}
                    align={typographyAlign}
                >
                    {typographyText}
                </Typography>

            </CardContent>
        </div>
    )
};

