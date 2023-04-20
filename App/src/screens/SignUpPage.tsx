import {useState, useEffect} from 'react';
import Axios from 'axios';

import SignUp1 from './SignUp1';
import SignUp2 from './SignUp2';

export default function SignUpPage({navigate}): JSX.Element {

  
  const [page, setPage] = useState(1);

  //   page 1 props
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');

  // page 2 props
  const [rollNumber, setrollNumber] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    if (page === 1) {
        console.log(
          `Information from page ${page}: ${name} ${email} ${password} ${rePassword}`,
        );
    } else {
        console.log(`Information from page ${page}: ${rollNumber} ${image}`);
    }

    if (page === 3) {
        Axios({
            method: 'POST',
            data: {
                "username" : rollNumber,
                "name" : name,
                "email" : email,
                "password" : password,
                "alumnus" : false,
            },
            url: `http://localhost:8000/signup`,
        }).then((res) => console.log(res.data)).catch((err)=>{})
    }

  }, [page]);

  return page === 1 ? (
    <SignUp1
      setPage={setPage}
      name={name}
      email={email}
      password={password}
      rePassword={rePassword}
      setName={setName}
      setEmail={setEmail}
      setPassword={setPassword}
      setRePassword={setRePassword}
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
