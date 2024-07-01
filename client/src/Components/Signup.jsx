import React from 'react';

const Signup = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add form submission logic here
    // For example, collect form data and submit it to backend
  };

  return (
    <main className="form-signup w-100 m-auto" style={{ maxWidth: "330px", padding: '1rem' }}>
      <form onSubmit={handleSubmit}>
        <div className="text-center mb-4">
          <h1 className="h3 mb-3 fw-normal">Sign up</h1>
        </div>

        <div className="form-floating">
          <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <div className="form-floating">
          <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" required />
          <label htmlFor="floatingConfirmPassword">Confirm Password</label>
        </div>

        <button className="btn btn-primary w-100 py-2"
                type="submit"
                style={{ 
                  backgroundColor: '#EB984E',
                  border: '1px solid #EB984E',
                  transition: 'background-color 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = '#873600'}
                onMouseOut={(e) => e.target.style.backgroundColor = '#EB984E'}
        >
          Sign Up
        </button>

        <p className="mt-3 text-center">Already have an account? <a href="/login">Log in here</a></p>
      </form>
    </main>
  );
}

export default Signup;
