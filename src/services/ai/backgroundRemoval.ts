import { removeBackground } from "@imgly/background-removal";

// Configure publicly accessible URL for the models
const publicUrl = window.location.href.split('/').slice(0, -1).join('/');

export const processImage = async (
    image: Blob | string,
    onProgress?: (progress: number) => void
): Promise<Blob> => {
    try {
        const blob = await removeBackground(image, {
            publicPath: `${publicUrl}/imgly-data/`,
            progress: (key, current, total) => {
                if (onProgress) {
                    onProgress(current / total);
                }
            },
        });
        return blob;
    } catch (error) {
        console.error("Background removal failed:", error);
        throw error;
    }
};
