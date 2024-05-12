import { getPlaiceholder } from "plaiceholder";

export async function getBlurData(imageSrc) {
    const buffer = await fetch(imageSrc).then(res => res.arrayBuffer());
    const data = await getPlaiceholder(buffer);
    return data;
}
