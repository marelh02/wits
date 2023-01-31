import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import SendIcon from '@mui/icons-material/Send';
import Typography from '@mui/material/Typography';
import { Box, Stack } from '@mui/system';
import { Button, IconButton } from '@mui/material';
import { useState } from 'react';
import Comment from './Comment';
import CommentClass from '../Classes/CommentClass';
import { TextField } from '@mui/material';
import "./interactions.css";
import { useEffect } from 'react';
import { witsgetfullname, witsgetUserId } from '../witsUserSession';
import { witsHTTPEndpoints } from '../witsHTTPEndpoints';
import Interaction from '../Classes/Interaction';


export default function Interactions(props) {
    let [like, setLike] = useState(null)

    let [nLike, setNlike] = useState(0)
    let [nDislike, setNdislike] = useState(0)


    let identifiant = props.identifiant
    let c = props.interactions.comments

    // const r = witsgetUserId()
    // let likez = 0
    // let dislikes = 0
    // let me = null
    // for (let x in props.interactions.likesDislikes) {
    //     x.id === r & x.like == true ? me = true : x.id === r & x.like == false ? me = false :
    //         x.like == true ? likez++ : dislikes++
    // }
    // setNlike(likez)
    // setNdislike(dislikes)
    // setLike(me)

    let ThumbUp = async () => {
        //should send a command to the server to u_pdate the number of interactions
        if (like === true) {
            setLike(null);
            setNlike(--nLike)
        } else {
            if (like === false) setNdislike(--nDislike);
            setLike(true)
            setNlike(++nLike)
        }

        const cc = new Interaction(witsgetUserId, like)
        await fetch(witsHTTPEndpoints.likeDislike + "" / +identifiant, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cc)
        })
        console.log("like dislike updated")
    }

    let ThumbDown = async () => {
        //should send a command to the server to u_pdate the number of interactions
        if (like === false) {
            setLike(null);
            setNdislike(--nDislike)
        } else {
            if (like === true) setNlike(--nLike)
            setLike(false)
            setNdislike(++nDislike)
        }

        const cc = new Interaction(witsgetUserId, like)
        await fetch(witsHTTPEndpoints.likeDislike + "" / +identifiant, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cc)
        })
        console.log("like dislike updated")
    }

    let sendTFComment = async () => {
        let v = document.getElementById("commentTextField").value;
        const wid = witsgetUserId()
        const wnm = await witsgetfullname()
        const cc = new CommentClass(wid, wnm, v)
        console.log(cc);
        await fetch(witsHTTPEndpoints.commentArticle + "" / +props.interactions.identifiant, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(cc)
        })
        console.log("Comment added")
        window.location.reload(false)
    }

    return (
        <section>

            {/* zone like dislike */}
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Typography id="typoText" textAlign={"center"} color="grey">
                    Avez vous aimé cet article?
                </Typography>

                <Stack spacing={-0.8}>
                    <IconButton aria-label="like" onClick={ThumbUp}>
                        <ThumbUpIcon {...like === true ? { color: "primary" } : {}} />

                    </IconButton>
                    <Typography variant="caption" textAlign={"center"} display="block" color="grey">
                        {nLike}
                    </Typography>
                </Stack>

                <Stack spacing={-0.8}>
                    <IconButton aria-label="dislike" onClick={ThumbDown}>
                        <ThumbDownIcon {...like === false ? { color: "primary" } : {}} />

                    </IconButton>
                    <Typography variant="caption" textAlign={"center"} display="block" color="grey">
                        {nDislike}
                    </Typography>
                </Stack>
            </Box>


            {/* textfield ou l'utilisateur ajoute un nouvel commentaire */}
            <Box id="commentBox" sx={{ maxWidth: 0.7 }}>
                <TextField
                    id="commentTextField"
                    label="Laissez un commentaire"
                    multiline
                    rows={5}
                    placeholder="Saisir votre texte"
                    fullWidth="true"
                />

                <Button id="sendButton" color='grey' onClick={sendTFComment} variant="contained" endIcon={<SendIcon />}>
                    Send
                </Button>
            </Box>


            {/* affiche la liste des commentaire stockées dans la BD */}
            {/* {c!==null?(c.likesDislikes).map((x,i)=><Comment comment={x} key={x.id+"_"+i} />):<></>} */}
        </section>
    );
}