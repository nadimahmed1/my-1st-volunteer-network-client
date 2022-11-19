import './App.css';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import app from './firebase.init';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
const auth = getAuth(app)

function App() {
  const [error, setError] = useState('')
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  }
  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleRegisteredChange = event => {
    setRegister(event.target.checked)
  }

  const handleEmailVerification = () => {
    sendEmailVerification(auth.currentUser)
      .then(() => {
        console.log('Email Verification send')
      })
  }

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        console.log('password reset')
      })
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    if (!/(?=.*[a-zA-Z >>!#$%&? "<<])[a-zA-Z0-9 >>!#$%&?<< ]/.test(password)) {
      setError('Please use a One special character')
      return;
    }
    else {
      setError('');
    }

    if (register) {
      signInWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
        })
        .catch(error => {
          setError(error.message)
        })
    }
    else {
      createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
          const user = result.user;
          console.log(user);
          setEmail('');
          setPassword('');
          handleEmailVerification();
        })
        .catch(error => {
          console.error(error);
          setError(error.message)
        })
    }



  }



  return (
    <div className="App">

      <div className="user-registration w-50 mx-auto">
        <h2 className='text-primary'>Please {register ? 'Login' : 'Register'}!!</h2>
        <Form onSubmit={handleFormSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Password" required />
            <p className='text-danger'>{error}</p>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check onChange={handleRegisteredChange} type="checkbox" label="Already Registered?" />
            <Button onClick={handlePasswordReset} variant='link'>Forget Password</Button>
          </Form.Group>
          <Button variant="primary" type="submit">
            {register ? 'Login' : 'Register'}
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default App;
