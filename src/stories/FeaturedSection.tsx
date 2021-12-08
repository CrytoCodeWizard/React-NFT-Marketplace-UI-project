import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { keyframes, styled } from '@storybook/theming';

interface FeaturedSectionProps {
    /**
     * Title of FeaturedSection
     */
    title: string;
    /**
     * Text inside FeaturedSection
     */
    text: string;

    variant: any;

    isPrimary: boolean;

}

const Container = styled.div({
    background: "black",
    position: "relative",
    '&:before': {
        content: '',
        position: "absolute",
        top: "0",
        right: "0",
        borderTop: "80px solid white",
        borderLeft: "80px solid black",
        width: "0"
    }

});

const Header = styled.div({
    background: "red",
    position: "relative",
    '&:before': {
        content: '',
        position: "absolute",
        top: "0",
        right: "0",
        borderTop: "80px solid white",
        borderLeft: "80px solid red",
        width: "0"
    }

});


const FeaturedSection = ({ title, text, variant, isPrimary }: FeaturedSectionProps) => {



    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} >
            <Container>
                <Header>
                    <Typography color="white" variant="h2" align="left" gutterBottom>
                        {title}
                    </Typography>
                </Header>
                <Typography
                    variant="subtitle1"
                    align="left"
                    color="white"
                    component="p"
                >
                    {text}
                </Typography>
            </Container>
        </Box>
    )
};

export default FeaturedSection;