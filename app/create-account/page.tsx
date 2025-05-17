import FormButton from "@/components/form-btn";
import FormInput from "@/components/form-input";
import {
  ChatBubbleBottomCenterIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CreateAccount() {
  return (
    <div className="flex flex-col gap-8 py-8 px-6">
      <div className="flex flex-col gap-2 *:font-medium">
        <h1 className="text-2xl">환영합니다!</h1>
        <h2 className="text-xl">Fill in the form below to join</h2>
      </div>
      <form className="flex flex-col gap-3">
        <FormInput
          type="text"
          placeholder="Username"
          required={true}
          errorMsg={[]}
        />
        <FormInput
          type="email"
          placeholder="Email"
          required={true}
          errorMsg={[]}
        />
        <FormInput
          type="password"
          placeholder="Password"
          required={true}
          errorMsg={[]}
        />
        <FormInput
          type="password"
          placeholder="Confirm Password"
          required={true}
          errorMsg={[]}
        />
        <FormButton loading={false} text="Create Account" />
      </form>
      <div className="w-full h-px bg-neutral-500"></div>
      <div>
        <Link
          className="primary-btn flex h-10 items-center justify-center gap-2"
          href={"/sns"}
        >
          <span>
            <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" />
          </span>
          <span>Singup With SNS</span>
        </Link>
      </div>
    </div>
  );
}
