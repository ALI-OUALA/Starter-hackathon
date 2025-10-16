import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

interface RegisterDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function RegisterDialog({ open, onOpenChange }: RegisterDialogProps) {
  const handleGoogleFormsClick = () => {
    const googleFormsUrl = "https://forms.gle/starter-hackathon";
    const newWindow = window.open(googleFormsUrl, "_blank", "noopener,noreferrer");
    if (newWindow) {
      newWindow.opener = null;
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="bg-purple-950/95 border-purple-500/30">
        <DialogHeader>
          <DialogTitle className="text-2xl text-purple-100">
            Register for STARTER
          </DialogTitle>
          <DialogDescription className="text-purple-300/80">
            You'll be redirected to our Google Forms registration page. Make
            sure to fill out all required information.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 pt-4">
          <div className="bg-purple-900/30 p-4 rounded-lg border border-purple-500/20">
            <p className="text-sm text-purple-300/80">
              Please have the following information ready:
            </p>
            <ul className="mt-2 space-y-1 text-sm text-purple-300/60">
              <li>• Full name and email</li>
              <li>• School/University or Company</li>
              <li>• Experience level</li>
              <li>• Areas of interest</li>
            </ul>
          </div>
          <Button
            onClick={handleGoogleFormsClick}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
          >
            Continue to Registration
            <ExternalLink className="ml-2 w-4 h-4" />
          </Button>
          <p className="text-xs text-purple-400/60 text-center">
            By registering, you agree to our terms and conditions
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
