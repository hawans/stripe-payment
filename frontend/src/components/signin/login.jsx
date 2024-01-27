import { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      email: email,
      password: password
    };

    try {
      const response = await fetch('http://localhost:4242/login-user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);

        // history.push('/success');
      } else {
        console.error('API request failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email or Mobile"
        name='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        name='password'
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Login;
