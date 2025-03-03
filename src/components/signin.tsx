import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("discord")
      }}
    >
      <button type="submit" className="rounded-sm bg-accent-500 hover:bg-accent-600 transition text-white cursor-pointer py-1 px-4">Login</button>
    </form>
  )
} 