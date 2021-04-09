import React, { useState } from 'react';
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

export default function SignUp() {

  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('md');

  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [city, setCity] = useState('');
  const [dob, setDob] = useState('');
  const [gender, setGender] = useState('');

  const signUp = (e) => {

    axios.post(API.REGISTER,

      {
        name: name,
        username: username,
        mobile: mobile,
        password: password,
        city: city,
        dob: dob,
        gender: gender
      }

    )
      .then((resp) => {
        if (resp.data) {
          history.push('/home')
        }
      })
      .catch((err) => {
      })

  }

  const formSubmit = (e) => {
    signUp()
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

  const handleFullWidthChange = (event) => {

  };

  return (
    <React.Fragment>
      <a variant="outlined" color="primary" onClick={handleClickOpen}>
        SignUp
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
                <div className="col-lg-4 col-md-6 col-sm-12 col-left-img img-fluid">
                  <h1><span className="title-span title-color-white">PLAN YOUR <br /></span><span className="title-span title-color-red">DREAM <br /></span><span className="title-span title-color-red">HOLIDAY <br /></span><span className="title-span title-color-white">NOW!!!</span> </h1>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 col-right-content">

                  <div className="container signup-content-cntnr">
                    <form className="signup-col-form" onSubmit={signUp}>
                      <div className="row signup-content-rw signup-rw-1">

                        <div className="col-lg-7 col-md-12 col-sm-12 signup-content-col signup-rw-1-col-1">
                          <p>Sign Up</p>
                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label">Username</h6>
                            <input placeholder="Sharmz1234" value={username} onChange={(e) => setUsername(e.target.value)} type="text" className="signup-inputs" />
                          </div>
                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label">Full Name</h6>
                            <input placeholder="Sharma Walle" value={name} onChange={(e) => setName(e.target.value)} type="text" className="signup-inputs" />
                          </div>

                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label">Phone Number</h6>
                            <input placeholder="+91 97040840123" value={mobile} onChange={(e) => setMobile(e.target.value)} type="text" className="signup-inputs" />
                          </div>
                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label">Password</h6>
                            <input placeholder="nosey@yahoo.com" value={password} onChange={(e) => setPassword(e.target.value)} type="password" className="signup-inputs" />
                          </div>

                        </div>

                        <div className="col-lg-5 col-md-12 col-sm-12 signup-content-col signup-rw-1-col-2">
                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label">Date Of Birth</h6>
                            <input placeholder="Sharmz1234" value={dob} onChange={(e) => setDob(e.target.value)} type="text" className="signup-inputs input-dob" />
                          </div>
                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label">Gender</h6>
                            <input placeholder="Male" value={gender} onChange={(e) => setGender(e.target.value)} type="text" className="signup-inputs" />
                          </div>

                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label">City</h6>
                            <input placeholder="***************" value={city} onChange={(e) => setCity(e.target.value)} type="text" className="signup-inputs" />
                          </div>
                          <div className="Input-wraper-signup">
                            <h6 className="sngup-input-label repeat-p-input">Repeat Password</h6>
                            <input placeholder="***************" type="password" className="signup-inputs" />
                          </div>

                        </div>
                      </div>
                      <div className="row signup-row-2">

                        <div className="col-lg-8 col-md-12 col-sm-12 signup-row-2-col-1">

                          <p>*Password must be longer than 6 characters <br /><br />Read our T&C <u>here</u></p>
                        </div>

                        <div className="col-lg-4 col-md-12 col-sm-12 signup-row-2-col-2">

                          <button onClick={formSubmit} className="singup-submit-btn">
                            Confirm
                         </button>

                        </div>
                      </div>

                    </form>
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
