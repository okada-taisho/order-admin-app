"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { signIn as signInByNextAuth } from "next-auth/react";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const SingIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const form = useForm();
  const signIn = async () => {
    if (!email) return;
    if (!password) return;

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const idToken = await userCredential.user.getIdToken();
      await signInByNextAuth("credentials", {
        idToken,
        callbackUrl: "/",
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <Card className="max-w-[400px] mx-auto">
        <CardHeader>
          <CardTitle>ログイン</CardTitle>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form>
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>メールアドレス</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="メールアドレス"
                        {...field}
                        onChange={(event) => setEmail(event.target.value)}
                        type="email"
                        value={email}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                
                render={({ field }) => (
                  <FormItem className="mt-4">
                    <FormLabel className="">パスワード</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="パスワード"
                        {...field}
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                type="button"
                className="bg-blue-500 mt-4"
                onClick={() => {
                  signIn();
                }}
              >
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter>
        </CardFooter>
      </Card>
    </>
  );
};

export default SingIn;
