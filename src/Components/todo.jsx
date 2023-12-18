import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useDispatch, useSelector } from 'react-redux';
import { Add } from '../redux/Todoslice';
import TasksDrow from './tasks';
import { DateTime } from 'luxon';
import AddIcon from '@mui/icons-material/Add';



export default function Todo() {
       const Tasks = useSelector((state) => state.TaskSlice.Task);
       const [open, setOpen] = React.useState(false);
       const [content, setContent] = React.useState("");
       const [titel, setTitel] = React.useState("");
       const [id, setId] = React.useState(0);    
       const [time, setTime] = React.useState(0);
       const Task = {
              id,
              titel,
              content,
              time,
              textbox: false
       }

       const handleClickOpen = () => {
              setOpen(true);
       };

       const dispatch = useDispatch()

       const handleCloseSave = () => {     
              setId(id + 1)
              dispatch(Add({ task: Task }))
              handleClose()
       };
       const handleClose = () => {
              setOpen(false);
       };

       return (
              <>
                     <h1>המשימות שלי</h1>
                     {
                            Tasks.map((t) => {
                                   return (
                                            <TasksDrow element={t}/>
                                   )
                            })
                     }
                     <React.Fragment>
                            <Button variant="outlined" onClick={handleClickOpen}>
                                   להוספת משימה    <AddIcon/>
                            </Button>
                            <Dialog open={open} onClose={handleClose}>
                                   <DialogTitle>הוספת משימה</DialogTitle>
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
              </>
       );
}
