import { TextField, Stack, Container } from "@mui/material";
import TransferList from "./TransferList";
import CoverImgSelector from "./CoverImgSelector";

export default function ArticleDescriptionForm(props){
    let fillData=props.description
    return(<>
    <Stack spacing={5}>
        <br/>                
                <Container>
                    <TextField id="ArticleTitle" required
                    defaultValue={fillData!==null?fillData.title:""}
                    fullWidth label="Titre de l'article" variant="outlined" />
                </Container>

                <Container>
                    <CoverImgSelector coverImg={fillData!==null?fillData.coverImg:null}/>
                </Container>

                <Container>
                    <TextField
                        fullWidth
                        required
                        defaultValue={fillData!==null?fillData.description:""}
                        id="ArticleDescriptionText"
                        label="Description de l'article"
                        multiline
                    />
                </Container>

                <Container>
                    <TransferList selectedTopics={fillData!==null?fillData.topics:null}/>
                </Container>

            </Stack>
    </>);
}