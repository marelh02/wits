import { useState } from "react";
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Fab } from "@mui/material";
import { useDispatch } from "react-redux";
import { setCoverImg } from "../descriptionSlice";

const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file)
    fileReader.onload = () => {
      resolve(fileReader.result);
    }
    fileReader.onerror = (error) => {
      reject(error);
    }
  })
}


export default function CoverImgSelector(props) {
  let dispatch= useDispatch()
  const [cover, setCover] = useState(props.coverImg===null?null:props.coverImg);

  const coverFabEvent = () => {
    document.getElementById("coverSelect").click();
  }
  const handleFileRead = async (event) => {
    const file = event.target.files[0]
    const base64 = await convertBase64(file)
    setCover(base64)
    dispatch(setCoverImg(base64))    
  }

  const coverImg= cover==null?null:<img id="coverImg" src={cover} alt="image_couverture"/>


  if (props.coverImg!==null) dispatch(setCoverImg(props.coverImg));
  
  return (
    <>
    <h3>Choisissez l'image de couverture</h3>
      <input type="file" hidden id="coverSelect" accept="image/*" onChange={handleFileRead} />
      <div id="coverContainer">
        <div id="coverFab">
        <Fab aria-label="Ajouter" onClick={coverFabEvent}>
          <AddPhotoAlternateIcon />
        </Fab>
            </div>                
        {coverImg}
      </div>
    </>
  );
}