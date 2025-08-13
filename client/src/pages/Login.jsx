import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useLoginUserMutation, useRegisterUserMutation } from "../features/authApi";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: "",
    password: "",
  });

  const [signupInput, setSignupInput] = useState({
    name: "",
    email: "",
    password: "", 
  });

  const [loginUser , 
    {data:loginData , 
    error:loginError,
    isLoading:loginLoading , 
    isSuccess:loginSuccess}] 
    = useLoginUserMutation();

  const [registerUser , 
    {data:registerData , 
    error:registerError,
    isLoading:registerLoading , 
    isSuccess:registerSuccess
    }] 
    = useRegisterUserMutation();

  const navigate = useNavigate();

  const inputChangeHandler = (type, event) => {
    const { name, value } = event.target;

    if (type == "login") {
      setLoginInput({ ...loginInput, [name]: value });
    }else{
      setSignupInput({ ...signupInput, [name]: value });
    }
  };

  const handleRegistration = async(type)=>{

    const inputData = type == 'signup' ? signupInput : loginInput;

    const action = type == 'signup' ? registerUser : loginUser;

    await action(inputData);
  }

  useEffect(()=>{
    if(registerSuccess && registerData){
      toast.success("User Registered Successfully");
    }

    else if(loginSuccess && loginData){
      toast.success("User Logged In Successfully");
      navigate('/');
    }

    else if(registerError){
      toast.error("User Registration Failed");
    }

    else if(loginError){
      toast.error("User Login Failed");
    }
  },[loginLoading,registerLoading,loginData,registerData,loginError,registerError]);

  return (
    <>
      <NavBar />
      <div className="flex items-center justify-center min-h-screen bg-gray-50 mt-16">
        <div className="w-full max-w-md p-6 space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold">Welcome Back</h1>
            <p className="text-gray-500">
              Please sign in or create an account to continue
            </p>
          </div>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="login" className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Login to your account</CardTitle>
                <CardDescription>
                  Enter your credentials to access your account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={loginInput.email}
                    onChange={(e) => inputChangeHandler("login", e)}
                  />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="password">Password</Label>
                    <button
                    type="button"
                    onClick={() => navigate('/forgot-password')}
                    className="text-sm text-blue-600 hover:underline"
                  >
                    Forgot password?
                  </button>
                  </div>
                  <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    value={loginInput.password}
                    onChange={(e) => inputChangeHandler("login", e)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                onClick={()=>handleRegistration("login")}
                className="w-full"
                disabled={loginLoading}>
                  {
                    loginLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Logging In...
                      </>
                    ): "Login"
                  }
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent 
          value="signup" 
          className="pt-4">
            <Card>
              <CardHeader>
                <CardTitle>Create an account</CardTitle>
                <CardDescription>
                  Enter your information to create an account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    value={signupInput.name}
                    onChange={(e) => inputChangeHandler("signup", e)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-email">Email</Label>
                  <Input
                    id="signup-email"
                    name="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                    value={signupInput.email}
                    onChange={(e) => inputChangeHandler("signup", e)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="signup-password">Password</Label>
                  <Input
                    id="signup-password"
                    name="password"
                    type="password"
                    required
                    value={signupInput.password}
                    onChange={(e) => inputChangeHandler("signup", e)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="confirm-password">Confirm Password</Label>
                  <Input
                    id="confirm-password"
                    name="confirmPassword"
                    type="password"
                    required
                    value={signupInput.confirmPassword || ''}
                    onChange={(e) => inputChangeHandler("signup", e)}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button 
                onClick={()=>handleRegistration("signup")}
                className="w-full"
                disabled={registerLoading}>
                  {
                    registerLoading ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Creating Account...
                      </>
                    ) : "Create Account"
                  }
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    </>
  );
};

export default Login;
