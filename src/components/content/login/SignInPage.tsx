"use client";
import React from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "../../ui/button";
// import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../../ui/form";
import BoxWrapper from "../../layout/BoxWrapper";
import { Input, InputPassword } from "../../ui/input";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have than 8 characters"),
});

const SignInPage = () => {
  const router = useRouter();

  const SignIn_cancel = () => {
    router.push("/");
  };

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <BoxWrapper>
      <div className=" flex flex-col justify-center items-center py-10 px-5">
        <div className="py-2">
          <h1 className="text-3xl">Signin User</h1>
          <p>Pls login for using extra features</p>
        </div>
        <div className="w-full"></div>
      </div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6 px-2 md:px-10"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  <Input placeholder="Email" type="email" {...field} />
                </FormControl>
                {/* <FormDescription>{}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                {/* <FormLabel>Username</FormLabel> */}
                <FormControl>
                  {/* <Input  /> */}
                  <InputPassword
                    id="password"
                    type="password"
                    placeholder="Password"
                    {...field}
                    required
                  />
                </FormControl>
                {/* <FormDescription>{}</FormDescription> */}
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="w-full flex items-center justify-center ">
            <Button type="submit">Submit</Button>
          </div>
          <div className="w-full flex items-center justify-center gap-2 ">
            <p>New user?</p>
            <Link href="./signup">
              {" "}
              <span className="underline">Signup</span>
            </Link>
          </div>
        </form>
      </Form>
    </BoxWrapper>
  );
};

export default SignInPage;
