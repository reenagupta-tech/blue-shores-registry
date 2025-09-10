import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ImageGallery } from "./ImageGallery";

interface ViewImagesModalProps {
  isOpen: boolean;
  onClose: () => void;
  requestData: {
    ngoName: string;
    species: string;
    area: string;
    location: string;
    photos: number;
  };
}

export function ViewImagesModal({ isOpen, onClose, requestData }: ViewImagesModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl">
            Site Documentation - {requestData.ngoName}
          </DialogTitle>
          <p className="text-sm text-muted-foreground">
            {requestData.species} plantation at {requestData.location} • {requestData.area}
          </p>
        </DialogHeader>
        <div className="space-y-6">
          <ImageGallery maxImages={requestData.photos} />
        </div>
      </DialogContent>
    </Dialog>
  );
}