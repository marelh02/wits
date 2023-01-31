import { Button } from "@mui/material";
import { SaveAs } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleDescriptionObj from "../Classes/ArticleDescriptionObj";
import { useSelector } from "react-redux";
import { witsHTTPEndpoints } from "../witsHTTPEndpoints";
import { setTopics, setCoverImg } from "../descriptionSlice"
import { useDispatch } from "react-redux";
import ArticleDescriptionForm from "../ElementalComponents/ArticleDescriptionForm";
import { witsgetfullname, witsgetUserId } from "../witsUserSession";





export default function ModifyArticleDescription() {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    const location=useLocation()

    const data = location.state?.data;

    let reduxTopics = useSelector((state) => state.descriptionSlice.topicList)
    let reduxCoverImg = useSelector((state) => state.descriptionSlice.coverImg)
    console.log(data);

    const descriptionHandler = async () => {

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
        des.identifiant=data.identifiant
        
        await fetch(witsHTTPEndpoints.updateArticleDescriptionEP, {
            method: 'put',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            },

            body: JSON.stringify(des)
        })

        // console.log("New article description saved succesfully");
            dispatch(setCoverImg(""))
            dispatch(setTopics(["",]))
            navigate("/mes_articles")
            

    };

    return (
        <>
            {/* {navigation.state === "loading" && <CircularProgress color="secondary" />} */}            
            <ArticleDescriptionForm description={data}/>

            <Button variant="contained" endIcon={<SaveAs />} onClick={descriptionHandler} sx={{ color: 'grey' }}>
                Rédiger
            </Button>
        </>
    );
}