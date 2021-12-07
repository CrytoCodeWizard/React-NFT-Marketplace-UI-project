import {useState} from "react"
import Grid from '@mui/material/Grid';
import Cards from './Cards'
import {styled} from '@mui/system';

interface CardGridProps {
    /**
     * Number of items in grid
     */
    itemCount: number;

}

const CardGrid = ({itemCount}: CardGridProps) => {
    const [items, setItems] = useState(() => Array.from({ length: itemCount }, (v, k) => k + 1) )

    return (
        <Div >
        {items.map((item, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
                <Cards 
                    alt="IOTABOTS"
                    altImg="http://assets.iotabots.io/1000.png"
                    imageSrc={`http://assets.iotabots.io/${index+1}.png`}
                    typographyAlign="center"
                    typographyComponent="h3"
                    typographyText={`IOTABOT ${index+1}`}
                    typographyVariant="h6"
                />
            </Grid>
        ))}
       </Div>
    )
};

const Div = styled('div')({
display: 'flex',
maxWidth:"900px",
flexDirection: 'row',
flexWrap: "wrap",
width: '100%',
textAlign: 'center',
justifyContent: 'center'
})


export default CardGrid;