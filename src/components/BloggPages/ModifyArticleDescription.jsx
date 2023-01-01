import { Button } from "@mui/material";
import { SaveAs } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import ArticleDescriptionObj from "../Classes/ArticleDescriptionObj";
import { useSelector } from "react-redux";
import { witsHTTPSettings } from "../witsHTTPSettings";
import { setTopics, setCoverImg } from "../descriptionSlice"
import { useDispatch } from "react-redux";
import { currentUserInfo } from "../witsAppVariables";
import ArticleDescriptionForm from "../Special/ArticleDescriptionForm";





export default function ModifyArticleDescription() {

    let navigate = useNavigate()
    let dispatch = useDispatch()
    const location=useLocation()

    const data = location.state?.data;

    let reduxTopics = useSelector((state) => state.descriptionSlice.topicList)
    let reduxCoverImg = useSelector((state) => state.descriptionSlice.coverImg)
    console.log(data);

    const descriptionHandler = async () => {

        const des = new ArticleDescriptionObj(
            document.getElementById("ArticleTitle").value,
            reduxCoverImg,
            Date.now(),
            document.getElementById("ArticleDescriptionText").value,
            reduxTopics,
            currentUserInfo
        )
        des.articleID=data.articleID
        
        await fetch(witsHTTPSettings.updateArticleDescriptionEP, {
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