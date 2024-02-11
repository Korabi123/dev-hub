"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "~/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/form";
import { Input } from "~/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/card";
import { Textarea } from "~/textarea";
import { PictureEditSchema } from "@/schemas";
import { useCurrentUser } from "@/hooks/use-current-user";
import { updateUser } from "@/actions/updateUser";
import { useState, useTransition } from "react";
import ImageUpload from "@/app/(routes)/create/components/image-upload";
import { updatePicture } from "@/actions/updatePicture";
import { BackButton } from "@/components/auth/back-button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";

const PicturePage = () => {
  const user = useCurrentUser();

  const router = useRouter();

  const [isPending, startTransition] = useTransition();

  const [error, setError] = useState<string | null>();
  const [success, setSuccess] = useState<string | null>();

  const form = useForm<z.infer<typeof PictureEditSchema>>({
    resolver: zodResolver(PictureEditSchema),
    defaultValues: {
      image: `${!user?.image ? "" : user?.image}`,
    },
  });

  const onSubmit = (values: z.infer<typeof PictureEditSchema>) => {
    startTransition(() => {
      updatePicture(values)
        .then((data) => {
          if (data?.error) {
            setError(data.error);
          } else {
            setSuccess(data?.success);
          }
        })
        .catch(() => {
          setError("Something went wrong!");
        })
        .finally(() => {
          router.refresh();
        })
    });
  };

  return (
    <div className="h-full">
      <div className="flex sm:ml-72 sm:h-[100vh] py-20 items-center justify-center">
        <Card className="sm:w-[350px] w-full select-none">
          <CardHeader>
            <CardTitle className="font-bold tracking-tight">
              Edit Profile Picture
            </CardTitle>
            <CardDescription>Change your profile picture.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile picture</FormLabel>
                      <FormControl>
                        <ImageUpload
                          disabled={isPending}
                          value={field.value ? [field.value] : []}
                          onChange={(url) => field.onChange(url)}
                          onRemove={() => field.onChange("")}
                        />
                      </FormControl>
                      <FormDescription>
                        This is the profile picture of your user.
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormError message={error!} />
                <FormSuccess message={success!} />
                <Button className="w-full" type="submit">Update</Button>
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <BackButton label="Back to profile" href="/profile" />
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default PicturePage;
