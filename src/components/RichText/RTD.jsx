import { useEffect } from 'react';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import Table from '@editorjs/table';
import ImageTool from '@editorjs/image';
import SimpleImage from '@editorjs/simple-image';
import { witsHTTPEndpoints } from '../witsHTTPEndpoints';
import "./rtd.css"


////////////this is a rich text displayer////////////


//getting img in base64
function _getBase64(file, onLoadCallback) {
  return new Promise(function (resolve, reject) {
    var reader = new FileReader();
    reader.onload = function () { return resolve(reader.result); };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

const RTD = (props) => {
  let editor = { isReady: false };

  useEffect(() => {
        if (!editor.isReady) {
          console.log("Rendering RT.....");
          editor = new EditorJS({
            holderId: 'editor',
            readOnly: true,
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
                  captionPlaceholder: 'Author of the quote',
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
              },
              SimpleImage: SimpleImage,
            },
            onReady:()=>{document.querySelectorAll('div.cdx-button').forEach(el => el.remove())}
          });
        }

  }, []);



  return (
    <>
      <div id="editor">
      </div>
    </>
  )
}
export default RTD;