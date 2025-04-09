import LoginForm from "@/components/Forms/Auth/login-form";
import Logo from "@/components/logo";

export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <div className="w-full max-w-sm mx-auto">
              <div className="space-y-2 mb-4">
                <h1 className="text-3xl font-semibold tracking-tight">
                  Log in to your account
                </h1>
                <p className="text-base text-gray-500">
                  Enter your email below to log in
                </p>
              </div>
              <LoginForm />
            </div>
          </div>
        </div>
      </div>
      <div className="relative hidden bg-muted lg:block">
        <img
          src="https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?w=800&dpr=2&q=80"
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>
    </div>
  );
}
