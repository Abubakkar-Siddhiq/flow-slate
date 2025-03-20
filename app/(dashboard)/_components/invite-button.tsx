import { OrganizationProfile } from "@clerk/nextjs";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

export const InviteButton = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    size="lg"
                    variant="outline"
                    className="flex items-center gap-x-2"
                >
                    <Plus className="h-4 w-4 mr-2" />
                    Invite members
                </Button>
            </DialogTrigger>
            <DialogContent className="p-0 bg-transparent border-none max-w-[880px]">
                <OrganizationProfile />
            </DialogContent>
        </Dialog>
    )
}