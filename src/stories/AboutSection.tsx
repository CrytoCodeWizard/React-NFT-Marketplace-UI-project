import { styled } from '@mui/system';


import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

interface AboutSection {
    /**
     * Section ID
     */
    sectionId: string;
    /**
     * Text Headline
     */
    headlineText: string;
    /**
     * Text 1. subheadline
     */
    subHeadline_1_Text: string;
    /**
     * Text textBlock
     */
    textBlockText: string;
    /**
     * Text 2. subheadline
     */
    subHeadline_2_Text: string;
}

const AboutSection = ({sectionId, headlineText, subHeadline_1_Text, textBlockText, subHeadline_2_Text}: AboutSection) => {
    return (
        <Box
            sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
            }}
        >

                    <Container id={sectionId} maxWidth="sm">
                        <Typography
                            component="h1"
                            variant="h2"
                            align="center"
                            color="text.primary"
                            gutterBottom
                        >
                            {headlineText}
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            {subHeadline_1_Text}
                        </Typography>
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                            {textBlockText}
                        </Typography>
                   
                        <Typography variant="h5" align="center" color="text.secondary" paragraph>
                                {subHeadline_2_Text}
                        </Typography>
                        <Stack
                            sx={{ pt: 4 }}
                            direction="row"
                            spacing={2}
                            justifyContent="center"
                        >
                        </Stack>
                    </Container>
                </Box>
    )
}

export default AboutSection
