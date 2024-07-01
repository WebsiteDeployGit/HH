import React from 'react';

const Login = () => {
  return (
    <main className="form-signin w-100 m-auto" style={{ maxWidth: "330px", padding: '1rem' }}>
      <form>
        <div className="text-center mb-4">
          <img className="mb-4" src="https://cdn.vectorstock.com/i/500p/27/46/home-ecology-gold-tree-logo-vector-14982746.jpg" alt="" width="72" height="57" />
          <h1 className="h3 mb-3 fw-normal">Please login</h1>
        </div>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
          <label htmlFor="floatingPassword">Password</label>
        </div>

        <div className="form-check text-start my-3">
          <input className="form-check-input" type="checkbox" value="remember-me" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Remember me
          </label>
        </div>
        <button className="btn btn-primary w-100 py-2"
                type="submit"
                style={{ 
                  backgroundColor: '#FEF5E7',
                  border: '1px solid #FEF5E7',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#873600'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#FEF5E7'}
        >
          Login
        </button>
        <p className="mt-3 text-center">Didn't Register? <a href="/signup">Sign up here</a></p>
      </form>
    </main>
  );
}

export default Login;
