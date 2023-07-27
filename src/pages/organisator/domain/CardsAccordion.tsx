import React from 'react'
import { useEffect, useState, ReactElement } from 'react';

// material-ui

import styled from 'styled-components';
import { spacing } from '@mui/system';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import {
    Box,
    Card as MuiCard,
    Grid,
    ListItemIcon,
    ListItemButton as MuiListItemButton,
    ListItemText as MuiListItemText,
    Tooltip,

} from '@mui/material';

// assets
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SendIcon from "@mui/icons-material/Send";
import ContentCutIcon from '@mui/icons-material/ContentCut';
import useTablet from '@/store/hooks/useTablet';
import WordsComponent from '@/components/domain/WordsComponent'
import ChipComponent from '@/components/ui-component/Chip'

const Card = styled(MuiCard)(spacing);

const ListItemButton = styled(MuiListItemButton)(spacing);

const ListItemText = styled(MuiListItemText)(spacing);
import CommentWordDialog from '@/components/domain/CommentWordDialog'


// ==============================|| ACCORDION ||============================== //

const Accordion = () => {

    const { state: { soura, souraName, souraNmb, cardsAccordion, words, ayatCards, cardSlices, wordToComment, tabletWords, openWordsDialog },
        setWords, addAyatCards, addCardSlices, clearWords, setOpenWordsDialog, setOpenCommentWordsDialog } = useTablet()
    const [toggle, setToggle] = useState<any | number>(null)
    const [expanded, setExpanded] = useState<number | boolean>(false);
    const [added, setAdded] = useState([-1])


    const handleChange = (panel: number) => (event: React.SyntheticEvent<Element, Event>, newExpanded: boolean) => {
        event.preventDefault()
        if (toggle !== panel && expanded !== panel) { setExpanded(panel) }
        else if (toggle === panel && expanded === false) { setExpanded(panel) }
        else setExpanded(false)

        setToggle(panel)
    };
    useEffect(() => {
        console.log({ words })
        console.log({ cardSlices })

        console.log({ tabletWords })
        console.log({ wordToComment })
    }, [cardSlices, ayatCards, words, tabletWords, wordToComment])

    const addCardHandler = (ayah: any) => {
        console.log({ ayah })
        setAdded((added) => [...added, ayah.numberInSurah])
        addAyatCards(ayah)
    }
    const addAllAyatHandler = (ayat: any) => {
        console.log({ ayat })
        ayat.forEach((ayah: any) => {
            setAdded((added) => [...added, ayah.numberInSurah])
        })

        addAyatCards(ayat.map((ayah: any) => ayah))
    }

    const cutAyahHandler = (ayah: any) => {
        const ayahTextArray = ayah.text.split(' ').filter((elem: string) => elem.length > 0)
        console.log({ ayahTextArray, length: ayahTextArray.length })

        const newAyahSlices = []
        while (ayahTextArray.length > 0) {

            const newSlice = ayahTextArray.splice(0, 15)
            console.log({ newSlice })
            console.log({ ayahTextArray })
            newAyahSlices.push(newSlice)
        }
        console.log({ newAyahSlices })
        addCardSlices({ soura, numberInSurah: ayah.numberInSurah, slices: newAyahSlices })
    }
    const ChipWords = () => {
        console.log({ tabletWords })

    }
    const createWords = (ayah: unknown) => {
        clearWords()
        const newSetWords = new Set()
        const kalimat = ayah.text.split(' ')
        kalimat.forEach((word: string) => {
            newSetWords.add(word)
        })
        const newTabletWordsArr: unknown[] = []
        newSetWords.forEach((word: unknown) => {
            newTabletWordsArr.push({
                text: word, souraName, souraNmb,
                numberInSurah: ayah?.numberInSurah,
                number: ayah?.number
            })
        })
        setOpenWordsDialog(true)
        console.log(openWordsDialog)
        setWords(newTabletWordsArr)
        console.log({ newTabletWordsArr })
    }
    useEffect(() => {
        console.log({ words })
        console.log({ openWordsDialog })
    }, [words, openWordsDialog])

    const AyahNumber = styled.div`
    font-size: 2rem;
`
    const SurahText = styled.div`
    font-size: 1rem;
    text-align: end;
 `

    return (
        <Box sx={{ width: '100%' }}>
            {cardsAccordion && cardsAccordion.ayahs.map((ayat: any, index: number) => (
                <MuiAccordion
                    key={`${ayat.length}-${index}`}
                    defaultExpanded={false}
                    expanded={(expanded === index)}
                    onChange={handleChange(index)}
                >
                    <MuiAccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        sx={{ color: 'grey.800', fontWeight: 500 }}
                    >
                        {`${souraName}-${ayat.length} Ayat`}
                    </MuiAccordionSummary>
                    <MuiAccordionDetails>

                        <Card mb={6}>
                            {ayat?.map((ayah: any) =>
                            (ayah?.numberInSurah && <Grid item key={ayah?.numberInSurah}>
                                <ListItemButton style={{ backgroundColor: added.includes(ayah?.numberInSurah) ? '#74992e' : 'white' }}>
                                    <Tooltip title="Add To Cards" arrow >
                                        <ListItemIcon >
                                            <SendIcon onClick={() => addCardHandler(ayah)} />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <Tooltip title="Cut To little slices" arrow >
                                        <ListItemIcon>
                                            <ContentCutIcon onClick={() => cutAyahHandler(ayah)} />
                                        </ListItemIcon>
                                    </Tooltip>
                                    <div style={{ fontSize: '3rem' }}>

                                        <ListItemText style={{ marginLeft: "-4rem" }} inset primary={<AyahNumber>{ayah.numberInSurah}</AyahNumber>} pl={0} />
                                    </div>
                                    <ListItemText onClick={() => createWords(ayah)} inset primary={<SurahText>{ayah.text}</SurahText>} pl={0} />
                                </ListItemButton>
                            </Grid>))}

                        </Card >
                    </MuiAccordionDetails>
                </MuiAccordion>
            ))
            }
            {openWordsDialog && <WordsComponent />}
            {(tabletWords.length > 1 && tabletWords[0].text !== null && tabletWords[0].text !== "") &&
                <Grid container direction={'row'} spacing={1}>
                    {tabletWords?.map((word: any) => (
                        <Grid item key={`${word.text}`} onClick={() => {
                            console.log({ word })
                            setOpenCommentWordsDialog(word)
                        }
                        } >
                            <ChipComponent style={{ fontSize: '1.3rem', padding: '1rem 1rem', }}
                                label={`${word.text}`} variant="outlined" chipcolor="primary" />
                        </Grid>))}
                </Grid>}
            {wordToComment.text !== '' && <CommentWordDialog word={wordToComment} />}
        </Box >
    );
};

export default Accordion;
