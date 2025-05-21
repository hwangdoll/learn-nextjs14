import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

interface MobieDetailParam {
  params: {
    id: string;
  };
}

export default async function MovieDetail({
  params: { id },
}: MobieDetailParam) {
  return (
    <div>
      <Suspense fallback={<h1>Loading movie info...</h1>}>
        <MovieInfo id={id} />
      </Suspense>
      <Suspense fallback={<h1>Loading movie Videos...</h1>}>
        <MovieVideos id={id} />
      </Suspense>
    </div>
  );
}
