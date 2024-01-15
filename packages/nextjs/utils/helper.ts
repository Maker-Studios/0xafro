import { toast } from "~~/components/ui/use-toast";

export function fileToDataURI(file: File) {
  const maxSizeInBytes = 5 * 1024 * 1024;

  if (file && !file.type.startsWith("image/")) {
    // Valid image file selected, handle it here
    toast({
      variant: "destructive",
      description: "File selected is not an image",
    });

    return { error: true };
  }

  if (file && file.size >= maxSizeInBytes) {
    toast({
      variant: "destructive",
      description: "Image is above 5mb",
    });

    return { error: true };
  }

  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const dataURI = reader.result;
      resolve(dataURI);
    };

    reader.onerror = error => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
}

export function hexToRgba(hex: string, alpha: number) {
  // Remove the # character if it exists
  hex = hex.replace(/^#/, "");

  // Parse the hex values for red, green, and blue
  const red = parseInt(hex.slice(0, 2), 16);
  const green = parseInt(hex.slice(2, 4), 16);
  const blue = parseInt(hex.slice(4, 6), 16);

  // Check if alpha is provided, otherwise default to 1 (opaque)
  if (typeof alpha === "undefined") {
    alpha = 1;
  }

  // Ensure alpha is in the range [0, 1]
  alpha = Math.min(1, Math.max(0, alpha));

  // Create the RGBA string
  const rgba = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return rgba;
}
