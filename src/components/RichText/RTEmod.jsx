import { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import ImageTool from '@editorjs/image';
import SimpleImage from '@editorjs/simple-image';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import { witsHTTPEndpoints } from '../witsHTTPEndpoints';
import { useNavigate, useParams } from 'react-router-dom';



//Base64 img uploader func
function _getBase64(file, onLoadCallback) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () { return resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}


export default function RTEmod(props){
  let {idArticle}=useParams();
  let editor = { isReady: false };
  const navigate = useNavigate()


  useEffect(() => {
    if (!editor.isReady)
      editor = new EditorJS({
          holder: 'editor',
          placeholder: 'Insérez votre contenu',
          data: {
              blocks: props.articleData.blocks
            }, 
          tools: {
            header: Header,
            quote: {
              class: Quote,
              inlineToolbar: true,
              config: {
                quotePlaceholder: 'Enter a quote',
                captionPlaceholder: 'Quote\'s author',
              },
            },
            list: {
              class: List,
              inlineToolbar: true,
              config: {
                defaultStyle: 'unordered'
              }
            },
            table: {
              class: Table,
              inlineToolbar: true,
              config: {
                rows: 2,
                cols: 2,
                // withHeadings:true
              },
            },
            SimpleImage: SimpleImage,
            image: {
              class: ImageTool,
              config: {
                uploader: {
                  uploadByFile(file) {
                    return _getBase64(file, function (e) { }).then((data) => {
                      return {
                        success: 1,
                        file: {
                          url: data
                        }
                      }
                    })
                  }
                }
              }
            }
          }
        });
  }, []);

  async function handleRTE() {
    const outputData= await editor.save()

    await fetch(witsHTTPEndpoints.updateArticleEP, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({identifiant:idArticle,blocks: outputData.blocks})
    })
    console.log("Article saved!")
    navigate("/mes_articles")
  };


  return (
    <>
      <div id="editor">
      </div>
      <Button variant="contained" startIcon={<SaveIcon />} onClick={handleRTE}>
        save
      </Button>
    </>
  )
}