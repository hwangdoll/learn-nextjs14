import { Suspense } from "react";
import MovieInfo from "../../../../components/movie-info";
import MovieVideos from "../../../../components/movie-videos";

type PageProps = {
  params: {
    id: string;
  };
};

export default async function MovieDetail(props: PageProps) {
  const { id } = props.params;
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
