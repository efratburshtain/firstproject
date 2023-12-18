import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Checkbox from '@mui/material/Checkbox';
import CreateIcon from '@mui/icons-material/Create';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { useDispatch } from 'react-redux';
import { Delete, Edit } from '../redux/Todoslice';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { DateTime } from 'luxon';

const TasksDrow = (props) => {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [open, setOpen] = React.useState(false);
    const [titel, setTitel] = React.useState(props.element.titel);
    const [content, setContent] = React.useState(props.element.content);
    const [time, setTime] = React.useState(0);

    const dispatch = useDispatch()

    const Deletetasks = () => {
        dispatch(Delete({ id: props.element.id }))
    }

    const handleClickOpen = () => {
        setOpen(true);
    };
    const Task = {
        id: props.element.id,
        titel,
        content,
        time
    }
    const handleCloseSave = () => {
        // const currentTime = DateTime.local();
        // setTime(currentTime.toISOTime())
        dispatch(Edit({ task: Task }))
        handleClose()
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Grid item xs={12} sm container>
                <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <Box sx={{ my: 3, mx: 2 }}>
                        <Grid container alignItems="center">

                            <Grid item xs>
                                <Typography gutterBottom variant="h4" component="div">
                                    {props.element.titel}
                                </Typography>
                            </Grid>
                        </Grid>

                        <Typography color="text.secondary" variant="body2">
                            {props.element.content}
                        </Typography>
                        {/* <Typography color="text.secondary" variant="body2">
                        {props.element.time}
                    </Typography> */}
                        <Tooltip title="Delete">
                            <IconButton onClick={Deletetasks}>
                                <DeleteForeverIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Create">
                            <IconButton onClick={handleClickOpen} >
                                <CreateIcon />

                            </IconButton>
                        </Tooltip>
                        <Tooltip title="האם המשימה הושלמה">
                            <span><Checkbox {...label} /></span>
                        </Tooltip>
                        <br />
                        <br />
                    </Box>
                </Box>
                <React.Fragment>
                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>עדכון משימה</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                            </DialogContentText>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="titel"
                                label="שם משימה"
                                type="taxt"
                                fullWidth
                                variant="standard"
                                value={titel}
                                onChange={(e) => setTitel(e.target.value)}
                            />
                            <TextField
                                autoFocus
                                margin="dense"
                                id="content"
                                label="תוכן"
                                type="taxt"
                                fullWidth
                                variant="standard"
                                value={content}
                                onChange={(e) => setContent(e.target.value)}
                            />

                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}>ביטול</Button>
                            <Button onClick={handleCloseSave}>שמירה </Button>
                        </DialogActions>
                    </Dialog>
                </React.Fragment>
            </Grid>


        </>
    )
}
export default TasksDrow