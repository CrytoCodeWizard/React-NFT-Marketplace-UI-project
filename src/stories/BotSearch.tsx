import {useState} from "react"
import InfiniteBotList from './InfiniteBotList';
import Cards from './Cards';

import Input from '@mui/material/Input';

interface BotSearchProps {
    placeholder?: string
}

const BotSearch = ({ placeholder }: BotSearchProps) => {
    const [number, setNumber]  = useState(()=> 0)

    const handleChange = (bot:number) => {
        if(bot && bot > 0){
            setNumber(bot)
        }else{
            setNumber(0)
        }
    }

    return (
        <>
            <Input
                type="number"
                value={number}
                placeholder={placeholder}
                onChange={(e) => handleChange(parseInt(e.target.value))}
            />
            {(number > 0) ? 
            <div>
                <Cards 
                    alt="IOTABOTS"
                    altImg="http://assets.iotabots.io/1000.png"
                    imageSrc={`http://assets.iotabots.io/${number}.png`}
                    typographyAlign="center"
                    typographyComponent="h3"
                    typographyText={`IOTABOT #${number}`}
                    typographyVariant="h6"
                
                />
            </div> 
            :
            <div><InfiniteBotList /></div>
            }
        </>
    )
}
export default BotSearch