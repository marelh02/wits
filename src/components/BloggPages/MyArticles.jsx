import MyArticleDescriptionCard from "../ElementalComponents/MyArticleDescriptionCard";
import { useLoaderData, useNavigate } from "react-router-dom";
import { useState } from "react";
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { witsHTTPEndpoints } from "../witsHTTPEndpoints";
import { witsisLoged } from "../witsUserSession";



export default function MyArticles() {
    const descriptionsList=useLoaderData()
    const [open, setOpen] = useState(false);
    const [toDelete,setToDelete]=useState("");

  const handleClickOpen = (x) => {
    setToDelete(x)
    setOpen(true)
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete=async ()=>{
    await fetch(witsHTTPEndpoints.deleteMyArticleEP+"/"+toDelete, {
        method: 'DELETE'
    })
    console.log("Article deleted successfully")
    window.location.reload(false)
  }
    
    return (<>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Suppression d'un article"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Voulez-vous vraiment supprimer cet article?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDelete}>Supprimer</Button>
          <Button onClick={handleClose} autoFocus>Annuler</Button>
        </DialogActions>
      </Dialog>
    <h1>Mes articles</h1>
    {descriptionsList.map((y,i)=>{
        return(<><MyArticleDescriptionCard key={i} description={y} deleteAction={handleClickOpen}/><br /></>);
    })}
    </>);
  }