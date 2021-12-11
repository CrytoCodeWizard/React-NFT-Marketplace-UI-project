import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

interface DiscoverSectionProps {

    NavLinkChild:any;

}

export const DiscoverSection = ({NavLinkChild}: DiscoverSectionProps) => {
    const cards = [0, 1, 2, 3, 4, 5];



    return (
        <div>
         <Container sx={{ py: 8 }} maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="#fff"
                        gutterBottom
                    >
                        Available Bots
                    </Typography>
                    {/* End hero unit */}
                    <Grid container spacing={4}>
                        {cards.map((card, index) => (
                            <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card
                                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                >
                                    <CardMedia
                                        component="img"
                                        sx={{
                                            // 16:9
                                            // pt: '56.25%',
                                        }}
                                        image={`http://assets.iotabots.io/${index + 1}.png`}
                                        alt="IOTABOT"
                                    />
                                    <CardContent sx={{ flexGrow: 1 }}>
                                        <Typography gutterBottom variant="h6" component="h3">
                                            {`IOTABOT #${index + 1}`}
                                        </Typography>

                                    </CardContent>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>

                </Container>
                <Container sx={{ py: 8 }} maxWidth="md"  >
                    <Typography align="center" gutterBottom variant="button" component="h1">
                        {NavLinkChild}
                    </Typography>
                </Container>
            </div>
    )
};
