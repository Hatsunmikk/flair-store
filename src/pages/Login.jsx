import { useState } from "react";
import { toast } from "react-toastify";

function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    if (!password) {
      newErrors.password = "Password is required";
    } else if (password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      // Extract name from email
      const userName = email
        .split("@")[0]
        .split(".")
        .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
        .join(" ");

      toast.success(`Welcome, ${userName}!`);

      // Simulate login
      localStorage.setItem("userEmail", email);

      setEmail("");
      setPassword("");

      if (onLogin) onLogin(); // Notify App for redirect/update
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F6F8ED] pt-24">
      <div className="bg-white border border-[#C7D9DD] shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-[#ADB2D4]">
          Login to FlairStore
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border rounded-md border-[#ADB2D4] focus:outline-none focus:ring-2 focus:ring-[#ADB2D4]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border rounded-md border-[#ADB2D4] focus:outline-none focus:ring-2 focus:ring-[#ADB2D4]"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-[#ADB2D4] hover:bg-[#C7D9DD] text-white py-2 rounded-md transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
