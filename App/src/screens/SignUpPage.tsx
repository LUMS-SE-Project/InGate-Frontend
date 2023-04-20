import React from 'react';
import {useState, useEffect} from 'react';
import Axios from 'axios';

import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';

import instance from '../api/api';

export default function SignUpPage({navigation}): JSX.Element {
  const [page, setPage] = useState(1);

  //   page 1 props
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [gender, setGender] = useState('');

  // page 2 props
  const [rollNumber, setrollNumber] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    console.log(
      `Info: Name: ${name} Email:${email} Password: ${password} Confirm: ${rePassword} PhoneNum : ${phoneNumber} Gender : ${gender} RollNum : ${rollNumber} Image : ${image}`,
    );

    if (page === 3) {
      console.log('Info: Signing up');
      instance
        .post('/signup', {
          username: rollNumber,
          name: name,
          email: email,
          password: password,
          alumnus: false,
          number: phoneNumber,
          gender : gender,
        })
        .then(res => {
          console.log(res.data);
          navigation.navigate('LoginPage');
        })
        .catch(err => {
          console.log(err);
        });
    }
  }, [page]);

  return page === 1 ? (
    <SignUp1
      setPage={setPage}
      name={name}
      email={email}
      password={password}
      rePassword={rePassword}
      phoneNumber={phoneNumber}
      gender={gender}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      setRePassword={setRePassword}
      setPhoneNumber={setPhoneNumber}
      setGender={setGender}
    />
  ) : (
    <SignUp2
      setPage={setPage}
      rollNumber={rollNumber}
      image={image}
      setrollNumber={setrollNumber}
      setImage={setImage}
    />
  );
}
