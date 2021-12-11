import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface FooterProps {
    /**
     * Name of website
     */
    website: string;
    /**
     * Name of twitter account
     */
    twitter: string;
    /**
     * Text inside Footer
     */
    text: string;

    variant: any;

    isPrimary: boolean;

}

export const Footer = ({ website, twitter, text, variant, isPrimary }: FooterProps) => {

    const Copyright = () => {
        return (
            <Typography variant={variant} color={`text.${isPrimary ? "primary" : "secondary"}`} align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    {website}
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        );
    };

    return (
        <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
            <Typography variant="h6" align="center" gutterBottom>
                {text}
            </Typography>
            <Typography
                variant="subtitle1"
                align="center"
                color="text.secondary"
                component="p"
            >
                Follow us on <a href={twitter}>Twitter</a>
            </Typography>
            <Copyright />
        </Box>
    )
};
