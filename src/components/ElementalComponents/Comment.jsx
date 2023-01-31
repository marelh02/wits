import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Stack } from '@mui/material';
import "./comment.css";
import Interactions from './Interactions';
import { witsgetfullname } from '../witsUserSession';






export default function Comment(props){
    let c=props.comment

    return (
        <>
        <Card className="commentBox" sx={{ maxWidth: 0.8 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                {(c.name).split(" ").map(word => word[0].toUpperCase()).join("")}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVertIcon />
              </IconButton>
            }
            title={c.name}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {c.text}
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="like">
              <ThumbUpIcon/>
            </IconButton>
            <IconButton aria-label="dislike">
              <ThumbDownIcon/>
            </IconButton>            
            <Stack spacing={-0.8}>
                    <IconButton aria-label="like" >
                        <ThumbUpIcon />

                    </IconButton>
                    <Typography variant="caption" textAlign={"center"} display="block" color="grey">
                        0
                    </Typography>
                </Stack>

                <Stack spacing={-0.8}>
                    <IconButton aria-label="dislike" >
                        <ThumbDownIcon />

                    </IconButton>
                    <Typography variant="caption" textAlign={"center"} display="block" color="grey">
                        12
                    </Typography>
                </Stack>
          </CardActions>           */}
        </Card>
        </>
      );
}

