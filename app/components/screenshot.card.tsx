import { Producthunt } from "@/db/schema/ph";
import Link from "next/link";
import UpVote from "./upvote";

export default function MiniScreenshotCard(props: {
  producthunt: Producthunt
}) {
  return <>
    <div className={`flex flex-col gap-5 hover:bg-muted p-3 rounded-lg transition hover:cursor-pointer`}>
      <div>
        <Link passHref key={props.producthunt.id} href={`/p/${props.producthunt.id}`}>
          <img loading="lazy" className=" h-[40vh] object-cover object-top w-full rounded-t-lg border-gray-400/20 border" src={`${process.env.NEXT_PUBLIC_CLOUDFLARE_R2}/${props.producthunt.uuid}.webp` || ""}></img>
        </Link>
      </div>
      <div className="flex flex-row gap-5 items-center">
        <img loading="lazy" className="h-10 rounded-md" src={props.producthunt.thumbnail?.url || ""}></img>
        <div className="flex flex-row w-full justify-between items-center">
          <div className="flex flex-col">
            <div className=" font-bold ">
              <Link className="hover:underline" href={props.producthunt.website || ""} target="_blank">{props.producthunt.name}</Link>
            </div>
            <div className=" text-muted-foreground">
              {props.producthunt.tagline}
            </div>
          </div>
          <div>
            <Link target="__blank" href={props.producthunt.url || ""}>
              <UpVote voteCount={props.producthunt.votesCount || 0} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  </>
}