import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import Switch from '@material-ui/core/Switch';
import "./styles.css";
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import axios from 'axios';
import API from '../../../../Utils/Utils';
import { useHistory } from 'react-router';



const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

export default function MaxWidthDialog() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const history = useHistory();


  const loginCall = async (e) => {

    axios.post(API.LOGIN,
      {
        username: userName,
        password: password
      })
      .then((resp) => {
        if (resp.data.data) {
          sessionStorage.setItem('token', resp.data.data.token);
          sessionStorage.setItem('user', resp.data.data.name);
          sessionStorage.setItem('id', resp.data.data.id);

          if (resp.data.data.role === "user")
            history.push("/dashboard");
          else
            history.push("/admin");
        } else {
          alert("Incorrect username or password");
        }
      })
      .catch((err) => {
      });
  }

  const formSubmit = (e) => {
    loginCall();
  }

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleMaxWidthChange = (event) => {
    setMaxWidth(event.target.value);
  };


  return (
    <React.Fragment>
      <a variant="outlined" color="primary" onClick={handleClickOpen}>
        Login
      </a>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
        className="modal-size"
      >

        <DialogContent className="modal-bg">
          <DialogContentText>
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 col-left-img img-fluid">
                  <h1><span className="title-span title-color-white">PLAN YOUR <br /></span><span className="title-span title-color-red">DREAM <br /></span><span className="title-span title-color-red">HOLIDAY <br /></span><span className="title-span title-color-white">NOW!!!</span> </h1>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-right-content">

                  <div className="container lgn-content-cntnr">
                    <div className="row lgn-content-rw">
                      <div className="col lgn-content-col">
                        <p>Login</p>
                        <form className="lgn-col-form" onSubmit={loginCall}>
                          <div className="Input-wraper-lgn">
                            <h6>Username/userName/Phone</h6>
                            <input placeholder="Sharmz1234" type="text" name="userName" value={userName} className="login-inputs" onChange={(e) => { setUserName(e.target.value) }} required />
                          </div>
                          <div className="Input-wraper-lgn">
                            <h6>Password</h6>
                            <input placeholder="**********" type="password" value={password} name="password" className="login-inputs" onChange={(e) => setPassword(e.target.value)} required />
                          </div>

                          <div className="radio-btn-text"><RadioButtonUncheckedIcon /> <span>Keep me Signed in</span></div>

                          <button type="submit" onClick={formSubmit} className="lgn-submit-btn">
                            Confirm
                         </button>
                        </form>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </DialogContentText>

        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
}
