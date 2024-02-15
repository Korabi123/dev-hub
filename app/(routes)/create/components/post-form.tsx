import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import ImageUpload from "./image-upload";
import { useState } from "react";
import { cn } from "@/lib/utils";
import {
  Bold,
  Heading1,
  Heading2,
  Heading3,
  Italic,
  Loader,
} from "lucide-react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { ListBulletIcon } from "@radix-ui/react-icons";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  content: z
    .string()
    .min(10, {
      message: "Content Must Be At least 10 Characters.",
    })
    .max(4000, {
      message: "Content Cannot Be Longer than 4000 Characters.",
    }),
  imageUrl: z.string().min(1, {
    message: "Image is required.",
  }),
});

export const revalidate = 0;

const PostForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
      imageUrl: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsLoading(true);

      await axios.post("/api/create", values);
      router.push("/profile");
      router.refresh();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex sm:ml-72 py-20 items-center justify-center">
      <Card className="lg:w-[800px] md:w-[500px] w-full select-none">
        <CardHeader>
          <CardTitle className="font-bold tracking-tight">
            Create Post
          </CardTitle>
          <CardDescription>Create A Public post.</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Title</FormLabel>
                    <FormControl>
                      <Input
                        disabled={isLoading}
                        placeholder="Forms In NextJS 14"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the title that will be displayed in your post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="content"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post Content</FormLabel>
                    <FormControl>
                      <>
                        <div className="flex space-x-4">
                          <ToggleGroup type="multiple">
                            <Button
                              type="button"
                              size={"sm"}
                              variant={"outline"}
                              onClick={() => form.setValue("content", `${field.value} # `)}
                              value="heading 1"
                              aria-label="Toggle Heading 1"
                            >
                              <Heading1 className="h-4 w-4" />
                            </Button>
                            <Button
                              type="button"
                              size={"sm"}
                              variant={"outline"}
                              onClick={() => form.setValue("content", `${field.value} ## `)}
                              value="heading 2"
                              aria-label="Toggle Heading 2"
                            >
                              <Heading2 className="h-4 w-4" />
                            </Button>
                            <Button
                              type="button"
                              size={"sm"}
                              variant={"outline"}
                              onClick={() => form.setValue("content", `${field.value} ### `)}
                              value="heading 3"
                              aria-label="Toggle Heading 3"
                            >
                              <Heading3 className="h-4 w-4" />
                            </Button>
                          </ToggleGroup>
                          <ToggleGroup type="single">
                            <Button
                              type="button"
                              size={"sm"}
                              variant={"outline"}
                              onClick={() => form.setValue("content", `${field.value} - `)}
                              value="bullet list"
                              aria-label="Toggle Bullet list"
                            >
                              <ListBulletIcon className="h-4 w-4" />
                            </Button>
                          </ToggleGroup>
                          <ToggleGroup type="multiple">
                            <ToggleGroupItem
                              className="border"
                              onClick={() =>
                                form.setValue("content", `${field.value}**`)
                              }
                              value="bold"
                              aria-label="Toggle Bold Text"
                            >
                              <Bold className="h-4 w-4" />
                            </ToggleGroupItem>
                            <ToggleGroupItem
                              className="border"
                              onClick={() =>
                                form.setValue("content", `${field.value}*`)
                              }
                              value="italic"
                              aria-label="Toggle Italic Text"
                            >
                              <Italic className="h-4 w-4" />
                            </ToggleGroupItem>
                          </ToggleGroup>
                        </div>
                        <Textarea
                          disabled={isLoading}
                          placeholder="Start typing..."
                          {...field}
                          value={field.value}
                        />
                      </>
                    </FormControl>
                    <FormDescription>
                      This is the content that will be displayed in your post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="imageUrl"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Post Image</FormLabel>
                    <FormControl>
                      <ImageUpload
                        disabled={isLoading}
                        value={field.value ? [field.value] : []}
                        onChange={(url) => field.onChange(url)}
                        onRemove={() => field.onChange("")}
                      />
                    </FormControl>
                    <FormDescription>
                      This is the banner image of your post
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                className={cn(
                  "w-full",
                  isLoading ? "bg-opacity-80 cursor-not-allowed" : ""
                )}
                type="submit"
              >
                Create
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default PostForm;
