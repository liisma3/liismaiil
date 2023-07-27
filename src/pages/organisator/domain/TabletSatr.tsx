import React, { useEffect, useState, } from 'react';

import styled from 'styled-components';

import {
  Card as MuiCard,
  Grid,
  MenuItem,
  ListItemIcon,
  ListItemButton as MuiListItemButton,
  ListItemText as MuiListItemText,
} from '@mui/material';

import { Send as SendIcon } from "@mui/icons-material";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import { spacing } from '@mui/system';


import useTablet from '@/store/hooks/useTablet';
const Card = styled(MuiCard)(spacing);

const ListItemButton = styled(MuiListItemButton)(spacing);

const ListItemText = styled(MuiListItemText)(spacing);


/**  ------------------component  */
const TabletSatr = () => {

  const { state: { cards, tab, words }, setWords, setCardsAccordion } = useTablet()
  //const [cards, setCards] = useState<Map<any, any> | null>(null)
  const selectAyah = (text: string) => {
    console.log({ text })

    const newSetWords = new Set()
    setWords(newSetWords.add(text.split(' ')))
    console.log({ words })

  }
  useEffect(() => {
    console.log({ words })
  }, [words])


  useEffect(() => {
    console.log({ cards })
    console.log({ tab })
  }, [cards])

  const getKalimatMenu = () => {
    return <MenuItem value={0}>....loading</MenuItem>

  }
  const addCardAccordionHandler = (ayah: any) => {
    console.log('add card Words')
    setCardsAccordion(ayah)
  }

  const cutAyahHandler = (ayah: any) => {
    console.log('split Words')
    console.log({ cards })
  }


  return (
    <Card mb={6}>
      {(cards?.get(tab) && cards?.get(tab).length > 0) && cards.get(tab)?.map((ayah: any) =>
      (ayah?.numberInSurah && <Grid item key={ayah?.numberInSurah}>
        <ListItemButton onClick={() => selectAyah(ayah.text)}>
          <ListItemIcon>
            <SendIcon onClick={() => addCardAccordionHandler(ayah)} />
          </ListItemIcon>
          <ListItemIcon>
            <ContentCutIcon onClick={() => cutAyahHandler(ayah)} />
          </ListItemIcon>
          <ListItemText inset primary={`${ayah.numberInSurah}`} pl={0} />
          <ListItemText inset primary={`${ayah.text}`} pl={0} />
        </ListItemButton>
      </Grid>))}

    </Card >
  )
}
export default React.memo(TabletSatr);
