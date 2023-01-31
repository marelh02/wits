import { Button } from "@mui/material";
import { SaveAs } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ArticleDescriptionObj from "../Classes/ArticleDescriptionObj";
import { useSelector } from "react-redux";
import { witsHTTPEndpoints } from "../witsHTTPEndpoints";
import { setTopics, setCoverImg } from "../descriptionSlice"
import { useDispatch } from "react-redux";
import ArticleDescriptionForm from "../ElementalComponents/ArticleDescriptionForm";
import { witsgetfullname, witsgetUserId } from "../witsUserSession";
import { logDOM } from "@testing-library/react";





export default function NewArticleDescription(props=null) {

    let reduxTopics = useSelector((state) => state.descriptionSlice.topicList)
    let reduxCoverImg = useSelector((state) => state.descriptionSlice.coverImg)
    let navigate = useNavigate()
    let dispatch = useDispatch()

    const descriptionHandler = async () => {

        console.log("heyyy");

        let fn= await witsgetfullname()
        
        let currentUserInfo = {
            fullName: fn,
            userId: witsgetUserId()
        }


        const des = new ArticleDescriptionObj(
            document.getElementById("ArticleTitle").value,
            reduxCoverImg,
            Date.now(),
            document.getElementById("ArticleDescriptionText").value,
            reduxTopics,
            currentUserInfo
        )

        console.log(des);

        await fetch(witsHTTPEndpoints.newArticleDescriptionEP, {
            method: 'post',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },

            body: JSON.stringify(des)
        })

        console.log("New article description saved succesfully");
            dispatch(setCoverImg(""))
            dispatch(setTopics(["",]))
            navigate("/editteur/" + des.identifiant)
            

    };

    return (
        <>
            {/* {navigation.state === "loading" && <CircularProgress color="secondary" />} */}            
            <ArticleDescriptionForm description={null}/>

            <Button variant="contained" endIcon={<SaveAs />} onClick={descriptionHandler} sx={{ color: 'grey' }}>
                Rédiger
            </Button>
        </>
    );
}