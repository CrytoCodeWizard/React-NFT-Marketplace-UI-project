import { useState } from "react"
import Grid from '@mui/material/Grid';
import { Cards } from './Cards'
import InfiniteScroll from "react-infinite-scroll-component";
import { styled } from '@mui/system';

interface InfiniteBotListProps {

}

export const InfiniteBotList = ({ }: InfiniteBotListProps) => {
    const [items, setItems] = useState(() => Array.from({ length: 21 }, (v, k) => k + 1))

    const fetchMoreData = () => {
        setItems(items.concat(Array.from({ length: 21 }, (v, k) => k + 1 + items.length)))
    }

    return (
        <InfiniteScroll
            style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", width: '100%', textAlign: 'center', justifyContent: 'center' }}
            dataLength={items.length}
            next={fetchMoreData}
            hasMore={items.length >= 500 ? false : true}
            loader={<h4>Loading...</h4>}
        >
            {items.map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                    <Cards
                        alt="IOTABOTS"
                        altImg="http://assets.iotabots.io/1000.png"
                        imageSrc={`http://assets.iotabots.io/${index + 1}.png`}
                        typographyAlign="center"
                        typographyComponent="h3"
                        typographyText={`IOTABOT ${index + 1}`}
                        typographyVariant="h6"
                    />
                </Grid>
            ))}
        </InfiniteScroll>
    )
};

const Div = styled('div')({
    display: 'flex',
    maxWidth: "900px",
    flexDirection: 'row',
    flexWrap: "wrap",
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
})





/**
 *
 *  <InfiniteScroll
                    style={{ display: 'flex', flexDirection: 'row', flexWrap: "wrap", width: '100%', textAlign: 'center', justifyContent: 'center' }}
                    dataLength={items.length}
                    next={fetchMoreData}
                    hasMore={items.length >= 500 ? false : true}
                    loader={<h4>Loading...</h4>}
                >
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
            </InfiniteScroll>
 *
 *
 */