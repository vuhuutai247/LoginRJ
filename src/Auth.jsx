import React, { useState } from "react"

export default function Auth (props) {
let [authMode, setAuthMode] = useState("signin")

const changeAuthMode = () => {
setAuthMode(authMode === "signin" ? "signup" : "signin")
}

if (authMode === "signin") {
return (
<div className="Auth-form-container">
<form className="Auth-form">
<img className="m-4" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/2560px-Bootstrap_logo.svg.png" alt="" width="72" height="57" />
<div className="Auth-form-content">
<h3 className="Auth-form-title">Sign In</h3>
<div className="text-center">
Not registered yet?{" "}
<span className="link-primary" onClick={changeAuthMode}>
Sign Up
</span>
</div>
<div className="form-group mt-3">
<label>Email address</label>
<input
type="email"
className="form-control mt-1"
placeholder="Enter email"
/>
</div>
<div className="form-group mt-3">
<label>Password</label>
<input
type="password"
className="form-control mt-1"
placeholder="Enter password"
/>
</div>
<div className="d-grid gap-2 mt-3">
<button type="submit" className="btn btn-primary">
Sign in
</button>
</div>
</div>
</form>
</div>
)
}

return (
<div className="Auth-form-container">
<form className="Auth-form">
<div className="Auth-form-content">
<h3 className="Auth-form-title">Sign In</h3>
<div className="text-center">
Already registered?{" "}
<span className="link-primary" onClick={changeAuthMode}>
Sign In
</span>
</div>
<div className="form-group mt-3">
<label>Full Name</label>
<input
type="email"
className="form-control mt-1"
placeholder="e.g Jane Doe"
/>
</div>
<div className="form-group mt-3">
<label>Email address</label>
<input
type="email"
className="form-control mt-1"
placeholder="Email Address"
/>
</div>
<div className="form-group mt-3">
<label>Password</label>
<input
type="password"
className="form-control mt-1"
placeholder="Password"
/>
</div>
<div className="d-grid gap-2 mt-3">
<button type="submit" className="btn btn-primary">
Submit
</button>
</div>

</div>
</form>
</div>
)
}