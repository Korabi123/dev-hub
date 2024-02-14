import {Button} from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {Input} from "@/components/ui/input"
import {Label} from "@/components/ui/label"
import {useModal} from "@/hooks/use-modal-store";
import {useEffect, useState, useTransition} from "react";
import {useForm} from "react-hook-form";
import * as z from "zod";
import {UsernameSetSchema} from "@/schemas";
import {zodResolver} from "@hookform/resolvers/zod";
import {updateUser} from "@/actions/updateUser";
import {router} from "next/client";
import {FormError} from "@/components/form-error";
import {FormSuccess} from "@/components/form-success";
import { useConfettiStore } from "@/hooks/use-confetti-store";

export function SetUsernameModel() {
    const form = useForm<z.infer<typeof UsernameSetSchema>>({
        resolver: zodResolver(UsernameSetSchema),
        defaultValues: {
            username: ``,
        },
    });

    const [error, setError] = useState<string | null>();
    const [success, setSuccess] = useState<string | null>();

    const { onClose } = useModal();
    const {isOpen, type} = useModal();
    const isModalOpen = isOpen && type === "set-username";
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => {
        setIsMounted(true);
    }, []);


    if (!isMounted) {
        return null;
    }

    const onSubmit = (values: z.infer<typeof UsernameSetSchema>) => {
        startTransition(() => {
            updateUser(values)
                .then((data) => {
                    if (data.error) {
                        setError(data.error);
                    }
                    if (data.success) {
                        setSuccess(data.success);
                        onClose()
                        router.replace(router.asPath)
                    }
                })
                .catch(() => {
                    setError("Something went wrong!");
                });
        });
    };


    return (
        <Dialog open={isModalOpen}>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Reserve username</DialogTitle>
                    <DialogDescription>
                        Reserve your DevHub username
                    </DialogDescription>
                </DialogHeader>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="grid gap-4 py-4">
                        <div className="grid grid-cols-4 items-center gap-4">
                            <Label htmlFor="username" className="text-right">
                                Username
                            </Label>
                            <Input
                                id="username"
                                placeholder="devhub"
                                className="col-span-3"
                                maxLength={15}
                                {...form.register('username')}  // Add this prop
                            />
                        </div>
                        {form.formState.errors.username && (
                            <FormError message={form.formState.errors.username.message}/>
                        )}
                    </div>
                    <DialogFooter>
                        <Button type="submit">Claim</Button>
                        <FormError message={error!} />
                        <FormSuccess message={success!} />
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    )
}
