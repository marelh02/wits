import * as React from 'react';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import { setTopics } from '../descriptionSlice';
import { topics } from '../witsAppVariables';

import { useDispatch } from 'react-redux'


//////////////////////opérations ensemblistes sur les listes////////////////////
function not(a, b) {
  return a.filter((value) => b.indexOf(value) === -1);
}

function intersection(a, b) {
  return a.filter((value) => b.indexOf(value) !== -1);
}
////////////////////////////////////////////////////////////////////////////////



export default function TransferList(props) {
  let sel = props.selectedTopics
  const dispatch = useDispatch()

  const [checked, setChecked] = React.useState([]);
  const [left, setLeft] = React.useState(sel === null ? topics : topics.filter(x => !sel.includes(x)));
  const [right, setRight] = React.useState(sel === null ? [] : sel);

  const leftChecked = intersection(checked, left);
  const rightChecked = intersection(checked, right);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleAllRight = () => {
    let x = right.concat(left);
    setRight(x);
    setLeft([]);
    dispatch(setTopics(x))
  };

  const handleCheckedRight = () => {

    let x = right.concat(leftChecked)
    setRight(x);
    setLeft(not(left, leftChecked));
    setChecked(not(checked, leftChecked));
    dispatch(setTopics(x))
  };

  const handleCheckedLeft = () => {
    setLeft(left.concat(rightChecked));
    setRight(not(right, rightChecked));
    setChecked(not(checked, rightChecked));
  };

  const handleAllLeft = () => {
    setLeft(left.concat(right));
    setRight([]);
  };

  const customList = (items, listName) => (
    <Paper sx={{ width: 300, height: 250, overflow: 'auto' }}>
      <h3 style={{ textAlign: "center" }}>{listName}</h3>
      <List dense component="div" role="list">
        {items.map((value) => {
          const labelId = `${value}`;

          return (
            <ListItem
              key={value}
              role="listitem"
              button
              onClick={handleToggle(value)}
            >
              <ListItemIcon>
                <Checkbox
                  checked={checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{
                    'aria-labelledby': labelId,
                  }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={labelId} />
            </ListItem>
          );
        })}
        <ListItem />
      </List>
    </Paper>
  );

  return (
    <>
      <h3>Choisissez les sujets de l'article</h3>
      <Grid container spacing={2} justifyContent="center" alignItems="center">
        <Grid item>{customList(left, "Catégories disponibles")}</Grid>
        <Grid item>
          <Grid container direction="column" alignItems="center">
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllRight}
              disabled={left.length === 0}
              aria-label="move all right"
            >
              ≫
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedRight}
              disabled={leftChecked.length === 0}
              aria-label="move selected right"
            >
              &gt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleCheckedLeft}
              disabled={rightChecked.length === 0}
              aria-label="move selected left"
            >
              &lt;
            </Button>
            <Button
              sx={{ my: 0.5 }}
              variant="outlined"
              size="small"
              onClick={handleAllLeft}
              disabled={right.length === 0}
              aria-label="move all left"
            >
              ≪
            </Button>
          </Grid>
        </Grid>
        <Grid item>{customList(right, "Catégories choisies")}</Grid>
      </Grid>
    </>
  );
}