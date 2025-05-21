<<<<<<< HEAD
import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetchind Vides : ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
=======
import { API_URL } from "../app/(home)/page";

async function getVideos(id: string) {
  console.log(`Fetchind Vides : ${Date.now()}`);
  //   await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(`${API_URL}/${id}/videos`);
  return response.json();
}
export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  return <h6>{JSON.stringify(videos)}</h6>;
}
>>>>>>> faca6b4588f85cef41057d9bccc7ca737259752a
